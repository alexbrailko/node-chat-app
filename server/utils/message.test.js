const expect = require('chai').expect;
const { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate a correct message object', () => {
        const from = 'Alex';
        const text = 'Text';
        const message = generateMessage(from, text);

        expect(message.createdAt).to.be.a('number');
        expect(message).to.include({ from, text});
    });
});