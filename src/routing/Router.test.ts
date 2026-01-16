/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect } from 'chai';
import { stub } from 'sinon';
import Router from '../routing/Router';
import Block  from '../framework/Block';

class Test extends Block {
  protected render() {
    return '<div>Test</div>';
  }
}

describe('Router', () => {

  const pushStateStub = stub(window.history, 'pushState');
  const historyBackStub = stub(history, 'back');
  const historyForwardStub = stub(history, 'forward');
  const router = new Router('#app')

  before(() => {
    router
    .use('/', Test)
    .use('/test1', Test)
    .use('/test2', Test)
    .start();
  });

  after(() => {
    pushStateStub.restore();
  });

  it('should Router be Singleton', () => {
    const router1 = new Router('#app');
    const router2 = new Router('#app');
    expect(router1).to.deep.equal(router2);
  });

  it('should number of go equal history length', () => {
    router.go('/test1');
    router.go('/test2');
    expect(pushStateStub.callCount).to.equal(2);
  });

  it('should go forward on history', () => {
    router.forward();
    expect(historyForwardStub.calledOnce).to.be.true;
  });
  
  it('should go back on history', () => {
    router.back();
    expect(historyBackStub.calledOnce).to.be.true;
  });

  
});
