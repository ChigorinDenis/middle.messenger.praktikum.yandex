import Block from '../../framework/Block';
import ChatItem from '../../components/ChatItem/ChatItem';
import ChatsController from '../../controllers/chatsController';
import messagesController from '../../controllers/messagesController';
import connect from '../../store/connect';
import store from '../../store/store';

const chatsController = new ChatsController();

type ChatListSettings = {
  chats: ChatItemSettings[]
}
// interface BlockProps {
//   [key: string]: any;
// }

class ChatsList extends Block {
  constructor(props: ChatListSettings) {
    super({
      ChatItemsList: [],
      ...props,  
    });
    console.log(this)
  }

  public render(): string {
    return `<div class="chat-list bgd-light">
              <p>{{test}}</p>
              {{{ChatItemsList}}}
            </div>`;
  }
}

function mapUserToProps(state:Indexed) {
  return {
    chats: state.chats,
    test: state.test,
  };
}
const createItemCallback =  (prop:ChatItemSettings) => {
  return new ChatItem(
    {...prop, 
      onClick: () => {
        store.set('ui.currentChatId', prop.id);
        store.set('currentChat', { id: prop.id, title: prop.title });
        chatsController.getChatUsers(prop.id)
        messagesController.start();
        console.log('store', store.getState())
      }
    })
}
const listUpdateProps = {
  key:'ChatItemsList',
  createItemCallback,
}

function mapStateToListProps(state:Indexed):Indexed {
  return state.chats as Indexed;
}


export default connect(ChatsList, mapUserToProps, listUpdateProps, mapStateToListProps)
