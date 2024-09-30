import Block from "../../framework/Block";

export default class ProfileInfo extends Block {
  constructor(props: InputSettings) {
    super({
      ...props,
    });
    this.props = props;
  }

  public render(): string {
    return `<div class="profile-info">
              {{{ProfileInfoItems}}}
              <div class="profile-btn btn-group-2">
                <button  class="btn-2">Изменить данные</button>
                <button  class="btn-link">Изменить пароль</button>
              </div>
            </div>`;
  }
}
