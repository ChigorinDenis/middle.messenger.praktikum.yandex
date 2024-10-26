import Block from '../../framework/Block';
import InputGroup from '../../components/InputGroup/InputGroup';
import Button from '../../components/Button/Button';
import store from '../../store/store';
import connect from '../../store/connect';

class ModalAdd extends Block {
  constructor(props: Modal) {
    super({
     ...props,
     Input: new InputGroup({
        title: '',
        type: 'text',
        value: '',
        error: null,
        placeholder: '',
        name: 'field',
        onBlur: (e:Event) => {
          const target = e.target as HTMLInputElement;
          const { value } = target;
          store.set('ui.modalActive.value', value)
          console.log(store.getState())
        }
     }),
     Button: new Button({
      title: props.btnName,
      onClick: () => {
        props.controller.onSubmit();
        store.set('ui.modalActive.name', null);
      }
     }),
    });
    this.setEvents();
  }

  private setEvents() {
    this.setProps({
      events: {
        click: this.handleClickOutside.bind(this),
      }
    });
  }

  handleClickOutside(e: MouseEvent): void {
    const modalContainer = this.getContent().querySelector('.modal-container');
    if (modalContainer && !modalContainer.contains(e.target as Node)) {
      store.set('ui.modalActive.name', null);
    }
  }

  public render(): string {
    const isActive = this.props.modalName === this.props.modalNameActive;
    const modalClass = isActive ? 'modal-area modal-open' : 'modal-area'
    return `<div class="${modalClass}">
              <div class="modal-container">
                  <h3>{{title}}</h1>
                  {{#unless inputHidden}}
                    {{{Input}}}
                  {{/unless}}
                  {{{Button}}}
              </div>
            </div>`;
  }
}

function mapModalToProps(state: State):Indexed {
  return {
    modalNameActive: state.ui.modalActive.name
  };
}
export default connect(ModalAdd, mapModalToProps)
