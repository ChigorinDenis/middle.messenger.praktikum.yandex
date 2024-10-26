import ChatApi from '../api/chatApi';
import store from '../store/store';

const chatApi = new ChatApi();

export default class ChatsController {

  public async getChats() {
    try {
      const chatResponse = await chatApi.request();
      if (chatResponse.status === 200){
        store.set('chats', JSON.parse(chatResponse.response)) 
      }
      
    } catch (error) {
      console.log(error);
    }
  }

} 
