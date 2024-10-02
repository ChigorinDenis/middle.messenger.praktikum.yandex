import Input from "./components/Input/Input";
import InputGroup from "./components/InputGroup/InputGroup";
import Form from "./layouts/Form/Form";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ChatsList from './layouts/ChatsList/ChatsList'
import MessageBox from "./layouts/MessageBox/MessageBox";
import SidePanel from "./layouts/SidePanel/SidePanel";

import ChatPage from "./pages/ChatPage";

export default class App {

  private appElement: HTMLElement | null;

  constructor() {
    this.appElement = document.getElementById('app');
  }

  render(): string {
    // const loginPage = new LoginPage();
    const signupPage = new ChatPage();
    // const signupPage = new SignupPage();
    this.appElement.replaceWith(signupPage.getContent());
    return '';
  }
}
