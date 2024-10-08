import Block from '../../framework/Block';
import ChatsList from '../../layouts/ChatsList/ChatsList';

export default class SidePanel extends Block {
  constructor() {
    super({
      ChatsList: new ChatsList()
    });
  }

  public render(): string {
    return `<div class="side-panel">
              <div class="side-panel-header">
                <div class="user">
                  <div class="chat-avatar">
                    <div class="chat-avatar-img"></div>
                  </div>
                  <div class="user-info">
                    <span class="user-title">Иван</span>
                    <span class="user-profile">Профиль</span>
                  </div>
                </div>
                <img src="/icons/settings.svg" alt="settings">
              </div>  
              <div class="side-panel-search">
                <input type="text" class="input-small bgd-dark">
              </div>
              {{{ChatsList}}}
            </div>`;
  }
}
