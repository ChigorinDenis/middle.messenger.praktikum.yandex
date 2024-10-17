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
  name: string,
  lastMessageTime: string
  lastMessage: string,
  newMessagesCount: number
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
  onSubmit(data: Indexed): void;
}

interface LoginFormModel {
  email: string;
  password: string;
}
