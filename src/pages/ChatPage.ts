import Block from '../framework/Block';
import SidePanel from '../layouts/SidePanel/SidePanel';
import ProfileInfo from '../layouts/ProfileInfo/ProfileInfo';
import EditPassword from '../layouts/EditPassword/EditPassword';
import EditProfile from '../layouts/EditProfile/EditProfile';
import MessageBox from '../layouts/MessageBox/MessageBox';

export default class PageChat extends Block {
  constructor() {
    super({
      SidePanel: new SidePanel(),
      MessageBox: new MessageBox(),
      EditPassword: new EditPassword(),
      EditProfile: new EditProfile(),
      ProfileInfo: new ProfileInfo()
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