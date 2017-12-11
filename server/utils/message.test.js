const expect = require('chai').expect;
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate a correct message object', () => {
        const from = 'Alex';
        const text = 'Text';
        const message = generateMessage(from, text);

        expect(message.createdAt).to.be.a('number');
        expect(message).to.include({ from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate a correct location object', () => {
        const from = 'Alex';
        const lat = '15';
        const lng = '19';
        const url = 'https://www.google.com/maps?q=15,19';
        const message = generateLocationMessage(from, lat, lng);

        expect(message.createdAt).to.be.a('number');
        expect(message).to.include({ from, url });
    });
});