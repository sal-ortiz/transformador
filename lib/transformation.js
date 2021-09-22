
const Path = require('path');

const ActionBase = require(Path.join(__dirname, 'base.js'));


const MODIFIER_SEPERATOR_REGEX = /^(\b|\+|\-|\=|\/|\*)(.+)$/

class TransformationAction extends ActionBase {

  process(target) {
    let key = this.key;
    let action = this.action;

    if (action && action.constructor == String) {
      // process a string prior to assigning it.

      // seperate a modifier and a value.
      let seperator = MODIFIER_SEPERATOR_REGEX;
      let baseVal = this.constructor.traverse(target, key);
      let components = action.match(seperator);

      let modifier = components[1];
      let value = components[2];

      // our value's type is based on our target value's type.
      if (baseVal || baseVal == 0) {
        value = new baseVal.constructor(value);
      } else {
        value = new value.constructor(value);
      }

      action = this.constructor.applyModifier(baseVal, modifier, value);
    }

    return this.constructor.traverse(target, key, action);
  }

  static applyModifier(baseVal, modifier, varVal) {
    let adjustedVal = baseVal;

    switch(modifier) {
      case '':  // no modifier defaults to assignment
      case '=':
        adjustedVal = varVal;
        break;

      case '+':
        adjustedVal += varVal;
        break;

      case '-':
        adjustedVal -= varVal;
        break;

      case '*':
        adjustedVal *= varVal;
        break;

      case '/':
        adjustedVal /= varVal;
        break;

    }

    return adjustedVal;

  }

}


module.exports = TransformationAction;
