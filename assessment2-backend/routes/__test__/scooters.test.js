const request = require('supertest');
const app = require('../../app');

const baseurl = '/api/scooters'

test('we find scooters from the API', (done) => {
    request(app)
        .get(baseurl)
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body.length).toBeGreaterOrEqualTo(4);
            done();
        })
});

test('a single scooter can be fetched', (done) => {
    request(app)
        .get(`${baseurl}/1`)
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(['Ninebot', 'Glion', 'Xiaomi']).toContain(response.body.model.name);
            done();
        })
});

test('a single scooter with incorrect id will return 404', (done) => {
    request(app)
        .get(`${baseurl}/0`)
        .then(response => {
            expect(response.statusCode).toBe(404);
            done();
        })
});


// test('we can add a new scoot', (done) => {
//     const dummyscoot = {
//         model: { id: 2, name: 'Glion' },
//         electricity: { max: 3, current: 2 },
//         position: { lat: 3.14, lon: 23.4 },
//         added: '2019-04-01'
//       };
//     request(app)
//         .post(baseurl)
//         .send(dummyscoot)
//         .expect(201) // tai kuten alla
//         .expect('Location', /api\/scooters\/\d+$/)
//         .then(res => {
//             expect(res.statusCode).toBe(201);
//             const newresloc = res.header['Location'];
//             request(app)
//             .get(newresloc)
//             .then(response => {
//                 expect(response.statusCode).toBe(200);
//                 expect(response.body.model).toEqual(dummyscoot.model);
//                 expect(response.body.position).toEqual(dummyscoot.position);
//                 expect(response.body.added).toEqual(dummyscoot.added);
//                 done();
//             })
    

//         });
// });

