import Block from "../../framework/Block";

export default class ProfilePhotoRound extends Block {
  constructor() {
    super({
    });
  }

  public render(): string {
    return `<div class="profile-photo-round">
              <img src="ava.png" alt="ava">
            </div>`;
  }
}
