const request = require('supertest');
const app = require('./../app');

describe('TEST API POST Method', () => {
    test('If request body is not sent server should respond with status code 500 and {"message": "Body is missing"}', (done) => {
        request(app).post('/products').
        send({}).
        expect(500).
        then(res => {
            expect(JSON.parse(res.text).message).toBe('Body is missing');
            done();
        })
    })

    test('If request body is present but not respected the specified format server should respond with status code 500 and {"message": "Invlaid body format"}', (done) => {
        request(app).post('/products').
            send({something: "else"}).
            expect(500).
            then(res => {
                expect(JSON.parse(res.text).message).toBe('Invalid body format');
                done();
            })
    })

    test('Product price should not be negative', (done) => {
        request(app).post('/products').send({
            name: "Iphone X",
            category: "Smartphone",
            price: -400
        }).expect(500).then(res => {
            expect(JSON.parse(res.text).message).toBe('Price should be a positive number');
            done();
        })
    })

    test('If the sent product already exists send status code 500 with body {"message": "Product already exists"}. Checking is done by name', (done) => {
        request(app).post('/products').
            send({
                name: "Iphone XS",
                category: "Smartphone",
                price: 5000
            }).expect(500).then(res => {
                expect(JSON.parse(res.text).message).toBe('Product already exists');
                done();
            })
    })

    test('If the body is valid the product should be added to the array', (done) => {
        request(app).post('/products').send({
            name: "Iphone XR",
            category: "Smartphone",
            price: 4300
        }).expect(201).then(res => {
            expect(JSON.parse(res.text).message).toBe('Created');
            expect(app.locals.products.length).toBe(4);
            done();
        })
    })
});