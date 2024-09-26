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
  type: string,
  name: string,
  placeholder?: string,
  value?: string | number;
  onBlur?: (e:Event) => void;
  onChange?: (e:Event) => void;
}