
const Path = require('path');

const targPath = Path.join(__dirname, '..', 'lib', 'sequence.js');

const ActionSequence = require(targPath);


describe('ActionSequence', () => {

  describe('an instance of', () => {
    let instance;
    let input = [{ one: 1 }, { two: 2 }]

    beforeEach(() => {
      instance = new ActionSequence(input);
    });

    it('has a action Array', () => {
      expect(instance.action).toBeInstanceOf(Array);
    });

    describe('the process(...) function', () => {

      it('executes the next frame in the sequence', () => {
        let targ = { one: 2, two: 1 };

        instance.process(targ);
        expect(targ.one).toBe(1);

        instance.process(targ);
        expect(targ.two).toBe(2);

      });

    });

  });

});
