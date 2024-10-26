interface ValidationRule {
  validate: (value: string) => boolean;
  message: string;
}

interface ValidationRules {
  [field: string]: ValidationRule[];
}

type InputSettings = {
  type: string,
  name: string,
  placeholder?: string,
  value?: string | number;
  onBlur?: (e:Event) => void;
  onChange?: (e:Event) => void;
  onEnter?: (e:Event) => void;
  inputClass?: string,
}

type InputGroupSettings = InputSettings & {
  title: string,
  error: string | null;
}
type ButtonSettings = {
  title: string,
  type?: string,
  btnStyle?: string,
  onClick?: (e:Event) => void;
}

interface FormField {
  value: string | number;     
  validationRules: ValidationRule[];  
  error: string | null;     
}


interface FormState {
  [key: string]: FormField;
}


type ChatItemSettings = {
  id: number,
  created_by: number,
  last_message: string | null,
  title: string,
  avatar: string | null,
  unreaded_count: number,
  currentChatId: null | number,
  onClick?: (e:Event) => void
}

type IconButtonSettings = {
  img_src: string,
  alt: string,
  onClick?: (e:Event) => void;
}
type MessageSettings = {
  type: string,
  text: string,
  time: string
}

type Indexed<T = unknown> = {
  [key in string]: T;
};

interface FormController {
  onSubmit(data?: Indexed): void;
}

interface LoginFormModel {
  email: string;
  password: string;
}

interface Modal {
  modalName: string,
  btnName: string,
  title: string,
  controller: FormController,
  inputHidden?: boolean
}

interface MessageControllerInterface {
  send: (message: string) => void
}

interface Message {
    chat_id: number,
    time: string,
    type: string,
    user_id: number,
    content: string,
    file?: Indexed,
    isSender?: boolean
}

type State = {
  auth: {
    user: Indexed | null
  },
  chats: Indexed[],
  messages: Indexed[],
  ui: {
    currentChatId: number | null,
    modalActive: {
      name: string,
      value: string
    }
  }
}
