import Block from "../../framework/Block";

export default class MessageInput extends Block {
  constructor() {
    super();
  }

  public render(): string {
    return `<div class="message-input">
                <input
                  type="text"
                  class="input-field bgd-light"
                  placeholder="Сообщение"
                />
                <button class="btn-round"></button>
            </div>`;
  }
}