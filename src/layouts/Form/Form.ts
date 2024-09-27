import Block from "../../framework/Block";
import Handlebars from "handlebars";
import InputGroup from '../../components/InputGroup/InputGroup';
import templateForm from './templateForm.hbs';
import  { uppercaseFirstLetter } from '../../utils/utils'


type FormSettings = {
  state: FormState,
  title: string,
  inputGroupSettings: InputGroupSettings[],
}


export default class Form extends Block {
  
  constructor(props: FormSettings) {
    const InputGroupList = props.inputGroupSettings.map(inputGroup =>(
      new InputGroup(inputGroup)
    ));
    const InputGroupChildren = props.inputGroupSettings.reduce((acc, setting) => {
      return {
        ...acc,
        [`${uppercaseFirstLetter(setting.name)}`]: new InputGroup(setting)
      }
    }, {});

    super({
      ...props,
      ...InputGroupChildren,
    })
  }

  public render(): string {
    // const inputGroupListHtml: InputGroup[] = [];

    // for (const inputGroup of this.lists.InputGroupList) {
    //   inputGroupListHtml.push(inputGroup.getContent().outerHTML)
    // }
    // return Handlebars.compile(templateForm)({
    //   ...this.props,
    //   InputGroupList: inputGroupListHtml,
    // });
    return `<div class="container-form">
              <form class="bgd-dark">
                <h1 class="form-title">{{title}}</h1>
                <div class="container-input-group">
                    {{{Email}}}
                    {{{First_name}}}
                    {{{Login}}}
                    {{{Password}}}
                  <div class="btn-group">
                    <button type="submit" class="btn">Войти</button>
                    <span class="btn-link">Нет аккаунта?</span>
                  </div>
                </div>
              </form>
            </div>`;
  }
}
