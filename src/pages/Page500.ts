import Block from '../framework/Block';


export default class Page500 extends Block {
  constructor() {
    super({
    });
  }
  
  public render(): string {
    return `
      <div class="error-page">
          <h1>500</h1>
          <h2>Ошибка сервера</h2>
          <p>Уже работаем над исправлением ошибки</p>
          <a href="#!"class="error-page-link">Назад к Чатам</a>
      </div>
    `;
  }
}
