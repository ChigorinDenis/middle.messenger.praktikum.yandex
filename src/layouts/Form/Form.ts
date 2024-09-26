import Block from "../../framework/Block";
import Handlebars from "handlebars";
import InputGroup from '../../components/InputGroup/InputGroup';
import templateForm from './templateForm.hbs';


type FormSettings = {
  title: string,
  inputGroupSettings: InputGroupSettings[],
}

export default class Form extends Block {
  
  constructor(props: FormSettings) {
    const InputGroupList = props.inputGroupSettings.map(inputGroup =>(
      new InputGroup(inputGroup)
    ));
    super({
      ...props,
      InputGroupList,
    })
    // this.props = props;
  }

  public render(): string {
    // console.log(this.lists);
    const inputGroupListHtml: InputGroup[] = [];

    for (const inputGroup of this.lists.InputGroupList) {
      inputGroupListHtml.push(inputGroup.getContent().outerHTML)
    }
    console.log(inputGroupListHtml);
    return Handlebars.compile(templateForm)({
      ...this.props,
      InputGroupList: inputGroupListHtml,
    });
  }
}
