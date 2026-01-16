import { assert, expect, use } from 'chai';
import sinonChai from 'sinon-chai';
import  Block  from './Block';
import { stub, spy, SinonSpy } from 'sinon';

class BlockStub extends Block {
  constructor(props: {[x: string]: unknown }) {
    super({ ...props });
  }
  render() {
    return '<div>Test</div>';
  }
}

describe('Block', () => {
  let block: Block;
  let renderStub: SinonSpy;
  use(sinonChai)

  beforeEach(() => {
    block = new BlockStub({ prop1: 'initialValue' });
    renderStub = spy(BlockStub.prototype, 'render');
  });

  afterEach(() => {
    renderStub.restore();
  });

 
  it('should return outerHTML', () => {
    assert.equal(block.element!.outerHTML, '<div>Test</div>');
  });

  it('should update props on Block', () => {
    block.setProps({ prop1: 'updatedValue' });
    assert.deepEqual(block.getProps(), {
      prop1: 'updatedValue'
    });
  });

  it('should call event on the Block', () => {
    const testHandleEvent = stub();
    const testEvent = new MouseEvent('click');
    block.setProps({
      events: {
        click: testHandleEvent,
      },
    });
    block.element?.dispatchEvent(testEvent);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(testHandleEvent.calledOnce).to.be.true;
  });

  it('should set attributes on the Block element', () => {
    block.setProps({attr: {'class': 'propClass1', id: 'prop_id1'}});
    assert.equal(block.element?.getAttribute('class'), 'propClass1');
    assert.equal(block.element?.getAttribute('id'), 'prop_id1');
  });

  it('should trigger re-render when a proxy-tracked property is modified', () => {
    const initialProps = { prop1: 'initial' };
    block = new BlockStub(initialProps);

    block.setProps({ prop1: 'changed' });
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(renderStub.calledTwice).to.be.true; 
  });

  it('should call render on initialization', () => {
    const initialProps = { prop1: 'initial' };
    block = new BlockStub(initialProps);
     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(renderStub.calledOnce).to.be.true; 
  });
});


