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
}

type InputGroupSettings = InputSettings & {
  title: string,
  error: string | null;
}
type ButtonSettings = {
  title: string,
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