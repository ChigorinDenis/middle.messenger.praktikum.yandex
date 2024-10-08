import Block from "../../framework/Block";
import Input from "../Input/Input";


export default class InputGroup extends Block {
  constructor(props: InputGroupSettings) {
    const InputChild = new Input({
      type: props.type,
      name: props.name,
      placeholder: props.placeholder,
      value: props.value,
      onBlur: props.onBlur,
      onChange: props.onChange
    });
    super({
      ...props,
      InputChild
    })
  }

  public render(): string {
    return `<div class="input-group">
              <label for={{name}}>{{title}}</label>
              {{{InputChild}}}
              {{#if error}}
                <span class="input-group-error">{{error}}</span>
              {{/if}}  
            </div>`
  }
}
