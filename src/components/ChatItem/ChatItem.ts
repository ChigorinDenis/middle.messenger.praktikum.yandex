import Block from "../../framework/Block";

export default class ChatItem extends Block {
  constructor(props: ChatItemSettings) {
    super({
      ...props,
    });
  }

  public render(): string {
    return `<div class="chat-item">
              <div class="chat-avatar">
                <div class="chat-avatar-img"></div>
              </div>
              <div class="chat-info">
                <div class="chat-header">
                  <div>
                    <span class="chat-name">{{name}}</span>
                    <div class="chat-last-message">{{lastMessage}}</div>
                  </div>
                  <span class="chat-time">{{lastMessageTime}}</span>
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
