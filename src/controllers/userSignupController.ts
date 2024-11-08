import AuthApi from '../api/authApi';
import store from '../store/store';
import Router from '../routing/Router'

const router = new Router('#app');
const authApi = new AuthApi();

export default class UserSignupController implements FormController {
  public async signup(data:Indexed) {
    try {
      const signupResponse = await authApi.createUser(data);
      console.log('signUpRespose', signupResponse.response)
      if(signupResponse.status === 200) {
        store.reset();
        console.log('Signup successful');
        router.go('/messenger');
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  public onSubmit(data:Indexed) {
    this.signup(data);
  }
} 
