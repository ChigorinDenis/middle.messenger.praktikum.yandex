import Block from '../../framework/Block';
import ChatsList from '../../layouts/ChatsList/ChatsList';
import User from '../../components/User/User';
import IconButton from '../../components/IconButton/IconButton';
import ChatsController from '../../controllers/chatsController';
import Button from '../../components/Button/Button';
import store from '../../store/store';
import Router from '../../routing/Router';
import connect from '../../store/connect';

const router = new Router('#app');
const mapStateToProps = (state:State) => {
  return {
    name: `${state.auth.user?.first_name} ${state.auth.user?.second_name}`,
    avatar: state.auth.user?.avatar
  }
}
const UserProfile = connect(User, mapStateToProps);

const chatsController = new ChatsController();

export default class SidePanel extends Block {
  constructor() {
    chatsController.getChats(); 
    super({
      ChatsList: new ChatsList({
      }),
      ButtonAdd: new Button({
        title: 'Создать чат',
        btnStyle: 'btn-2-small',
        onClick: () => {
          store.set('ui.modalActive.name', 'createChat');
        }
      }),
      IconSetting: new IconButton({
        img_src: '/icons/settings.svg',
        alt: 'settings',
        onClick: () => {
          router.go('/settings')
        }
      }),
      UserProfile: new UserProfile({
        isProfile: true
      })
    });
 
  }

  public render(): string {
    return `<div class="side-panel">
              <div class="side-panel-header">
                {{{UserProfile}}}
                {{{IconSetting}}}
              </div>
               
              <div class="side-panel-search">
                {{{ButtonAdd}}} 
                <input type="text" class="input-small bgd-dark">
              </div>
              {{{ChatsList}}}
            </div>`;
  }
}
