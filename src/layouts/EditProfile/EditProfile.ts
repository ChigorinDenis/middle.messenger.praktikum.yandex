import Block from '../../framework/Block';
import ProfilePhotoRound from '../../components/ProfilePhotoRound/ProfilePhotoRound';
import Form from '../../layouts/Form/Form';
import IconButton from '../../components/IconButton/IconButton';
import getValidationFunc from '../../validation/validation';
import validationRules from '../../validation/validationRules';
import UserProfileController from '../../controllers/userProfileController';
import Router from '../../routing/Router';
import connect from '../../store/connect';


const router = new Router('#app');

const validate = getValidationFunc(validationRules);

const userProfileController = new UserProfileController();

function mapStateToProps(state: Indexed): Indexed {
  const user = (state as State).auth.user != null ? (state as State).auth.user : {};
  
  const inputGroupList: InputGroupSettings[] = [
    {
      title: 'Имя в сети',
      type: 'text',
      name: 'display_name',
      placeholder: 'Введите имя в сети',
      onBlur: () => {},
      onChange: () => {},
      value: user != null && user.display_name || '',
      error: null
    },
    {
      title: 'Почта',
      type: 'text',
      name: 'email',
      placeholder: 'Введите email',
      onBlur: () => {},
      onChange: () => {},
      value: user != null && user.email || '',
      error: null
    },
    {
      title: 'Логин',
      type: 'text',
      name: 'login',
      placeholder: 'Введите логин',
      onBlur: () => {},
      onChange: () => {},
      value: user != null && user.login || '',
      error: null
    },
    {
      title: 'Имя',
      type: 'text',
      name: 'first_name',
      placeholder: 'Введите имя',
      onBlur: () => {},
      onChange: () => {},
      value: user != null && user.first_name || '',
      error: null
    },
    {
      title: 'Фамилия',
      type: 'text',
      name: 'second_name',
      placeholder: 'Введите фамилию',
      onBlur: () => {},
      onChange: () => {},
      value: user != null && user.second_name || '',
      error: null
    },
    {
      title: 'Телефон',
      type: 'tel',
      name: 'phone',
      placeholder: 'Введите телефон',
      onBlur: () => {},
      onChange: () => {},
      value: user != null && user.phone || '',
      error: null
    },
  ];
  return { inputGroupList }
}
const connectedForm = connect(Form, mapStateToProps);

export default class EditPassword extends Block {
  constructor() {
    super({
      ProfilePhotoRound: new ProfilePhotoRound({}),
      Form: new connectedForm({
        inputGroupList: [],
        title: '',
        btnSubmitTitle: 'Сохранить',
        validate,
        bgdForm: 'edit-profile',
        btnStyle: 'btn-2',
        controller: userProfileController,
      }),
      IconBack: new IconButton({
        img_src: '/icons/arrow_back.svg',
        alt: 'back',
        onClick: () => {
          router.go('/settings')
        }
      }),
    });
   
  }

  public render(): string {  
    return `
      <div class="side-panel">
        <div class="side-panel-header">
          {{{IconBack}}}
        </div>  
        {{{ProfilePhotoRound}}}
        {{{Form}}}
      </div>
    `
  }
}

