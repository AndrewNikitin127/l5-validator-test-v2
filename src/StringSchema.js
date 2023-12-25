export default class StringSchema {
  validators = [(val) => typeof val === 'string'];

  constructor(newValidators){
    if(newValidators) this.validators = newValidators;
  }

  isValid(val){
    return this.validators.every(validator => validator(val));
  }
  startsFromUpperCase(){
    const validator = (string) => {
      const firstChar = string.charAt(0);
      if (firstChar.match(/[a-zА-я]/i) === null) return false;
      return firstChar === firstChar.toUpperCase();
    }
    return new StringSchema([...this.validators, validator]);
  }
  length(length){
    const validator = (string) => string.length === length;
    return new StringSchema([...this.validators, validator]);
  }
  hasExclamation(){
    const validator = (string) => string.includes('!');
    return new StringSchema([...this.validators, validator]);
  }
}