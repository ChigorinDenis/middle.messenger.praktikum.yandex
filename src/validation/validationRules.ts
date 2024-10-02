const validationRules = {
  email: [
    {
      validate: (value: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      message: 'Неверный логин. Пример user@example.com',
    },
    {
      validate: (value: string) => /^[a-zA-Z0-9._%+-]+$/.test(value.split('@')[0]),
      message: 'Неверный логин. Пример user@example.com',
    },
    {
      validate: (value: string) => /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.split('@')[1]),
      message: 'Неверный логин. Пример user@example.com',
    }
  ],
  first_name: [
    {
      validate: (value: string) => /^[А-ЯЁA-Z][а-яёa-zА-ЯЁA-Z-]+$/.test(value),
      message: 'Имя должно начинаться с заглавной буквы и содержать только буквы.',
    },
    {
      validate: (value: string) => value.length >= 2,
      message: 'Имя должно содержать минимум 2 символа.',
    }
  ],
  second_name: [
    {
      validate: (value: string) => value.length >= 2,
      message: 'Фамилия должна содержать минимум 2 символа.',
    },
    {
      validate: (value: string) => /^[А-ЯЁA-Z][а-яёa-zА-ЯЁA-Z-]+$/.test(value),
      message: 'Фамилия должна начинаться с заглавной буквы и содержать только буквы.',
    }  
  ],
  login: [
      {
        validate: (value: string) => value.length >= 3 && value.length <= 20,
        message: 'Логин должен быть длиной от 3 до 20 символов.',
      },
      {
        validate: (value: string) => !/\s/.test(value),
        message: 'Логин не должен содержать пробелов.',
      },
      {
        validate: (value: string) => /^[a-zA-Z0-9_-]+$/.test(value),
        message: 'Логин может содержать только латиницу, цифры, дефис и подчёркивание.',
      },
      {
        validate: (value: string) => /[a-zA-Z]/.test(value),
        message: 'Логин должен содержать хотя бы одну букву.',
      },
  ],
  password: [
    {
      validate: (value: string) => value.length >= 8 && value.length <= 40,
      message: 'Пароль должен быть длиной от 8 до 40 символов.',
    },
    {
      validate: (value: string) => /[A-Z]/.test(value),
      message: 'Пароль должен содержать хотя бы одну заглавную букву.',
    },
    {
      validate: (value: string) => /\d/.test(value),
      message: 'Пароль должен содержать хотя бы одну цифру.',
    }
  ],
  oldPassword: [
    {
      validate: (value: string) => value.length >= 8 && value.length <= 40,
      message: 'Пароль должен быть длиной от 8 до 40 символов.',
    },
    {
      validate: (value: string) => /[A-Z]/.test(value),
      message: 'Пароль должен содержать хотя бы одну заглавную букву.',
    },
    {
      validate: (value: string) => /\d/.test(value),
      message: 'Пароль должен содержать хотя бы одну цифру.',
    }
  ],
  newPassword: [
    {
      validate: (value: string) => value.length >= 8 && value.length <= 40,
      message: 'Пароль должен быть длиной от 8 до 40 символов.',
    },
    {
      validate: (value: string) => /[A-Z]/.test(value),
      message: 'Пароль должен содержать хотя бы одну заглавную букву.',
    },
    {
      validate: (value: string) => /\d/.test(value),
      message: 'Пароль должен содержать хотя бы одну цифру.',
    }
  ],
  phone: [
    {
      validate: (value: string) => /^[+]?[\d]{10,15}$/.test(value),
      message: 'Телефон должен состоять из 10–15 цифр',
    },
    {
      validate: (value: string) => value.length >= 10 && value.length <= 15,
      message: 'Номер телефона должен быть длиной от 10 до 15 символов.',
    }
  ],
  message: [
    {
      validate: (value: string) => value.trim().length > 0,
      message: 'Сообщение не должно быть пустым.',
    }
  ],
};
  


export default  validationRules;
