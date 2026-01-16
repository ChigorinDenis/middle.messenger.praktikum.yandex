import Block from "../../framework/Block";
import connect from "../../store/connect";

class ChatItem extends Block {
  constructor(props: ChatItemSettings) {
    const className = props.id === props.currentChatId ? 'chat-item chat-current' : 'chat-item';
    super({
      ...props,
      events: {
        click: (e :Event) => props.onClick && props.onClick(e)
      },
      attr: {
        'class':className
      }
    });
  }

  public render(): string {
    return `<div>
              <div class="chat-avatar">
                <div class="chat-avatar-img"></div>
              </div>
              <div class="chat-info">
                <div class="chat-header">
                  <div>
                    <span class="chat-name">{{title}}</span>
                    <div class="chat-last-message"></div>
                  </div>
                  <span class="chat-time">22:22</span>
                </div>
              </div>
              {{#if newMessagesCount}}
                <div class="chat-unread">
                  <span class="unread-count">{{newMessagesCount}}</span>
                </div>
              {{/if}}
            </div>`;
  }
}

function mapUserToProps(state: State):Indexed {
  return {
    currentChatId: state.ui.currentChatId
  };
}

export default connect(ChatItem, mapUserToProps)
