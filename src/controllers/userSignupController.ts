import AuthApi from '../api/authApi';
import store from '../store/store';
import Router from '../routing/Router'

const router = new Router('#app');
const authApi = new AuthApi();

export default class UserSignupController implements FormController {
  public async signup() {
    try {
      const signupResponse = await authApi.create();
      if(signupResponse.response === 'OK') {
        console.log('Signup successful');
        const userResponse = await authApi.getUser();
        store.set('auth.user', userResponse.response);
        console.log(store.getState('auth.user'));
        router.go('/messenger');
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  public onSubmit() {
    this.signup();
  }
} 
