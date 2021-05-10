export default class Config {
  static baseUrl = (function() {
    let baseUrl;

    if (process.env.NODE_ENV === "development") {
      baseUrl = "https://pokeapi.co/api/v2/";
    } else {
      baseUrl = "http://ec2-13-59-76-206.us-east-2.compute.amazonaws.com:8000/";
    }
    return baseUrl;
  })();

  static serviceHeaders = {
    "Content-Type": "application/json"
  };

  // static setAuthToken(token) {
  //   this.serviceHeaders.Authorization = "Token " + token;
  // }
}
