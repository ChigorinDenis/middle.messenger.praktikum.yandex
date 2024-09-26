import Block from "../../framework/Block";
import Handlebars from "handlebars";
import templateInputGroup from './templateInputGroup.hbs';
import Input from "../Input/Input";


// type InputGroupSettings = Input & {
//   title: string,
//   type: string,
//   name: string,
//   placeholder?: string,
//   value?: string | number;
//   onBlur?: (e:Event) => void;
//   onChange?: (e:Event) => void;
// }

export default class InputGroup extends Block {
  constructor(props: InputGroupSettings) {
    const InputChild = new Input({
      type: props.type,
      name: props.name,
      placeholder: props.placeholder,
      onBlur: props.onBlur
    });
    super({
      ...props,
      InputChild
    })
    // this.props = props;
  }

  public render(): string {
    return Handlebars.compile(templateInputGroup)({
      ...this.props,
      InputChild: this.children.InputChild.getContent().outerHTML,
    });
  }
}
