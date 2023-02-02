const app = require('./../app');

const input = "Hello ${name} from the other ${surname}.";
const tokens = [
    {
        tokenName: "name",
        tokenValue: "John"
    },
    {
        tokenName: "surname",
        tokenValue: "Doe"
    }
];
const wrongInput = 55;
const wrongTokens = [
    {
        tokenName: 5,
        tokenValue: 6
    },
    {
        tokenValue: 7,
        tokenValuee: 8
    }
];

describe('Testing textProcessor function', () => {
    test('input parameter should be a string', (done)=> {
        expect(() => {
            app.textProcessor(wrongInput)
        }).toThrowError('Input should be a string');
        done();
    });
    test('input length should be greater than 5 characters', (done) => {
        expect(() => {
            app.textProcessor("Pizza", tokens)
        }).toThrowError('Input should have at least 6 characters')
        done();
    });

    test('tokens parameter should contain elements in the format {tokenName: string, tokenValue: string}', (done) => {
        expect(() => {
            app.textProcessor(input, wrongTokens)
        }).toThrowError('Invalid array format');
        done();
    });
    test('Function should return initial input if there are no tokens', (done) => {
        expect(app.textProcessor('No token', tokens)).toBe('No token');
        done();
    });

    test('Function should return text with replaced tokens', (done) => {
        expect(app.textProcessor(input, tokens)).toBe('Hello John from the other Doe.');
        done();
    })
});