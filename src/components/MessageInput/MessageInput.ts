import Block from "../../framework/Block";
import Input from "../Input/Input";
import validationRules from "../../validation/validationRules";
import getValidationFunc from "../../validation/validation";

const onEnter = (controller: MessageControllerInterface) => (e:KeyboardEvent):void => {
  const target = e.target as HTMLInputElement;
  if (e.key === 'Enter') {
    const { name, value } = target;
    const validate = getValidationFunc(validationRules);
    const error = validate(name, value);
    if (error) {
      alert(error);
    }
    controller.send(value);
    target.value = '';
  }
  }

export default class MessageInput extends Block {
  constructor(props:Indexed) {
    super({
      input: new Input({
        name: 'message',
        type:'text',
        placeholder:'Сообщение',
        inputClass: 'input-field bgd-light',
        onEnter: onEnter(props.controller as  MessageControllerInterface), 
      })
    });
  }

  public render(): string {
    return `<div class="message-input">
                {{{ input}}}
                <button class="btn-round"></button>
            </div>`;
  }
}
