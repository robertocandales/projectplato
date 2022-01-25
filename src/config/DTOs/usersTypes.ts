export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface UserList {
  id: string | number;
  name: string;
  username: string;
  email: string;
  address: Address;
  geo: Geo;
  phone: string;
  website: string;
  company: Company;
}
