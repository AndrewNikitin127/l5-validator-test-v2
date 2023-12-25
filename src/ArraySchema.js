export default class ArraySchema{
  validators = [(val) => Array.isArray(val)];

  constructor(newValidators){
    if(newValidators) this.validators = newValidators;
  }

  isValid(val){
    return this.validators.every(validator => validator(val));
  }
  maxDepth(maxDepth){
    const validator = (array) => {
      
      const getDepth = (arr, depth = 0) => {
        const arrays = arr.filter(e => Array.isArray(e));
        if (arrays.length === 0) return depth;

        const arraysDepth = arrays.map( e => getDepth(e, depth + 1))
        return Math.max(...arraysDepth);
      }
      return getDepth(array) <= maxDepth;
    }
    return new ArraySchema([...this.validators, validator])
  }
}