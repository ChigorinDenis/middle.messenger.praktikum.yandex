import Block from "../../framework/Block";

export default class MessageBox extends Block {
  constructor(props: InputSettings) {
    super({
      ...props,
    });
    this.props = props;
  }

  public render(): string {
    return `<div class="message-box">
             {{{Messages}}}
           </div>`;
  }
}
