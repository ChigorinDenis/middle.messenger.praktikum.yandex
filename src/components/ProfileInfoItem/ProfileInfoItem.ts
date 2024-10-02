import Block from "../../framework/Block";

export default class ProfileInfoItem extends Block {
  constructor(props: InputSettings) {
    super({
      ...props,
    });
  }

  public render(): string {
    return `<div class="profile-info-item">
              <img src="icons/Phone.svg" alt="phone">
              <div class="profile-info-data">
                <span class="profile-info-title">+7 (909) 967 30 30</span>
                <span class="profile-info-subtitle">телефон</span>
              </div>
            </div>`;
  }
}
