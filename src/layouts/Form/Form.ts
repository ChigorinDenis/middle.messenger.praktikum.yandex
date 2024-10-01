import Block from "../../framework/Block";
import InputGroup from '../../components/InputGroup/InputGroup';
import Button from '../../components/Button/Button';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

type FormSettings = {
  title: string,
  inputGroupList: InputGroupSettings[],
  validate: (name:string, value: string | number) => string | null;
}


export default class Form extends Block {
  
  constructor(props: FormSettings) {

    const onChange = (e: Event): void => {
      const target = e.target as HTMLInputElement;
      const { name, value } = target;
     
    }
    
    const onBlur = (e: Event): void => {
      const target = e.target as HTMLInputElement;
      const { name, value } = target;
      const index = props.inputGroupList.findIndex((prop) => prop.name === name);
      if (index != -1) {
        const error = props.validate(name, value);
        console.log('error',error);
        this.lists.inputGroupList[index].setProps({ error });
      }
      console.log('props-lists', props.inputGroupList)
        // this.setProps({...props, title: 'Аннигиляция'});
        // this.lists.inputGroupList[0].setProps({title: 'Кака', error: 'бяка'}) 
        // this.children['TempInput'].setProps({error: 'говняка'});
        // this.children['Button'].setProps({title: 'говняка'});
     
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
        title: 'Войти',
      }),
      ButtonLink: new ButtonLink({
        title: 'Нет аккаунта?',
      }),
    })
  }

  public render(): string {
    console.log('form', this);
    return `<div class="container-form">
              <form class="bgd-dark">
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
            </div>`;
  }
}
