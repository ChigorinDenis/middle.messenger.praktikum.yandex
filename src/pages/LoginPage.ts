import Form from '../layouts/Form/Form';


const onChange = (state:FormState) => (e: Event): void => {
  const target = e.target as HTMLInputElement;
  const { name, value } = target;
  if (name in state) {
    state[name].value = value;
  }
  console.log(state);
}

const onBlur = (state:FormState) => (e: Event): void => {
  const target = e.target as HTMLInputElement;
  const { name, value } = target;
  if (name in state) {
    const { validationRules } = state[name];
    const invalidedRule = validationRules.find((rule) => (!rule.validate(value)));
    if (invalidedRule) {
      state[name].error = invalidedRule.message;
      console.log('InputError', state[name].error);
    }
  }
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
    onBlur: onBlur(formState),
    onChange: onChange(formState),
    value: formState.email.value,
    error: formState.email.error
    
  },
  {
    title: 'Пароль',
    type: 'password',
    name: 'password',
    placeholder: 'Введите пароль',
    onBlur: (e) => { console.log('onBlur is worked 222')},
    onChange: onChange(formState),
    value: formState.password.value,
    error: formState.password.error
  }
];



export default class LoginPage {
  getContent(): HTMLElement | null {
    const form = new Form({
      state: formState,
      title: 'Вход',
      inputGroupSettings,
    });
    setTimeout(() => {
      form.setProps({
      state: formState,
      title: 'Login',
      inputGroupSettings,
      });
    }, 5000)
    return form.getContent();

  }
}