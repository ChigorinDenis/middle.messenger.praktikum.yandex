import Block from "../../framework/Block";
import MessageBlock from '../../components/Message/Message';
import MessageInput from "../../components/MessageInput/MessageInput";
import Button from '../../components/Button/Button';
// import data from '../../mockData/messagesData';
import connect from '../../store/connect';
import store from '../../store/store';
import messagesController from "../../controllers/messagesController";
// import messages from "../../mockData/messagesData";

// const Messages =  data.map((props) => new Message(props))



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
      ...props,
    });
  
    console.log(this)
  }
  public render(): string {
    return `
            <section class="message-list bgd-dark">
              <header class="message-header">
                <div class="user">
                  <div class="chat-avatar">
                    <div class="chat-avatar-img"></div>
                  </div>
                  <div class="user-info">
                    <span class="user-title">Вадим</span>
                  </div>
                </div>
                <span class="close-chat">
                  {{{ButtonAdd}}}
                  {{{ButtonDelete}}}
                  <img src="/icons/points.svg" alt="points" />
                </span>
              </header>
            <div class="message-box">
                {{{Messages}}}
              </div>
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

const createItemCallback =  (prop:Message) => {
  return new MessageBlock(prop)
}
const listUpdateProps = {
  key:'Messages',
  createItemCallback,
}

function mapStateToListProps(state: State) {
  // const { currentChatId } = state.ui;
  // const { messages } = state;
  
  // if (currentChatId != null && messages[currentChatId]) {
  //   // Возвращаем сообщения для текущего чата, отфильтрованные по currentChatId
  //   return {
  //     messages: messages[currentChatId],
  //   };
  // }

  // Если текущий чат не найден или нет сообщений для него, возвращаем пустой массив
  return  state.messages;
}

export default connect(MessageBox, mapUserToProps, listUpdateProps, mapStateToListProps);
