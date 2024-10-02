import Block from "../../framework/Block";
import Input from "../Input/Input";
import validationRules from "../../validation/validationRules";
import getValidationFunc from "../../validation/validation";

const onEnter = (e:KeyboardEvent):void => {
  const target = e.target as HTMLInputElement;
  if (e.key === 'Enter') {
    const { name, value } = target;
    const validate = getValidationFunc(validationRules);
    const error = validate(name, value);
    if (error) {
      alert(error);
    }
    target.value = '';
  }
  }

export default class MessageInput extends Block {
  constructor() {
    super({
      input: new Input({
        name: 'message',
        type:'text',
        placeholder:'Сообщение',
        inputClass: 'input-field bgd-light',
        onEnter, 
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
