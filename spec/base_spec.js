
const Path = require('path');

const targPath = Path.join('..', 'lib', 'base.js');

const ActionBase = require(targPath);



describe('ActionBase', () => {

  describe('an instance of', () => {
    let instance;
    let input = ['one', 1];

    beforeAll(() => {
      instance = new ActionBase(...input);
    });

    it('has a key attribute', () => {
      expect(instance.key).toBe(input[0]);
    });

    it('has a val attribute', () => {
      expect(instance.key).toBe(input[0]);
    });

  });

  describe('the traverse(...) function', () => {

    describe('given a store and a key', () => {

      it('returns the requested key from the store', () => {
        let store = { one: 1 };
        let val = ActionBase.traverse(store, 'one');

        expect(val).toBe(store.one);
      });

    });

    describe('given a store, a key, and a value', () => {

      it('updated the given key in the store with the given value', () => {
        let store = { one: 1 };
        let expectation = 2;

        ActionBase.traverse(store, 'one', expectation);

        expect(store.one).toBe(expectation);
      });

    });

    describe('a deeper value and a compund key', () => {

      describe('given a store and a key', () => {

        it('returns the requested key from the store', () => {
          let store = { one: { two: { three: 3 } } };
          let val = ActionBase.traverse(store, 'one.two.three');

          expect(val).toBe(store.one.two.three);
        });

      })

      describe('given a store, a key, and a value', () => {

        it('updated the given key in the store with the given value', () => {
          let store = { one: { two: { three: 3 } } };
          let expectation = 1;

          ActionBase.traverse(store, 'one.two.three', expectation);

          expect(store.one.two.three).toBe(expectation);
        });

      });

    });

  });

});
