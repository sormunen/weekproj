const request = require('supertest');
const app = require('../app');

/*it('REST CALL TEST(return 200) -- num 1', (done)=>{
    request(app)
        .get('/api/users')
        .expect(200, 'respond with a resource')
        .end((err) =>{
            if(err) throw done(err)
            done();
        });
});*/
it('REST GET TEST(return json) -- num 1', (done)=>{
  
     return request(app)
        .get('/api/users').then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body.length).toBe(2);
            expect(response.body[0].name).toMatch(/WOOHOO/);
            done();
        })
        
})
it('REST POST TEST(post 201) -- num 1',(done)=>{
    return request(app)
        .post('/api/users').send({name:'Jarkko', age:'29'})
        .expect('Location', /api\/users\/\d+$/)
        .then(response => {
            expect(response.statusCode).toBe(201);
            done();
        })
})
it('REST DELETE TEST(delete 202) -- num 1', (done)=>{
    return request(app)
    
        .delete('/api/users/1').then(response => {
          expect(response.statusCode).toBe(202);
          done();
          
        })
        
})