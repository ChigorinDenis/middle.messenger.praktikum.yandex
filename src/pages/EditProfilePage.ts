import Block from '../framework/Block';
import EditProfile from '../layouts/EditProfile/EditProfile';
import MessageBox from '../layouts/MessageBox/MessageBox';



export default class EditProfilePage extends Block {
  constructor() {
    super({
      MessageBox: new MessageBox(),
      EditProfile: new EditProfile(),
    });
  
  }
  

  public render(): string {
    return `
    <div class="main-page">
      <div class="left">
        {{{EditProfile}}}
      </div>
      <div class="right">
        {{{MessageBox}}}
      </div>
    </div>
    `;
  }
}
