import Block from "../../framework/Block";

export default class Message extends Block {
  constructor(props: MessageSettings) {
    super({
      ...props,
    });
  }

  public render(): string {
    const messageClass = this.props.type === 'sender' ? 'message-user' : 'message-other';
    return `<div class="message ${messageClass}">
              <p>
                {{text}}
              </p>
              <span class="message-time">11:22</span>
           </div>`;
  }
}
