import Block from '../../framework/Block';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';

export default class ProfileInfo extends Block {
  constructor() {
    super({
      ProfilePhoto: new ProfilePhoto(),
    });
   
  }

  public render(): string {
    return `
      <div class="side-panel">
        <div class="side-panel-header">
          <img src="/icons/arrow_back.svg" alt="back">
          <img src="/icons/Log out.svg" alt="log">
        </div>
        {{{ProfilePhoto }}}
        <div class="profile-info">
              <div class="profile-info-item">
                <img src="icons/Phone.svg" alt="phone">
                <div class="profile-info-data">
                  <span class="profile-info-title">+7 (909) 967 30 30</span>
                  <span class="profile-info-subtitle">телефон</span>
                </div>
              </div>
              <div class="profile-info-item">
                <img src="icons/Mail.svg" alt="mail">
                <div class="profile-info-data">
                  <span class="profile-info-title">pochta@mail.com</span>
                  <span class="profile-info-subtitle">почта</span>
                </div>
              </div>
              <div class="profile-info-item">
                <img src="icons/sign.svg" alt="login">
                <div class="profile-info-data">
                  <span class="profile-info-title">ivanivanov</span>
                  <span class="profile-info-subtitle">логин</span>
                </div>
              </div>
              <div class="profile-btn btn-group-2">
                <button  class="btn-2">Изменить данные</button>
                <button  class="btn-link">Изменить пароль</button>
              </div>
          </div>
        </div>`;
  }
}
