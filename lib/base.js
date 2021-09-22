

class ActionBase {

  constructor(key, action) {
    this.key = key;
    this.action = action;
  }

  static traverse(store, key, val) {
    let seperator = /\.|#|\//; // catch #'s, /'s, or .'s.
    let keyPath = key.split(seperator);
    let node = store;

    for (let index = 0; index < (keyPath.length - 1); index++) {
      let nodeKey = keyPath[index];

      if (!node[nodeKey] && val) {
        // create a path only if we have a value to place.
        node[nodeKey] = {};
      }

      node = node[nodeKey];
    }

    let lastKey = keyPath.slice(-1)[0];
    if (arguments.length < 3) {
      // no value to set is provided.
      return node[lastKey];

    } else {
      // we were provided a value to set.
      return node[lastKey] = val;

    }

  }

}


module.exports = ActionBase;
