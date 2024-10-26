import ChatApi from '../api/chatApi';
import UserApi from '../api/userApi';
import store from '../store/store';
import Router from '../routing/Router'

const router = new Router('#app');
const chatApi = new ChatApi();
const userApi = new UserApi();

interface User {
  id: number;
  [key: string]: unknown; // Остальные свойства объекта
}

const getUserId = (data: Indexed): number | null => {
  const user = data[0];
  if (typeof user === 'object' && user != null && 'id' in user) {
    return (user as User).id
  }
  return null;
}

class ModalAddUserToChatController implements FormController {
  public async addUser() {
    try {
      const value = store.getState('ui.modalActive.value');
      const userResponse = await userApi.searchUser({ login: value });

      if (userResponse.status != 200) {
        throw new Error('User not found')
      }
      const userId = getUserId(JSON.parse(userResponse.response))
      const chatId = store.getState('ui.currentChatId');
      const chatUpdate = await chatApi.addUser({users: [userId], chatId})
      if (chatUpdate.status === 200) {
        console.log('User added to chat')
      }
    } catch (error) {
      console.log(error);
    }
  }

  public onSubmit() {
    this.addUser();
  }
} 

export default new ModalAddUserToChatController();
