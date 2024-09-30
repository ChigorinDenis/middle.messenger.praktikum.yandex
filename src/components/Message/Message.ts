import Block from "../../framework/Block";

export default class Message extends Block {
  constructor(props: InputSettings) {
    super({
      ...props,
    });
    this.props = props;
  }

  public render(): string {
    return `<div class="message message-other">
              <p>
                {{text}}
              </p>
              <span class="message-time">11:22</span>
           </div>`;
  }
}
