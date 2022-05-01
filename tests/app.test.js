const app = require('../app/app')
const request = require('supertest')

describe ('Tests para express server', ()=>{
    it('Primera entrada: Hello World', async ()=>{
       const res = await request(app).get('/').send(`Hello World!!`)

        expect(res.text).toBe(`Hello World!!`)
    })
    it ('Agregar una nueva ruta', async ()=>{
        const res = await request(app).get('/launchx').send(`Bienvenidos a LaunchX`)

        expect(res.text).toMatch('Bienvenidos a LaunchX')
    })
})