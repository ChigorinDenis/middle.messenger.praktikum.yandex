import Block from "../../framework/Block";

export default class IconButton extends Block {
  constructor(props: IconButtonSettings) {
    super({
      ...props,
      events: {
        click: props.onClick      
      }
    })
    console.log(this)
  }

  public render(): string {
    return  `<img src="{{img_src}}" alt="{alt}">`
  }
}
///icons/settings.svg
