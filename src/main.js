import './style.scss'
import Handlebars from 'handlebars';
// страницы
import templateSignupPage from './pages/templateSignupPage.hbs';
import templateLoginPage from './pages/templateLoginPage.hbs';
import templateChatPage from './pages/templateChatPage.hbs';
import Page404 from './pages/404Page.hbs';
import Page500 from './pages/500Page.hbs';

// Частичный шаблон
import templateLinks from './layouts/templateLinks.hbs';
import templateSidePanelChatList from './layouts/templateSidePanelChatList.hbs';
import templateSidePanelEditProfile from './layouts/templateSidePanelEditProfile.hbs';
import templateSidePanelEditPassword from './layouts/templateSidePanelEditPassword.hbs';
import templateSidePanelProfileInfo from './layouts/templateSidePanelProfileInfo.hbs';
import templateChatList from './layouts/templateChatList.hbs';
import templateMessageList from './layouts/templateMessageList.hbs';
import templateEditProfile from './layouts/templateEditProfile.hbs';
import templateEditPassword from './layouts/templateEditPassword.hbs';
import templateProfilePhoto from './components/templateProfilePhoto.hbs';
import templateProfileInfo from './layouts/templateProfileInfo.hbs';
import templateProfilePhotoRound from './components/templateProfilePhotoRound.hbs';

Handlebars.registerPartial('sidePanelChatList', templateSidePanelChatList);
Handlebars.registerPartial('sidePanelProfileInfo', templateSidePanelProfileInfo);
Handlebars.registerPartial('sidePanelEditProfile', templateSidePanelEditProfile);
Handlebars.registerPartial('sidePanelEditPassword', templateSidePanelEditPassword);
Handlebars.registerPartial('editProfile', templateEditProfile);
Handlebars.registerPartial('editPassword', templateEditPassword);
Handlebars.registerPartial('chatList', templateChatList);
Handlebars.registerPartial('messageList', templateMessageList);
Handlebars.registerPartial('profilePhoto', templateProfilePhoto);
Handlebars.registerPartial('profilePhotoRound', templateProfilePhotoRound);
Handlebars.registerPartial('profileInfo', templateProfileInfo);


const context = {
  main: true,
  profile:false,
  edit: false,
  password: false
}

const templates = {
  main: templateChatPage,
  login: templateLoginPage,
  signup: templateSignupPage,
  page500: Page500,
  page404: Page404,
  profile: '',
  edit: '',
  password: ''
}



const tempLink = Handlebars.compile(templateLinks);
const template = Handlebars.compile(templateChatPage);
template(context);
const app = document.querySelector('#app');
const links = document.querySelector('#temp');
app.innerHTML = template();
links.innerHTML = tempLink();


const container = document.querySelector('.nav-container');

container.addEventListener('click', (event) => {
  console.log('started');
  if (event.target.classList.contains('nav-links')) {
    event.preventDefault();
    const templateName = event.target.getAttribute('data-template');
    switchTemplate(templateName);
  }
});

function changeContext(template) {
  for (const key in context) {
    context[key] = false;
  }
  context[template] = true;
}

function switchTemplate(templateName) {
  if (templateName in context) {
    changeContext(templateName);
    const template = Handlebars.compile(templates.main); 
    document.querySelector('#app').innerHTML = template(context)
  } else {
    const template = Handlebars.compile(templates[templateName]);
    document.querySelector('#app').innerHTML = template(); 
  }
}
