import Block from "../../framework/Block";

export default class Button extends Block {
  constructor(props: ButtonSettings) {
    super({
      ...props,
      attr: {
        'class': 'btn'
      },
    })
  }

  public render(): string {
    return  `<button type="submit">{{title}}</button>`
  }
}
