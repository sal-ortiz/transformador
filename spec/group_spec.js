
const Path = require('path');

const targPath = Path.join(__dirname, '..', 'lib', 'group.js');

const ActionGroup = require(targPath);


describe('ActionGroup', () => {

  describe('an instance of', () => {
    let instance;
    let input = { one: 1, two: 2 }

    beforeAll(() => {
      instance = new ActionGroup(input);
    });

    it('has a action Object', () => {
      expect(instance.action).toBeInstanceOf(Object);
    });

    describe('the process(...) function', () => {

      it('applies the given transformations', () => {
        let targ = { one: 2, two: 1 };

        instance.process(targ);

        expect(targ.one).toBe(input.one);
        expect(targ.two).toBe(input.two);
      });

    });

  });

});
