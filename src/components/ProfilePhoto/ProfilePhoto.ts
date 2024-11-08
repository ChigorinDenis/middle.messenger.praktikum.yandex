import Block from "../../framework/Block";

export default class ProfilePhoto extends Block {
  constructor(props:Indexed) {
    super({
      ...props,
    });
  }

  

  public render(): string {
    return `<div class="profile-photo">
              <img src="{{img_src}}">
              <span class="profile-name">{{display_name}}</span>
            </div>`;
  }
}
