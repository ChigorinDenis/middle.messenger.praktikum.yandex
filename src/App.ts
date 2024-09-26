import Input from "./components/Input/Input";
import InputGroup from "./components/InputGroup/InputGroup";
import Form from "./layouts/Form/Form";

const inputGroupSettings: InputGroupSettings[] = [
  {
    title: 'Hello1',
    type: 'text',
    name: 'somename1',
    placeholder: 'text',
    onBlur: (e) => { console.log('onBlur is worked 1111')}
  },
  {
    title: 'Hello2',
    type: 'text',
    name: 'somename2',
    placeholder: 'text',
    onBlur: (e) => { console.log('onBlur is worked 222')}
  }
]

export default class App {

  private appElement: HTMLElement | null;

  constructor() {
    this.appElement = document.getElementById('app');
  }

  render(): string {
    const form = new Form({
      title: 'Вход',
      inputGroupSettings,
    });
    this.appElement.replaceWith(form.getContent());
    return '';
  }
}
