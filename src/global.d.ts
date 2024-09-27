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
}


interface FormField {
  value: string | number;     
  validationRules: ValidationRule[];  
  error: string | null;     
}

interface ValidationRule {
  validate: (value: string | number) => boolean;
  message: string;
}

interface FormState {
  [key: string]: FormField;
}
