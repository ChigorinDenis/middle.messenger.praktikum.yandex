import Block from '../../framework/Block';
import ProfilePhotoRound from '../../components/ProfilePhotoRound/ProfilePhotoRound';
import Form from '../../layouts/Form/Form';
import getValidationFunc from '../../validation/validation';
import validationRules from '../../validation/validationRules';

const validate = getValidationFunc(validationRules);

const inputGroupList: InputGroupSettings[] = [
  {
    title: 'Почта',
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
];

export default class EditPassword extends Block {
  constructor() {
    super({
      ProfilePhotoRound: new ProfilePhotoRound(),
      Form: new Form({
        title: '',
        btnSubmitTitle: 'Сохранить',
        inputGroupList,
        validate,
        bgdForm: 'edit-profile',
        btnStyle: 'btn-2',
      })
    });
   
  }

  public render(): string {  
    return `
      <div class="side-panel">
        <div class="side-panel-header">
          <img src="/icons/arrow_back.svg" alt="back">
        </div>  
        {{{ProfilePhotoRound}}}
        {{{Form}}}
      </div>
    `
  }
}