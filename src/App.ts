import Block from "./framework/Block";
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

interface PageClass {
  new (): Block
}
type  MappingPage = {
  [key: string]: PageClass
}

export default class App {

  private appElement: HTMLElement | null;
  private nav: HTMLElement | null;

  constructor() {
    this.appElement = document.getElementById('app');
    this.nav = document.getElementById('temp');
  }

  render(): string {
    // const mappingPage:MappingPage = {
    //   main: ChatPage,
    //   login: LoginPage,
    //   signup: SignupPage,
    //   page500: Page500,
    //   page404: Page404,
    //   profile: ProfilePage,
    //   edit: EditProfilePage,
    //   password: EditPasswordPage   
    // };
    
    const links = new Links();
    if (this.nav) {
      this.nav.innerHTML = links.render();
    }
    
    // const navigation = this.nav?.querySelector('.nav-container');

    // if (navigation) {
    //   navigation.addEventListener('click', (event: Event) => {
    //     event.preventDefault();
    //     const target = event.target as HTMLElement;
    //     if (target.classList.contains('nav-links')) {
    //       const pageName = target.getAttribute('data-template');
    //       if (pageName && mappingPage[pageName]) {
    //         const Page = mappingPage[pageName];
    //         const newPage = new Page();
    //         if (this.appElement) {
    //           this.appElement.replaceChildren(newPage.getContent());
    //         }
    //       }
    //     }
    //   });
    // }

    // const Page = mappingPage['main'];
    // const mainPage = new Page();
    // if (this.appElement) {
    //   this.appElement.replaceChildren(mainPage.getContent());
    // }
    const requireAuth = (pathname: string) => {
      const isAuthenticated = false;
      if (!isAuthenticated) {
        router.go('/login');
        return false;
      }
      return true;
    };

    const router = new Router('#app');
    router
    .use('/', ChatPage, requireAuth)
    .use('/login', LoginPage,)
    .use('/signup', SignupPage)
    .use('/profile', ProfilePage)
    .use('/edit-password', EditPasswordPage)
    .use('/edit-profile', EditProfilePage)
    .use('/404', Page404)
    .use('/500', Page500)
    .start();
    return '';
  }
}
