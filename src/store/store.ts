import EventBus from '../framework/EventBus';
import { set, get } from '../utils/utils';

export enum StoreEvents {
  Updated = 'updated',
}



const initState: State = {
  auth: {
    user: null
  },
  chats: [],
  messages: {},
  ui: {
    currentChatId: null,
    modalActive: {
      name: '',
      value: ''
    }
  }
}

class Store extends EventBus {
  
  protected state: State;

  constructor() {
    super();
    this.state = initState;
  }

  public getState(path: string = '') {
    return get(this.state, path);
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
      this.emit(StoreEvents.Updated);
  };
}

export default new Store(); 
