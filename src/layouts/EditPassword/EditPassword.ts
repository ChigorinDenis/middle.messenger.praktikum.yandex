import Block from '../../framework/Block';
import ProfilePhotoRound from '../../components/ProfilePhotoRound/ProfilePhotoRound';
import Form from '../../layouts/Form/Form';
import getValidationFunc from '../../validation/validation';
import validationRules from '../../validation/validationRules';

const validate = getValidationFunc(validationRules);

const inputGroupList: InputGroupSettings[] = [

  {
    title: 'Старый пароль',
    type: 'password',
    name: 'oldPassword',
    placeholder: 'Введите пароль',
    onBlur: () => {},
    onChange: () => {},
    value: '',
    error: null
  },
  {
    title: 'Новый пароль',
    type: 'password',
    name: 'newPassword',
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

export default class EditPassword extends Block {
  constructor() {
    super({
      ProfilePhotoRound: new ProfilePhotoRound(),
      Form: new Form({
        title: '',
        btnSubmitTitle: 'Сохранить',
        inputGroupList,
        validate,
        bgdForm: 'bgd-light',
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