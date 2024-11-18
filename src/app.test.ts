import req from "supertest"
import {app} from "./app"
describe("ping",()=>{
    test("alive",()=>{
        expect(9).not.toBe(6)
    })
    test("status", async()=>{
        const res = await req(app).get("/ping")
        expect(res.status).toBe(200)
        expect(res.text).toBe("pong")
    })
})