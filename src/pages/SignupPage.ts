import Form from '../layouts/Form/Form';


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
    onBlur: (e) => { console.log('onBlur is worked 1111')},
    onChange: onChange(formState),
    value: formState.email.value
  },
  {
    title: 'Логин',
    type: 'text',
    name: 'login',
    placeholder: 'Введите логин',
    onBlur: (e) => { console.log('onBlur is worked 1111')},
    onChange: onChange(formState),
    value: formState.login.value
  },
  {
    title: 'Имя',
    type: 'text',
    name: 'first_name',
    placeholder: 'Введите имя',
    onBlur: (e) => { console.log('onBlur is worked 1111')},
    onChange: onChange(formState),
    value: formState.first_name.value
  },
  {
    title: 'Фамилия',
    type: 'text',
    name: 'second_name',
    placeholder: 'Введите фамилию',
    onBlur: (e) => { console.log('onBlur is worked 1111')},
    onChange: onChange(formState),
    value: formState.second_name.value
  },
  {
    title: 'Телефон',
    type: 'tel',
    name: 'phone',
    placeholder: 'Введите телефон',
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
  },
  {
    title: 'Повторите пароль',
    type: 'password',
    name: 'password_check',
    placeholder: 'Введите пароль',
    onBlur: (e) => { console.log('onBlur is worked 222')},
    onChange: onChange(formState),
    value: formState.password_check.value
  }
];



export default class SignupPage {
  getContent(): HTMLElement | null {
    const form = new Form({
      state: formState,
      title: 'Регистрация',
      inputGroupSettings,
    });
    return form.getContent();

  }
}