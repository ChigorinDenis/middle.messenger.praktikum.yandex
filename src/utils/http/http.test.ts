import HTTPTransport from './http';
import { expect, use } from 'chai';
import sinonChai from 'sinon-chai'
import {SinonStub, createSandbox} from 'sinon';


describe('HTTPTransport', () => {
  use(sinonChai)
  const sandbox = createSandbox();
  let http: HTTPTransport;
  let request: SinonStub<any>

  beforeEach(() => {
    http = new HTTPTransport();
    const fakeXhr = { readyState: 4, responseText: '{}', status: 200 } as XMLHttpRequest;
    request = sandbox.stub(http, 'request' as keyof typeof http).callsFake(() => Promise.resolve(fakeXhr))
  });

  afterEach(() => {
   sandbox.restore()
  });

  it('should execute GET request', async () => {
    http.get('');
    expect(request).calledWithMatch('', { method: 'GET' })
  });

  it('should execute POST request', async () => {
    http.post('', { data: { a: 1, b: 2}});
    expect(request).calledWithMatch('', { data: { a: 1, b: 2 }, method: 'POST' })
  });

  it('should execute PUT request', async () => {
    http.put('', { data: { a: 1}});
    expect(request).calledWithMatch('', { data: { a: 1}, method: 'PUT' })
  });

  it('should execute DELETE request', async () => {
    http.delete('', { data: { id: 1}});
    expect(request).calledWithMatch('', { data: { id: 1}, method: 'DELETE' })
  });

});
