import './style.scss';
import App from './App';

import UserApi from './api/userApi';

// document.addEventListener('DOMContentLoaded', () => {
//   const app = new App();
//   app.render();
// });

const userApi = new UserApi();

userApi.getUser();
console.log('');
