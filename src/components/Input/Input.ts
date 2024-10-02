import Block from "../../framework/Block";

export default class Input extends Block {
  constructor(props: InputSettings) {
    super({
      ...props,
      attr: {
        'class': props.inputClass || 'input-small bgd-light',
        placeholder: props.placeholder
      },
      events: {
        blur: (e :Event) => props.onBlur && props.onBlur(e),
        change: (e :Event) => props.onChange && props.onChange(e),
        keyup: (e :Event) => props.onEnter && props.onEnter(e)
      }
    })
  }

  public render(): string {
    return `
          <input
            type={{type}}
            name={{name}}
            {{#if value}}
            value={{value}}
            {{/if}}
          />
    `;
  }
}
