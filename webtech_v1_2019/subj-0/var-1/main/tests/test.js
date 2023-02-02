// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
chai.use(require('chai-json-schema'));
chai.should();

let schema = {
    title: 'Article schema',
    type: 'object',
    required: ['title', 'abstract', 'keywords', 'authors'],
    properties: {
        title: {
            type: 'string'
        },
        abstract: {
            type: 'string'
        },
        keywords: {
            type: 'array',
            minItems: 3,
            items: {
                type: 'string'
            }
        },
        authors: {
            type: 'array',
            minItems: 2,
            items: {
                type: 'object',
                required: ['fullName', 'institution', 'email']
            }
        }
    }
}

describe("JSON", () => {
    describe("GET /article.json", () => {
        it('should return a valid json', (done) => {
            chai.request(app)
                 .get('/article.json')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     chai.assert.jsonSchema(res.body, schema)
                     done();
                  });
        })
    })
});