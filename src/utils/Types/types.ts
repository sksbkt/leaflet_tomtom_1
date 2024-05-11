interface Address {
  buildingNumber: string;
  streetNumber: string;
  routeNumbers: string[];
  street: string;
  streetName: string;
  streetNameAndNumber: string;
  countryCode: string;
  countrySubdivision: string;
  countrySecondarySubdivision: string;
  municipality: string;
  postalCode: string;
  municipalitySubdivision: string;
  neighbourhood: string;
  country: string;
  countryCodeISO3: string;
  freeformAddress: string;
  boundingBox: {
    northEast: string;
    southWest: string;
    entity: string;
  };
  extendedPostalCode: string;
  countrySubdivisionName: string;
  countrySubdivisionCode: string;
  localName: string;
}

interface AddressResponse {
  summary: {
    queryTime: number;
    numResults: number;
  };
  addresses: {
    address: Address;
    position: string;
    id: string;
  }[];
}
