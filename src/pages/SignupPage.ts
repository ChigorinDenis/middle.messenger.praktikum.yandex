import Form from '../layouts/Form/Form';
import getValidationFunc from '../validation/validation';
import validationRules from '../validation/validationRules';

// const formState: FormState = {
//   email: {
//     value: 'ddd',
//     validationRules: [
//       {
//         validate: (value) => typeof value === 'string' && value.includes('@'),
//         message: 'Email должен содержать @',
//       },
//       {
//         validate: (value) => typeof value === 'string' && value.length > 5,
//         message: 'Email должен быть длиннее 5 символов',
//       }
//     ],
//     error: null,
//   },
//   login: {
//     value: '',
//     validationRules: [
//       {
//         validate: (value) => typeof value === 'string' && value.length >= 8,
//         message: 'Пароль должен содержать не менее 8 символов',
//       }
//     ],
//     error: null,
//   },
//   first_name: {
//     value: '',
//     validationRules: [
//       {
//         validate: (value) => typeof value === 'string' && value.length >= 8,
//         message: 'Пароль должен содержать не менее 8 символов',
//       }
//     ],
//     error: null,
//   },
//   second_name: {
//     value: '',
//     validationRules: [
//       {
//         validate: (value) => typeof value === 'string' && value.length >= 8,
//         message: 'Пароль должен содержать не менее 8 символов',
//       }
//     ],
//     error: null,
//   },
//   phone: {
//     value: '',
//     validationRules: [
//       {
//         validate: (value) => typeof value === 'string' && value.length >= 8,
//         message: 'Пароль должен содержать не менее 8 символов',
//       }
//     ],
//     error: null,
//   },
//   password: {
//     value: '',
//     validationRules: [
//       {
//         validate: (value) => typeof value === 'string' && value.length >= 8,
//         message: 'Пароль должен содержать не менее 8 символов',
//       }
//     ],
//     error: null,
//   },
//   password_check: {
//     value: '',
//     validationRules: [
//       {
//         validate: (value) => typeof value === 'string' && value.length >= 8,
//         message: 'Пароль должен содержать не менее 8 символов',
//       }
//     ],
//     error: null,
//   }
// };

const inputGroupList: InputGroupSettings[] = [
  {
    title: 'Email',
    type: 'text',
    name: 'email',
    placeholder: 'Введите email',
    onBlur: () => { console.log('email blur'); },
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

export default class SignupPage {
  getContent(): HTMLElement | null {
    const form = new Form({                   
      title: 'Регистрация',
      inputGroupList,
      validate,
    });
    return form.getContent();

  }
}