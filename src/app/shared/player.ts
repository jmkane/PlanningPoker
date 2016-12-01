export default class Player {

  _id: any;
  name: string;
  password: string;
  state: string;
  country: string;
  company: string;
  location: string;



  constructor(name: string,
              password: string,
              state: string,
              country: string,
              company: string,
              location: string
  ) {
    this.name =  name;
    this.password = password;
    this.state = state;
    this.country = country;
    this.company = company;
    this.location = location;
  }
}
