import ChatApi from '../api/chatApi';
import store from '../store/store';

const chatApi = new ChatApi();

class ModalCreateChatController implements FormController {
  public async createChat() {
    try {
      const value = store.getState('ui.modalActive.value');
      const chatResponse = await chatApi.createChat({ title: value });
      if (chatResponse.status != 200) {
        throw new Error('Chat not created')
      }
      const chatsResponse = await chatApi.request();
      store.set('chats', JSON.parse(chatsResponse.response))
    
    } catch (error) {
      console.log(error);
    }
  }

  public onSubmit() {
    this.createChat();
  }
} 

export default new ModalCreateChatController();
