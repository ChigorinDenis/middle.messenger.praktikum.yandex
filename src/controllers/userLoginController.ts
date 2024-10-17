import UserApi from '../api/userApi';
import store from '../store/store';
import Router from '../routing/Router'

const router = new Router('#app');
const userApi = new UserApi();

export default class UserLoginController implements FormController {
  public async login(data: Indexed) {
    console.log('dataaa', data)
    try {
      const loginResponse = await userApi.login(data);
      if (loginResponse.response === 'OK') {
        console.log('Login successful');
        const userResponse = await userApi.getUser();
        store.set('auth.user', userResponse.response);
        console.log(store.getState('auth.user'));
        router.go('/');
      }
      else {
        console.log('login failed', loginResponse)
      }
    } catch (error) {
      console.error('An error occurred during login or fetching user:', error);
    }
  }

  public async logout() {
    try {
      const logoutResponse = await userApi.logout();
      if (logoutResponse.response === 'OK') {
        router.go('/login');
      }
      else {
        console.log('Пользователь уже покинул')
      }
    } catch (error) {
      
    }
    
  }

  public onSubmit(data: Indexed) {
    this.login(data);
  }
} 
