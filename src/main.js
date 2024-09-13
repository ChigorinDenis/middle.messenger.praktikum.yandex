import './style.pcss'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import Handlebars from 'handlebars';
// import templateMain from './templateMain.hbs';
// import templateMessageList from './pages/templateMessageList.hbs';
// import templateSignupPage from './pages/templateSignupPage.hbs';
import templateChatList from './pages/templateChatList.hbs';
// import templateLoginPage from './pages/templateLoginPage.hbs';
import userInfoTemplate from './templateUserInfo.hbs'; // частичный шаблон

// Регистрация частичного шаблона
Handlebars.registerPartial('userInfo', userInfoTemplate);
// const user = { name: 'Djd', age: 35}
// const template = Handlebars.compile(templateMain);
const template = Handlebars.compile(templateChatList);

// document.querySelector('#app').innerHTML = template({ javascriptLogo, viteLogo,  user });
document.querySelector('#app').innerHTML = template();

