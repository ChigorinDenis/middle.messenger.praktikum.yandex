import Form from '../layouts/Form/Form';
import InputGroup from '../components/InputGroup/InputGroup';
import  { uppercaseFirstLetter } from '../utils/utils'


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
  login: {
    value: '',
    validationRules: [
      {
        validate: (value) => typeof value === 'string' && value.length >= 8,
        message: 'Пароль должен содержать не менее 8 символов',
      }
    ],
    error: null,
  },
  first_name: {
    value: '',
    validationRules: [
      {
        validate: (value) => typeof value === 'string' && value.length >= 8,
        message: 'Пароль должен содержать не менее 8 символов',
      }
    ],
    error: null,
  },
  second_name: {
    value: '',
    validationRules: [
      {
        validate: (value) => typeof value === 'string' && value.length >= 8,
        message: 'Пароль должен содержать не менее 8 символов',
      }
    ],
    error: null,
  },
  phone: {
    value: '',
    validationRules: [
      {
        validate: (value) => typeof value === 'string' && value.length >= 8,
        message: 'Пароль должен содержать не менее 8 символов',
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
  },
  password_check: {
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
    onBlur: () => { console.log('email blur'); },
    onChange: () => {},
    value: formState.email.value,
    error: formState.email.error
  },
  {
    title: 'Логин',
    type: 'text',
    name: 'login',
    placeholder: 'Введите логин',
    onBlur: () => {},
    onChange: () => {},
    value: formState.login.value,
    error: formState.login.error
  },
  {
    title: 'Имя',
    type: 'text',
    name: 'first_name',
    placeholder: 'Введите имя',
    onBlur: () => {},
    onChange: () => {},
    value: formState.first_name.value,
    error: formState.first_name.error
  },
  {
    title: 'Фамилия',
    type: 'text',
    name: 'second_name',
    placeholder: 'Введите фамилию',
    onBlur: () => {},
    onChange: () => {},
    value: formState.second_name.value,
    error: formState.second_name.error
  },
  {
    title: 'Телефон',
    type: 'tel',
    name: 'phone',
    placeholder: 'Введите телефон',
    onBlur: () => {},
    onChange: () => {},
    value: formState.phone.value,
    error: formState.phone.error,
  },
  {
    title: 'Пароль',
    type: 'password',
    name: 'password',
    placeholder: 'Введите пароль',
    onBlur: () => {},
    onChange: () => {},
    value: formState.password.value,
    error: formState.password.error
  },
  {
    title: 'Повторите пароль',
    type: 'password',
    name: 'password_check',
    placeholder: 'Введите пароль',
    onBlur: () => {},
    onChange: () => {},
    value: formState.password_check.value,
    error: formState.password_check.error
  }
];


export default class SignupPage {
  getContent(): HTMLElement | null {
    const form = new Form({
      state: formState,                     
      title: 'Регистрация',
      inputGroupSettings,
    });
    // setTimeout(() => {
    //   form.setProps({
    //   state: formState,
    //   title: 'Registarion',
    //   inputGroupSettings,
    //   });
    // }, 5000)
    return form.getContent();

  }
}