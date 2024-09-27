import Input from "./components/Input/Input";
import InputGroup from "./components/InputGroup/InputGroup";
import Form from "./layouts/Form/Form";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
const onChange = (state:FormState) => (e: Event): void => {
  const target = e.target as HTMLInputElement;
  const { name, value } = target;
  if (name in state) {
    state[name].value = value;
  }
  console.log(state);
}



const formState: FormState = {
  email: {
    value: 'ddd',
    validationRules: [
      {
        validate: (value) => typeof value === 'string' && value.includes('@'),
        message: 'Email должен содержать @',
      },
      {
        validate: (value) => typeof value === 'string' && value.length > 5,
        message: 'Email должен быть длиннее 5 символов',
      }
    ],
    error: null,
  },
  password: {
    value: '',
    validationRules: [
      {
        validate: (value) => typeof value === 'string' && value.length >= 8,
        message: 'Пароль должен содержать не менее 8 символов',
      }
    ],
    error: null,
  }
};

const inputGroupSettings: InputGroupSettings[] = [
  {
    title: 'Email',
    type: 'text',
    name: 'email',
    placeholder: 'Введите email',
    onBlur: (e) => { console.log('onBlur is worked 1111')},
    onChange: onChange(formState),
    value: formState.email.value
  },
  {
    title: 'Пароль',
    type: 'password',
    name: 'password',
    placeholder: 'Введите пароль',
    onBlur: (e) => { console.log('onBlur is worked 222')},
    onChange: onChange(formState),
    value: formState.password.value
  }
];



export default class App {

  private appElement: HTMLElement | null;

  constructor() {
    this.appElement = document.getElementById('app');
  }

  render(): string {
    // const form = new Form({
    //   state: formState,
    //   title: 'Регистрация',
    //   inputGroupSettings,
    // });
    // const loginPage = new LoginPage();
    const signupPage = new SignupPage();
    this.appElement.replaceWith(signupPage.getContent());
    return '';
    // const form = new InputGroup({
    //   title: 'Email',
    //   type: 'text',
    //   name: 'email',
    // placeholder: 'Введите email',
    //   onBlur: (e) => { console.log('onBlur is worked 1111')},
    //   onChange: (e) => { console.log('onChange is worked 111')},
    // });
    this.appElement.replaceWith(form.getContent());
    return '';
   
  }
}
