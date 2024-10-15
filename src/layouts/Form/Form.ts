import Block from "../../framework/Block";
import InputGroup from '../../components/InputGroup/InputGroup';
import Button from '../../components/Button/Button';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import connect from '../../store/connect'
import store from '../../store/store';

type FormSettings = {
  title: string,
  btnSubmitTitle?: string,
  btnLinkTitle?: string,
  inputGroupList: InputGroupSettings[],
  validate: (name:string, value: string | number) => string | null;
  bgdForm?: string,
  btnStyle?: string,
}

 class Form extends Block {
  
  constructor(props: FormSettings) {

    const onChange = (e: Event): void => {
      const target = e.target as HTMLInputElement;
      const { name, value } = target;
      store.set(name, value);
      console.log('state', store.getState());
    }
    
    const onBlur = (e: Event): void => {
      const target = e.target as HTMLInputElement;
      const { name, value } = target;
      const index = props.inputGroupList.findIndex((prop) => prop.name === name);
      if (index != -1) {
        const error = props.validate(name, value);
        this.lists.inputGroupList[index].setProps({ error });
      }
    }

    const onSubmit = (e:Event):void => {
      e.preventDefault();
      const form = this.getContent() as HTMLFormElement;
        const formData = new FormData(form);
    
        let isFormDataValid = true;
        props.inputGroupList.forEach(({ name }) => {
          const value = formData.get(name) as string || '';
          const index = props.inputGroupList.findIndex((prop) => prop.name === name);
          if (index != -1) {
            const error = props.validate(name, value);
            this.lists.inputGroupList[index].setProps({ error });
            if (error) {
              isFormDataValid = false;
            }
          }
        });
        if (!isFormDataValid) {
          console.log('Form  data is not valid')
          return;
        }
        console.log('formData', Object.fromEntries(formData));
      }


    const inputGroupList: Block[] = props.inputGroupList
      .map((prop) => ({
        ...prop,
        onBlur: onBlur,
        onChange: onChange,
      }))
      .map((prop) => (new InputGroup(prop)))
   
    super({
      ...props,
      inputGroupList,
      Button: new Button({
        title: props.btnSubmitTitle || '',
        onClick: onSubmit,
        btnStyle: props.btnStyle,
      }),
      ButtonLink: new ButtonLink({
        title: props.btnLinkTitle || '',
      }),
      attr: {
        'class': props.bgdForm,
      }
    })
  }

  public render(): string {
    return `
        <form>
          <h1 class="form-title">{{title}}</h1>
          <div class="container-input-group">
              {{{inputGroupList}}}
              {{{TempInput}}}
            <div class="btn-group">
              {{{Button}}}
              {{{ButtonLink}}}
            </div>
          </div>
        </form>
        </div>
    `;
  }
}

export default connect(Form, (state) => state)
