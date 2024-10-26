import Block from '../framework/Block';
import EditPassword from '../layouts/EditPassword/EditPassword';
import MessageBox from '../layouts/MessageBox/MessageBox';


export default class EditPasswordPage extends Block {
  constructor() {
    super({
      MessageBox: new MessageBox({}),
      EditPassword: new EditPassword(),
    });
  }
  

  public render(): string {
    return `
    <div class="main-page">
      <div class="left">
        {{{EditPassword}}}
      </div>
      <div class="right">
        {{{MessageBox}}}
      </div>
    </div>
    `;
  }
}
