import Block from '../framework/Block';
import SidePanel from '../layouts/SidePanel/SidePanel';
import MessageBox from '../layouts/MessageBox/MessageBox';
import ModalAdd from '../layouts/Modal/Modal';
import modalAddUserToChat from '../controllers/modalAddUserToChat';
import modalCreateChatController from '../controllers/modalCreateChatController';
import modalDeleteChatController from '../controllers/modalDeleteChatController';
import modalDeleteUserFromChatController from '../controllers/modalDeleteUserFromChatController';
// import socket from '../controllers/messagesController'


export default class PageChat extends Block {
  constructor() {
    // socket.start();
    super({
      SidePanel: new SidePanel(),
      MessageBox: new MessageBox({}),
      ModalAddUser: new ModalAdd({
        title: 'Добавить участника',
        btnName: 'Добавить',
        modalName: 'addUserToChat',
        controller: modalAddUserToChat
      }),
      ModalDeleteChat: new ModalAdd({
        title: 'Удалить чат',
        btnName: 'Удалить',
        modalName: 'deleteChat',
        controller: modalDeleteChatController,
        inputHidden: true,
      }),
      ModalDeleteUserFromChat: new ModalAdd({
        title: 'Удалить пользователя?',
        btnName: 'Удалить',
        modalName: 'deleteUserFromChat',
        controller: modalDeleteUserFromChatController,
        inputHidden: true,
      }),
      ModalCreateChat: new ModalAdd({
        title: 'Создать чат',
        btnName: 'Создать',
        modalName: 'createChat',
        controller: modalCreateChatController
      })
    });
  }
  

  public render(): string {
    return `
    <div class="main-page">
      <div class="left">
        {{{SidePanel}}}
      </div>
      <div class="right">
        {{{MessageBox}}}
      </div>
      {{{ModalAddUser}}}
      {{{ModalDeleteChat}}}
      {{{ModalCreateChat}}}
      {{{ModalDeleteUserFromChat}}}
    </div>
    `;
  }
}



