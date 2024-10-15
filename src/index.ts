import './style.scss';
import App from './App';

import UserApi from './api/authApi';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.render();
});

// const userApi = new UserApi();

// userApi.getUser();
// console.log('');
