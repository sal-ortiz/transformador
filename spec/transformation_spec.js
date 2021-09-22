
const Path = require('path');

const targPath = Path.join(__dirname, '..', 'lib', 'transformation.js');

const ActionTransformation = require(targPath);


describe('ActionTransformation', () => {

  describe('an instance of', () => {
    let instance;
    let input = ['one', '+1'];

    beforeAll(() => {
      instance = new ActionTransformation(...input);
    });

    describe('the process(...) function', () => {
      let targ = { one: 0 };

      it('applies the given transformation', () => {
        instance.process(targ);

        expect(targ.one).toBe(1);
      });

    });

  });

  describe('the applyModifier(...) static function', () => {

    describe('given a addition modifier', () => {
      let input = [6, '+', 2];

      it('adds the given values', () => {
        let res = ActionTransformation.applyModifier(...input);

        expect(res).toBe(8);
      });

    });

    describe('given a subraction modifier', () => {
      let input = [6, '-', 2];

      it('subracts the second value from the first', () => {
        let res = ActionTransformation.applyModifier(...input);

        expect(res).toBe(4);
      });

    });

    describe('given a multiplication modifier', () => {
      let input = [6, '*', 2];

      it('multiplies the two given values', () => {
        let res = ActionTransformation.applyModifier(...input);

        expect(res).toBe(12);
      });

    });

    describe('given a multiplication modifier', () => {
      let input = [6, '/', 2];

      it('multiplies the two given values', () => {
        let res = ActionTransformation.applyModifier(...input);

        expect(res).toBe(3);
      });

    });

  });

});
