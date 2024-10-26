import Block from '../../framework/Block';
import ChatsList from '../../layouts/ChatsList/ChatsList';
// import connect from '../../store/connect';
import IconButton from '../../components/IconButton/IconButton';
import ChatsController from '../../controllers/chatsController';
import Button from '../../components/Button/Button';
import store from '../../store/store';
import Router from '../../routing/Router';
const router = new Router('#app');

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
        onClick: (e:Event) => {
          store.set('ui.modalActive.name', 'createChat');
        }
      }),
      IconSetting: new IconButton({
        img_src: '/icons/settings.svg',
        alt: 'settings',
        onClick: (e:Event) => {
          console.log('onclick icon')
          router.go('/settings')
        }
      })
    });
 
  }

  public render(): string {
    return `<div class="side-panel">
              <div class="side-panel-header">
                <div class="user">
                  <div class="chat-avatar">
                    <div class="chat-avatar-img"></div>
                  </div>
                  <div class="user-info">
                    <span class="user-title">Иван</span>
                    <span class="user-profile">Профиль</span>
                  </div>
                </div>
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


