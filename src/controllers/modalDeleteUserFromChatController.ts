import ChatApi from '../api/chatApi';
import store from '../store/store';

const chatApi = new ChatApi();

class ModalDeleteUserFromChatController implements FormController {
  public async deleteUser() {
    try {
      const userId = store.getState('ui.modalActive.value');
      const chatId = store.getState('ui.currentChatId');
      const deleteUserResponse = await chatApi.deleteUser({ users: [userId], chatId });
      if (deleteUserResponse.status!= 200) {
        throw new Error('Error delete user');
      }
      const chatUsers = store.getState('chatUsers') as Indexed[];
      const filteredChatUsers = chatUsers.filter((user) => user.id != userId)
      store.set('chatUsers', filteredChatUsers)
    } catch (error) {
      console.log(error);
    }
  }

  public onSubmit() {
    this.deleteUser();
  }
} 

export default new ModalDeleteUserFromChatController();
