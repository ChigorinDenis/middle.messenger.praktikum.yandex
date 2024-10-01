import Block from "../../framework/Block";

export default class ProfilePhoto extends Block {
  constructor() {
    super();
  }

  public render(): string {
    return `<div class="profile-photo">
              <img src="ava.png" alt="ava">
              <span class="profile-name">Иван Иванов</span>
            </div>`;
  }
}
