import Block from '../../framework/Block';
import Button from '../../components/Button/Button';
import IconButton from '../../components/IconButton/IconButton';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import connect from '../../store/connect'
import store from '../../store/store';
import Router from '../../routing/Router';


const router = new Router('#app');
const baseURL = import.meta.env.VITE_API_URL;
const joinImagePath = (img:any) => ([baseURL, 'resources', img].join('/'));

class ProfileInfo extends Block {
  constructor(props:Indexed) {
    super({
      ProfilePhoto: new ProfilePhoto({
        display_name: props.display_name,
        img_src: joinImagePath(props.avatar)
      }),
      ButtonChangeData: new Button({
        title: 'Изменить данные',
        btnStyle:'btn-2',
        onClick: (e:Event) => {router.go('/edit-profile')}
      }),
      ButtonChangePassword: new Button({
        title: 'Изменить пароль',
        btnStyle:'btn-link',
        onClick: (e:Event) => {router.go('/edit-password')}
      }),
      IconBack: new IconButton({
        img_src: '/icons/arrow_back.svg',
        alt: 'back',
        onClick: (e:Event) => {
          router.go('/')
        }
      }),
      IconLogout: new IconButton({
        img_src: '/icons/Log out.svg',
        alt: '',
      }),
      ...props,
    });
  }

  public render(): string {
    return `
      <div class="side-panel">
        <div class="side-panel-header">
          {{{IconBack}}}
          {{{IconLogout}}}
        </div>
        {{{ProfilePhoto }}}
        <div class="profile-info">
              <div class="profile-info-item">
                <img src="icons/Phone.svg" alt="phone">
                <div class="profile-info-data">
                  <span class="profile-info-title">{{phone}}</span>
                  <span class="profile-info-subtitle">телефон</span>
                </div>
              </div>
              <div class="profile-info-item">
                <img src="icons/Mail.svg" alt="mail">
                <div class="profile-info-data">
                  <span class="profile-info-title">{{email}}</span>
                  <span class="profile-info-subtitle">почта</span>
                </div>
              </div>
              <div class="profile-info-item">
                <img src="icons/sign.svg" alt="login">
                <div class="profile-info-data">
                  <span class="profile-info-title">{{login}}</span>
                  <span class="profile-info-subtitle">логин</span>
                </div>
              </div>
              <div class="profile-btn btn-group-2">
                {{{ButtonChangeData}}}
                {{{ButtonChangePassword}}}
              </div>
          </div>
        </div>`;
  }
}
function mapUserToProps(state:State) {
  return {
    ...state.auth.user
  };
}
export default connect(ProfileInfo, mapUserToProps)
