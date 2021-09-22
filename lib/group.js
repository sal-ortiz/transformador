
const Path = require('path');

const ActionsBase = require(Path.join(__dirname, 'base.js'));
const TransformationAction = require(Path.join(__dirname, 'transformation.js'));


class ActionsGroup extends ActionsBase {

  constructor(action) {
    super(undefined, action);
  }

  process(target) {

    for (let attrib in this.action) {
      let value = this.action[attrib];
      let action = new TransformationAction(attrib, value);

      action.process(target);
    }

  }

}


module.exports = ActionsGroup;
