const expect = require('chai').expect;
const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non string values', () => {
        expect(isRealString(2)).to.be.false;
    });
    it('should reject string with only space', () => {
        expect(isRealString('   ')).to.be.false;
    });
    it('should allow string with non-space characters', () => {
        expect(isRealString(' ggg  ')).to.be.true;
    });
});