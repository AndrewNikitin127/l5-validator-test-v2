import StringSchema from './StringSchema.js'

export default class Validator {
  string(){
    return new StringSchema();
  }
  number(){
    return new NumberSchema();
  }
  array(){
    return new ArraySchema();
  }
  object(){
    return new ObjectSchema();
  }
}
