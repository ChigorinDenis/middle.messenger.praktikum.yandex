import Block from "../../framework/Block";
import Handlebars from "handlebars";
import templateInput from './templateInput.hbs';

type InputSettings = {
  type: string,
  name: string,
  value: string | number;
  onBlur?: (e:Event) => void;
}

export default class Input extends Block {
  constructor(props: InputSettings) {
    super({
      ...props,
      events: {
        blur: (e :Event) => props.onBlur && props.onBlur(e)
      }
    })
    this.props = props;
  }

  public render(): string {
    const inputEl = Handlebars.compile(templateInput)(this.props);
    return inputEl;
  }
}
