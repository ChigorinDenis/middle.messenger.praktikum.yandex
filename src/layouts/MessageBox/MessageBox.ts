import Block from "../../framework/Block";
import MessageBlock from '../../components/Message/Message';
import MessageInput from "../../components/MessageInput/MessageInput";
import Button from '../../components/Button/Button';
import UsersDropdown from "../../components/UsersDropdown/UsersDropdown";
// import data from '../../mockData/messagesData';
import User from "../../components/User/User";
import connect from '../../store/connect';
import store from '../../store/store';
import messagesController from "../../controllers/messagesController";
// import messages from "../../mockData/messagesData";

// const Messages =  data.map((props) => new Message(props))

const mapStateToProps = (state:State) => {
  const currentChat = state.currentChat;
    return {
      name: currentChat.title,
      currentChatId: state.ui.currentChatId
    }
  
}

const ChatProfile = connect(User, mapStateToProps);

class MessageBox extends Block {
  constructor(props: Indexed) {
    super({
      Messages: [],
      MessageInput: new MessageInput({
        controller: messagesController
      }),
      ButtonAdd: new Button({
        title: 'Добавить участника',
        btnStyle:'btn-2-small',
        onClick: () => {
          store.set('ui.modalActive.name', 'addUserToChat');
        }
      }),
      ButtonDelete: new Button({
        title: 'Удалить чат',
        btnStyle:'btn-2-small',
        onClick: () => {
          store.set('ui.modalActive.name', 'deleteChat');
        }
      }),
      ChatProfile: new ChatProfile({
        isProfile: false,
      }),
      UsersDropdown: new UsersDropdown({}),
      ...props,
    });
  
  }
  public render(): string {
    return `
            <section class="message-list bgd-dark">
              {{#if currentChatId}}
                <header class="message-header">
                  {{{ChatProfile}}}
                  {{{UsersDropdown}}}
                  <span class="close-chat">
                    {{{ButtonAdd}}}
                    {{{ButtonDelete}}}
                    <img src="/icons/points.svg" alt="points" />
                  </span>
                </header>
                <div class="message-box">
                  {{{Messages}}}
                </div>
              {{else}}
                <div class="chat-noselected">Выберите чат или добавьте новый</div>
              {{/if}}
              {{{MessageInput}}}
              </section>
           `;
  }
}

function mapUserToProps(state: State):Indexed {
  return {
    currentChatId: state.ui.currentChatId,
    messages: state.messages
  };
}

const createItemCallback =  (prop:Indexed) => {
  return new MessageBlock(prop)
}
const listUpdateProps = {
  key:'Messages',
  createItemCallback,
}

function mapStateToListProps(state: Indexed):Indexed {
  return  state.messages as Indexed;
}

export default connect(MessageBox, mapUserToProps, listUpdateProps, mapStateToListProps);
