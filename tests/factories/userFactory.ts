import faker from "faker"
import {prisma} from "../../src/config/database.js"
import app from "../../app.js"
import supertest from "supertest"

export async function generateUser() {
    return { 
        email: faker.internet.email(), 
        password: "1234567890" 
    }
}

export async function generateSession() {
    const user ={ 
        email: faker.internet.email(), 
        password: "1234567890" 
    }
    await supertest(app).post("/signup").send(user)
    return user
}