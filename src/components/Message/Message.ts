import Block from "../../framework/Block";

export default class MessageBlock extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
    });
  }

  public render(): string {
    const messageClass = this.props.isSender ? 'message-user' : 'message-other';
    return `<div class="message ${messageClass}">
              <p>
                {{content}}
              </p>
              <span class="message-time">{{time}}</span>
           </div>`;
  }
}
