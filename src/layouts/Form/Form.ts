import Block from "../../framework/Block";
import InputGroup from '../../components/InputGroup/InputGroup';
import Button from '../../components/Button/Button';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import  { uppercaseFirstLetter } from '../../utils/utils'


type FormSettings = {
  state: FormState,
  title: string,
  inputGroupSettings: InputGroupSettings[],
  // InputGroupChildren: Block[]
}





export default class Form extends Block {
  
  constructor(props: FormSettings) {
    const onChange = (state:FormState) => (e: Event): void => {
      const target = e.target as HTMLInputElement;
      const { name, value } = target;
      if (name in state) {
        state[name].value = value;
      }
      console.log(state);
    }
    
    const onBlur = (state:FormState) => (e: Event): void => {
      const target = e.target as HTMLInputElement;
      const { name, value } = target;
      if (name in state) {
        const { validationRules } = state[name];
        const invalidedRule = validationRules.find((rule) => (!rule.validate(value)));
        if (invalidedRule) {
          state[name].error = invalidedRule.message;
          
        } else {
          state[name].error = null;
        }
        this.setProps({...props, title: 'Аннигиляция'});// this в этом месте указывает на Form
        this.children['Button'].setProps({title: 'Помогитеееее!!!'}); // здесь я просто экпериментирую, чтобы  явно вызвать  установку setProps на child
        /*
        1. Какое поведение хочу получить?
        Хотелось бы получить, чтобы во время события Blur  после того как произведется проверка на валидность 
        в InputGroup обновился пропс и туда попало значение error, для того чтобы подсветить что поле не валидно, и давлее  до Inputб например обновить класс отвечающий за красный цвет рамки
        2. Я пытаюсь сделать универсальную форму, чтобы количество полей задавалось извне, масcивом передаю InputGroupSettings(который явно попадает в lists), и только потом создаю сhildren, которые
        почему-то не получается динамически  вставлять в шаблон handlebars, пробовал сразу InputGoupList  сразу передавать в пропс, тогда получается динамически добавить в шаблон, но тогда я не могу
        передать this в onBlur(чтобы он указывал на Form),
        3. Все это стопорит меня и не дает делать другие экраны, потому что я споткнулся на простых вещах.
        */ 
      }
    }


    const InputGroupChildren = props.inputGroupSettings
      .map((prop) => ({
        ...prop,
        onBlur: onBlur(props.state),
        onChange: onChange(props.state),
      }))
      .reduce((acc, setting) => {
        return {
          ...acc,
          [`${setting.name}`]: new InputGroup(setting)
        }
      }, {});

    super({
      ...props,
      ...InputGroupChildren,
      Button: new Button({
        title: 'Войти',
      }),
      ButtonLink: new ButtonLink({
        title: 'Нет аккаунта?',
      }),
    })
  }

  public render(): string {
    console.log('render', this.children);
    return `<div class="container-form">
              <form class="bgd-dark">
                <h1 class="form-title">{{title}}</h1>
                <div class="container-input-group">
                    {{{email}}}
                  <div class="btn-group">
                    {{{Button}}}
                    {{{ButtonLink}}}
                  </div>
                </div>
              </form>
            </div>`;
  }
}
