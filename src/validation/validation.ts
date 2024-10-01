const getValidationFunc = (validationRules: ValidationRules) => (name: string, value: string): string | null => {
  if (name in validationRules) {
    const fieldRules = validationRules[name];
    console.log(fieldRules)
    const invalidedRule = fieldRules.find((rule) => (!rule.validate(value)));
    console.log('invalidedRule', invalidedRule);
    if (invalidedRule) {
      console.log('validate in if..')
      return invalidedRule.message;
    }
  }
  return null;
};

export default getValidationFunc;
