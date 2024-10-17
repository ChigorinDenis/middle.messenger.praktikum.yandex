import HTTP from '../utils/http/http';
import BaseAPI from '../utils/http/baseApi';



export default class UserApi extends BaseAPI {
  private apiInstance: HTTP;

  constructor() {
    super('auth');
    this.apiInstance = new HTTP();
  }

  public create(): Promise<XMLHttpRequest> {
    const user = {
      "first_name": "Chada",
      "second_name": "Rodis",
      "login": "chadaRodis",
      "email": "chadarodis@tormance.com",
      "password": "rodisChada",
      "phone": "81119991111"
    };
    return this.apiInstance.post(`${this.apiURL}/signup`, { data: user,})
  }

  public login(data: Indexed): Promise<XMLHttpRequest> {
    const auth = {
      "login": "chadaRodis",
      "password": "rodisChada",
    }
    return this.apiInstance.post(`${this.apiURL}/signin`, { data });  
  }

  public logout(): Promise<XMLHttpRequest> {
    return this.apiInstance.post(`${this.apiURL}/logout`);
  }

  public getUser(): Promise<XMLHttpRequest> {
    return this.apiInstance.get(`${this.apiURL}/user`)
  }

}
