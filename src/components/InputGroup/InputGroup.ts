import Block from "../../framework/Block";
import Handlebars from "handlebars";
import templateInputGroup from './templateInputGroup.hbs';
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
    // return Handlebars.compile(templateInputGroup)({
    //   ...this.props,
    //   InputChild: this.children.InputChild,
    // });

    // console.log('content rendered', this.children.InputChild.getContent(), this.children.InputChild.getContent().outerHTML,)
    return `<div class="input-group">
      <label for={{name}}>{{title}}</label>
      {{{InputChild}}}
    </div>`
  }
}
