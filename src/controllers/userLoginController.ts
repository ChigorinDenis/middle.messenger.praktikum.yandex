import AuthApi from '../api/authApi';
import store from '../store/store';
import Router from '../routing/Router'

const router = new Router('#app');
const authApi = new AuthApi();

export default class UserLoginController implements FormController {
  public async login(data: Indexed) {
    console.log('dataaa', data)
    try {
      const loginResponse = await authApi.login(data);
      if (loginResponse.response === 'OK' || loginResponse.status === 200) {
        console.log('Login successful');
        // const userResponse = await userApi.getUser();
        // store.set('auth.user', userResponse.response);
        // console.log(store.getState('auth.user'));
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
    // try {
    //   const logoutResponse = await userApi.logout();
    //   if (logoutResponse.response === 'OK') {
    //     router.go('/login');
    //   }
    //   else {
    //     console.log('Пользователь уже покинул')
    //   }
    // } catch (error) {
      
    // }
    const loginResponse = await authApi.logout()
    console.log(loginResponse.response)
  }

  public onSubmit(data: Indexed) {
    this.login(data);
  }
} 
