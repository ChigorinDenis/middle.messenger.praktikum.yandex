import Block from "../../framework/Block";

export default class User extends Block {
  constructor(props:Indexed) {
    super({
      ...props,
    });
    console.log(this)
  }

  
  public render(): string {
    return `<div class="user">
              <div class="chat-avatar">
              {{#if avatar}}<img class="chat-avatar-img" src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}"/>
              {{else}}<div class="chat-avatar-img"></div>
              {{/if}}      
            </div>
            <div class="user-info">
              <span class="user-title">{{name}}</span>
              {{#if isProfile}}<span class="user-profile">Профиль</span>{{/if}}
            </div>
          </div>`;
  }
}






