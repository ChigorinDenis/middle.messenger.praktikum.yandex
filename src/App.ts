import Input from "./components/Input/Input";

export default class App {

  private appElement: HTMLElement | null;

  constructor() {
    this.appElement = document.getElementById('app');
  }

  render(): string {
    const input = new Input({
      type: 'text',
      name: 'somename',
      value: 'text',
      onBlur: (e) => { console.log('onBlur is worked')}
    });
    this.appElement.replaceWith(input.getContent());
    return '';
  }
}
