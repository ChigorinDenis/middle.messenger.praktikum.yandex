import EventBus from '../framework/EventBus';
import { set, get } from '../utils/utils';

export enum StoreEvents {
  Updated = 'updated',
}


class Store extends EventBus {
  
  protected state: Record<string, unknown> = {};

  public getState(path: string = '') {
    return get(this.state, path);
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
      this.emit(StoreEvents.Updated);
  };
}

export default new Store(); 
