const getValidationFunc = (validationRules: ValidationRules) => (name: string, value: string): string | null => {
  if (name in validationRules) {
    const fieldRules = validationRules[name];
    const invalidedRule = fieldRules.find((rule) => (!rule.validate(value)));
    if (invalidedRule) {
      return invalidedRule.message;
    }
  }
  return null;
};

export default getValidationFunc;
