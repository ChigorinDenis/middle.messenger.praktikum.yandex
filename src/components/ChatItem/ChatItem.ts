import Block from "../../framework/Block";

export default class ChatItem extends Block {
  constructor(props: InputSettings) {
    super({
      ...props,
    });
    this.props = props;
  }

  public render(): string {
    return `<div class="chat-item">
              <div class="chat-avatar">
                <div class="chat-avatar-img"></div>
              </div>
              <div class="chat-info">
                <div class="chat-header">
                  <div>
                    <span class="chat-name">Иван Иванов</span>
                    <div class="chat-last-message">Привет! Как дела?</div>
                  </div>
                  <span class="chat-time">11:45</span>
                </div>
              </div>
              <div class="chat-unread">
                <span class="unread-count">2</span>
              </div>
            </div>`;
  }
}
