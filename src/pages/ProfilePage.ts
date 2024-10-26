import Block from '../framework/Block';
import ProfileInfo from '../layouts/ProfileInfo/ProfileInfo';
import MessageBox from '../layouts/MessageBox/MessageBox';


export default class ProfilePage extends Block {
  constructor() {
    super({
      MessageBox: new MessageBox({}),
      ProfileInfo: new ProfileInfo({}),
    });
  }
  

  public render(): string {
    return `
    <div class="main-page">
      <div class="left"> 
        {{{ProfileInfo}}}  
      </div>
      <div class="right">
        {{{MessageBox}}}
      </div>
    </div>
    `;
  }
}
