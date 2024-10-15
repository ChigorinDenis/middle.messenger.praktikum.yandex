import EventBus from '../framework/EventBus';
import { set } from '../utils/utils';

export enum StoreEvents {
  Updated = 'updated',
}


class Store extends EventBus {
  
  protected state: Record<string, unknown>;

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
      this.emit(StoreEvents.Updated);
  };
}

export default new Store(); 
