
const Path = require('path');

const ActionsBase = require(Path.join(__dirname, 'base.js'));
const ActionsGroup = require(Path.join(__dirname, 'group.js'));


class ActionsSequence extends ActionsBase {

  constructor(sequence) {
    super(undefined, sequence);
  }

  process(target) {
    let frame = this.action.shift();
    let action = new ActionsGroup(frame);

    action.process(target);
  }

}


module.exports = ActionsSequence;
