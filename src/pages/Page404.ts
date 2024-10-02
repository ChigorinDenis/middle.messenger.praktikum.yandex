import Block from '../framework/Block';


export default class Page404 extends Block {
  constructor() {
    super({
    });
  }
  
  public render(): string {
    return `
          <div class="error-page">
            <h1>404</h1>
            <h2>Не туда попали</h2>
            <a href="#!"class="error-page-link">Назад к Чатам</a>
          </div>
    `;
  }
}
