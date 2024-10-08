import Block from '../framework/Block';
import SidePanel from '../layouts/SidePanel/SidePanel';
import MessageBox from '../layouts/MessageBox/MessageBox';



export default class PageChat extends Block {
  constructor() {
    super({
      SidePanel: new SidePanel(),
      MessageBox: new MessageBox(),
    });
  }
  

  public render(): string {
    return `
    <div class="main-page">
      <div class="left">
        {{{SidePanel}}}
      </div>
      <div class="right">
        {{{MessageBox}}}
      </div>
    </div>
    `;
  }
}
