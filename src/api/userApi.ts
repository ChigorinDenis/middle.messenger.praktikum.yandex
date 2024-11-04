import HTTP from '../utils/http/http';
import BaseAPI from '../utils/http/baseApi';


export default class UserApi extends BaseAPI {
  private apiInstance: HTTP;

  constructor() {
    super('user');
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
  
  public searchUser(data: Indexed): Promise<XMLHttpRequest> {
    return this.apiInstance.post(`${this.apiURL}/search`, { data })
  }

  public updateUser(data: Indexed): Promise<XMLHttpRequest> {
    return this.apiInstance.put(`${this.apiURL}/profile`, { data })
  }

  public updatePassword(data: Indexed): Promise<XMLHttpRequest> {
    return this.apiInstance.put(`${this.apiURL}/password`, { data })
  }
  
  public updateAvatar(data: FormData): Promise<XMLHttpRequest> {
    return this.apiInstance.put(`${this.apiURL}/profile/avatar`, { data })
  }

}
