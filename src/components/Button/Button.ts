import Block from "../../framework/Block";

export default class Button extends Block {
  constructor(props: ButtonSettings) {
    super({
      ...props,
      attr: {
        'class': props.btnStyle || 'btn'
      },
      events: {
        click: props.onClick
      }
    })
  }

  public render(): string {
    return  `<button type="submit">{{title}}</button>`
  }
}
