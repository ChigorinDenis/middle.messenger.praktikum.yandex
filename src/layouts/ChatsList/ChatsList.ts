import Block from '../../framework/Block';
import ChatItem from '../../components/ChatItem/ChatItem';
import messagesController from '../../controllers/messagesController';
import connect from '../../store/connect';
import store from '../../store/store';


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
        messagesController.start();
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
