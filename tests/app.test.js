const app = require('../app/app')
const request = require('supertest')

describe ('Tests para express server', ()=>{
    it('Primera entrada: Hello World', async ()=>{
       const res = await request(app).get('/').send(`Hello World!!`)
       expect((res)=>{
           expect(res.text).toBe(`Hello World!!`)
        })
    })
    it ('Agregar una nueva ruta', async ()=>{
        const res = await request(app).get('/launchx').send(`Bienvenidos a LaunchX`)
        expect((res)=>{
            expect(res.text).toMatch('Bienvenidos a LaunchX')
        })
    })
    it ('agregar una nueva ruta y que regrese un objeto', () =>{
        const explorer = {name: "Explorer1", msg: "Hello!"}
        const res = request(app).get('/explorerInNode').send(explorer)
        expect((res)=>{
            expect((res.body).name).toBe("Explorer1")
            expect((res.body).msg).toBe("Hello!")
        })
    })
})