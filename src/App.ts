import Input from "./components/Input/Input";
import InputGroup from "./components/InputGroup/InputGroup";
import Form from "./layouts/Form/Form";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

export default class App {

  private appElement: HTMLElement | null;

  constructor() {
    this.appElement = document.getElementById('app');
  }

  render(): string {
    // const loginPage = new LoginPage();
    const signupPage = new SignupPage();
    this.appElement.replaceWith(signupPage.getContent());
    return '';
  }
}
