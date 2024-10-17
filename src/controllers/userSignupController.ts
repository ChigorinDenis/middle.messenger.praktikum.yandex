import UserApi from '../api/userApi';
import store from '../store/store';
import Router from '../routing/Router'

const router = new Router('#app');
const userApi = new UserApi();

export default class UserSignupController implements FormController {
  public async signup() {
    try {
      const signupResponse = await userApi.create();
      if(signupResponse.response === 'OK') {
        console.log('Signup successful');
        const userResponse = await userApi.getUser();
        store.set('auth.user', userResponse.response);
        console.log(store.getState('auth.user'));
        router.go('/');
      }
    } catch (error) {
      
    }
    
  }

  public onSubmit() {
    this.signup();
  }
} 
