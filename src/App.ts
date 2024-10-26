import Links from "./layouts/Links/Links";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Page404 from './pages/Page404';
import Page500 from './pages/Page500';
import EditPasswordPage from './pages/EditPasswordPage';
import EditProfilePage from './pages/EditProfilePage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from "./pages/ChatPage";
import Router from "./routing/Router";
import store, {StoreEvents} from './store/store'
import AuthApi from "./api/authApi";

// interface PageClass {
//   new (): Block
// }
// type  MappingPage = {
//   [key: string]: PageClass
// }

export default class App {

  private appElement: HTMLElement | null;
  private nav: HTMLElement | null;

  constructor() {
    this.appElement = document.getElementById('app');
    this.nav = document.getElementById('temp');
    store.on(StoreEvents.Updated, () => {});
  }

  render(): string {
   
    const links = new Links();
    if (this.nav) {
      this.nav.innerHTML = links.render();
    }
    
    const requireAuth = async () => {
      const userStore = store.getState('auth.user');
      if (!userStore) {
        try {
          const authApi = new AuthApi();
          const userResponse = await authApi.getUser();
          if (userResponse.status === 200) {
            console.log('store', store.getState())
            store.set('auth.user', JSON.parse(userResponse.response));
            return true;
          }
        } catch (error) {
          console.log('Ошибка авторизации', error)
        }
        router.go('/login');
        return false;
      }

      return true;
    };

    const router = new Router('#app');
    router
    .use('/', ChatPage, requireAuth)
    .use('/login', LoginPage,)
    .use('/sign-up', SignupPage)
    .use('/settings', ProfilePage)
    .use('/edit-password', EditPasswordPage)
    .use('/edit-profile', EditProfilePage)
    .use('/404', Page404)
    .use('/500', Page500)
    .start();
    return '';
  }
}
