
const Path = require('path');

const libPath = Path.join(__dirname, 'lib');
const TransformationAction = require(Path.join(libPath, 'transformation.js'));
const GroupSequenceAction = require(Path.join(libPath, 'sequence.js'));
const GroupAction = require(Path.join(libPath, 'group.js'));
//const CacheAction = require(Path.join(libPath, 'cache.js'));


class Actions {

  static get Transformation() {
    return TransformationAction;
  }

  static get Group() {
    return GroupAction;
  }

  //static get Cache() {
  //  return CacheAction;
  //}

  static get Group() {
    return GroupAction;
  }

  static get GroupSequence() {
    return GroupSequenceAction;
  }

}


module.exports = Actions;
