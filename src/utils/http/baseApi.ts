const baseURL = import.meta.env.VITE_API_URL;

export default class BaseAPI {

  protected apiURL: string;

  constructor(apiURL: string) {
    if (!apiURL) {
      throw new Error('Api URL is required');
    }
    this.apiURL = `${baseURL}${apiURL}`;
  }

  create() { throw new Error('Not implemented'); }

  request() { throw new Error('Not implemented'); }

  update() { throw new Error('Not implemented'); }

  delete() { throw new Error('Not implemented'); }
}
