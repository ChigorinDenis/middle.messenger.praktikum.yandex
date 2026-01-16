import Form from '../layouts/Form/Form';
import Block from '../framework/Block';
import Router from '../routing/Router';
import getValidationFunc from '../validation/validation';
import validationRules from '../validation/validationRules';
import UserSignupController from '../controllers/userSignupController';

const inputGroupList: InputGroupSettings[] = [
  {
    title: 'Email',
    type: 'text',
    name: 'email',
    placeholder: 'Введите email',
    onBlur: () => {},
    onChange: () => {},
    value: '',
    error: null
  },
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
    title: 'Имя',
    type: 'text',
    name: 'first_name',
    placeholder: 'Введите имя',
    onBlur: () => {},
    onChange: () => {},
    value: '',
    error: null
  },
  {
    title: 'Фамилия',
    type: 'text',
    name: 'second_name',
    placeholder: 'Введите фамилию',
    onBlur: () => {},
    onChange: () => {},
    value: '',
    error: null
  },
  {
    title: 'Телефон',
    type: 'tel',
    name: 'phone',
    placeholder: 'Введите телефон',
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
  {
    title: 'Повторите пароль',
    type: 'password',
    name: 'password_check',
    placeholder: 'Введите пароль',
    onBlur: () => {},
    onChange: () => {},
    value: '',
    error: null
  }
];

const validate = getValidationFunc(validationRules);
const router = new Router('#app'); 
const userSignupController = new UserSignupController();

export default class SignupPage extends Block{
  constructor() {
    super({
      Form: new Form({                   
        title: 'Регистрация',
        btnSubmitTitle: 'Зарегистрироваться',
        btnLinkTitle: 'Войти',
        inputGroupList,
        validate,
        bgdForm: 'bgd-dark',
        btnLinkClick: () => {
          router.go('/')
        },
        controller: userSignupController,
      })
    })
  }
  public render(): string  {
    return `
          <div class="container-form">
            {{{Form}}}
          </div>
        `;
  }
}
