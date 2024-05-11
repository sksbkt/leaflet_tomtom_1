import axios from "axios";
import { LatLngLiteral } from "leaflet";

export async function reverseGeoCoding(latLng: LatLngLiteral) {
  const { lat, lng } = latLng;
  // console.log((await createReverseGeoCodingUrl(lat, lng)).addresses[0].address);
  const result = await (
    await createReverseGeoCodingUrl(lat, lng)
  ).addresses[0].address;
  console.log(result);

  if (result == null) {
    return null;
  }
  return result;
}

async function createReverseGeoCodingUrl(
  lat: number,
  lng: number
): Promise<AddressResponse> {
  const url = `https://api.tomtom.com/search/2/reverseGeocode/${lat}%2C${lng}.json?returnSpeedLimit=false&radius=10000&returnRoadUse=false&callback=cb&allowFreeformNewLine=false&returnMatchType=false&view=Unified&key=${
    import.meta.env.VITE_TOM_API_KEY
  }`;
  try {
    const res = await axios.get(url);
    if (res != null) {
      const jsonString = res.data.replace(/^cb\(/, "").replace(/\);?$/, "");
      return JSON.parse(jsonString);
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log("An unknown error occurred");
    }
  }
  throw new Error("Failed to fetch address information");
}
