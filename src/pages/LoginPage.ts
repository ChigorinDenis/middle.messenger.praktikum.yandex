import Form from '../layouts/Form/Form';
import Router from '../routing/Router';
import Block from '../framework/Block';
import getValidationFunc from '../validation/validation';
import validationRules from '../validation/validationRules';
import UserLoginController from '../controllers/userLoginController';

const userLoginController = new UserLoginController();
const router = new Router('#app');   
const inputGroupList: InputGroupSettings[] = [
  {
    title: 'Логин',
    type: 'text',
    name: 'login',
    placeholder: 'Введите логин',
    onBlur: () => {},
    onChange: () => {},
    value: '',
    error: null
  },
  {
    title: 'Пароль',
    type: 'password',
    name: 'password',
    placeholder: 'Введите пароль',
    onBlur: () => {},
    onChange: () => {},
    value: '',
    error: null
  },
];

const validate = getValidationFunc(validationRules);

export default class LoginPage  extends Block{
  constructor() {
    super({
      Form: new Form({
        title: 'Вход',
        btnSubmitTitle: 'Войти',
        btnLinkTitle: 'Нет аккаунта?',
        inputGroupList,
        validate,
        bgdForm: 'bgd-dark',
        btnLinkClick: () => {
          router.go('/sign-up')
        },
        controller: userLoginController
      })
    });
  }
  public render(): string  {
    return `
          <div class="container-form">
            {{{Form}}}
          </div>
        `;
  }
}
