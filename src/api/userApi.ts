import HTTP from '../utils/http/http';
import BaseAPI from '../utils/http/baseApi';



export default class UserApi extends BaseAPI {
  private apiInstance: HTTP;

  constructor() {
    super('auth');
    this.apiInstance = new HTTP();
  }

  public create(): void {
    
    const user = {
      "first_name": "Chada",
      "second_name": "Rodis",
      "login": "chadaRodis",
      "email": "chadarodis@tormance.com",
      "password": "rodisChada",
      "phone": "81119991111"
    };
    this.apiInstance.post(`${this.apiURL}/signup`, { data: user,}).then((data) => {console.log(data)});
    console.log('UserApi is working', this.apiURL)
  }

  public login(): void {
    const auth = {
      "login": "chadaRodis",
      "password": "rodisChada",
    }
    this.apiInstance.post(`${this.apiURL}/signin`, { data: auth,})
      .then((data) => {console.log(data)})
      .catch((err) => {console.log(err)});
  }

  public logout(): void {
    this.apiInstance.post(`${this.apiURL}/logout`)
      .then((data) => {console.log(data)})
      .catch((err) => {console.log(err)});
  }

  public getUser(): void {
    this.apiInstance.get(`${this.apiURL}/user`)
      .then((data) => {console.log(data)})
      .catch((err) => {console.log(err)});
  }

}
