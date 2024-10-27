import Block from "../../framework/Block";
import Input from "../Input/Input";
import validationRules from "../../validation/validationRules";
import getValidationFunc from "../../validation/validation";
import Button from "../Button/Button";

const createOnEnterHandler = (
  controller: MessageControllerInterface,
  getMessage: () => string
) => (e: KeyboardEvent): void => {
  const target = e.target as HTMLInputElement;
  if (e.key === 'Enter') {
    const message = getMessage();
    const validate = getValidationFunc(validationRules);
    const error = validate('message', message);
    if (error) {
      alert(error);
    } else {
      controller.send(message);
      target.value = ''; // Очистка поля после отправки
    }
  }
};

export default class MessageInput extends Block {
  private controller: MessageControllerInterface;

  constructor(props: Indexed) {
    const controller = props.controller as MessageControllerInterface;

    // Определяем функцию для получения значения поля input
    const getMessage = () => {
      const inputElement = this.children.input.element as HTMLInputElement;
      return inputElement ? inputElement.value : '';
    };

    super({
      ...props,
      input: new Input({
        name: 'message',
        type: 'text',
        placeholder: 'Сообщение',
        inputClass: 'input-field bgd-light',
        onEnter: createOnEnterHandler(controller, getMessage),
      }),
      ButtonSend: new Button({
        title: '',
        btnStyle: 'btn-round',
        onClick: () => this.handleSendMessage(), // обработчик для кнопки
      }),
    });
    this.controller = controller;
  }

  // Метод для отправки сообщения через кнопку
  private handleSendMessage(): void {
    const inputElement = this.children.input.element as HTMLInputElement;
    const message = inputElement ? inputElement.value : '';

    const validate = getValidationFunc(validationRules);
    const error = validate('message', message);
    if (error) {
      alert(error);
    } else {
      this.controller.send(message);
      inputElement.value = ''; // Очистка поля после отправки
    }
  }

  public render(): string {
    return `<div class="message-input">
                {{{input}}}
                {{{ButtonSend}}}
            </div>`;
  }
}

