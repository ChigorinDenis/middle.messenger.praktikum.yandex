import Block from '../../framework/Block';
import ChatItem from '../../components/ChatItem/ChatItem';
import data from '../../mockData/chatsData'

const ChatItemsList = data.map((props) => new ChatItem(props))

export default class ChatsList extends Block {
  constructor() {
    super({
      ChatItemsList
    });
    console.log(this);
  }

  public render(): string {
    return `<div class="chat-list bgd-light">
              {{{ChatItemsList}}}
            </div>`;
  }
}
