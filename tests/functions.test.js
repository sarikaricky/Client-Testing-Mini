const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/functions.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

  describe('functions', () => {
  let testArray = [];
  beforeEach = () => {
    testArray = [1, 2, 3, 4, 'eggs', 'cheese', 'milk'];
  };

  afterEach = () => {
    testArray = [];
  };

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    it('should add up to two numbers passed to it', () => {
    const result = cases.addNums(1, 2); 
    expect(result).to.equal(3);
});
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('function');
    });

    it('should invoke a given callback passed to it', () => {
      const callBack = sinon.spy();
      const newCbInvoker = cases.callBackInvoker;
      newCbInvoker(callBack);
      expect (callBack).to.have.been.calledOnce;
    });

  });

  describe('iterator', () => {

    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
 
    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = sinon.spy(); 
      const iterator = cases.iterator;
      iterator(4, callBack);
      expect(callBack).to.have.callCount(4);
  });
});
});