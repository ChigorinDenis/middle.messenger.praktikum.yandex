import Block from "../../framework/Block";

export default class ButtonLink extends Block {
  constructor(props: ButtonSettings) {
    super({
      ...props,
      attr: {
        'class': 'btn-link'
      },
    })
  }

  public render(): string {
    return  `<span class="btn-link">{{title}}</span>`
  }
}
