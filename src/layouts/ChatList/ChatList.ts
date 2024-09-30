import Block from "../../framework/Block";

export default class ChatList extends Block {
  constructor(props: InputSettings) {
    super({
      ...props,
    });
    this.props = props;
  }

  public render(): string {
    return `<div class="chat-list bgd-light">
              {{{ChatListItems}}}
            </div>`;
  }
}
