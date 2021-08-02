const request = require("supertest");
const server =require("../app");

describe('API server', ()=>{
    let api;

    beforeAll(() =>{
        //starts the server and stores the value in the api variable
        api =server.listen(5000, () => console.log('Test Server is running on port 5000'));
    })

    afterAll(done =>{
        console.log('Gracefully stopping the test server');
        api.close(done);
    });

    it('responds to / with status 200', done => {
        request(api)
        .get('/')
        .expect(200, done)
    })

    test('it responds to get /fruits/clue with status 200', done =>{
        request(api)
        .get('/fruits/clue')
        .expect(200, done)
    })

    test('it responds to get /fruits/guess/:userguess with status 200', done =>{
        request(api)
        .get('/fruits/guess/:userguess')
        .expect(200, done)
    })

    it('responds to an unknown input with a 404', (done) =>{
        request(api)
        .get('/fruits/testo/testy')
        .expect(404)
        .expect({}, done)
    })
})