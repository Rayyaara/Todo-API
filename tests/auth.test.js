const request = require("supertest");
const app = require("../src/app");

describe("Auth Endpoint", () => {
    describe("POST /api/auth/register", () => {
        it("Should register a new user successfully", async () => {
            const res = await request(app).post("/api/auth/register").send({
                name: "Rayyaa",
                email: "ray@example.com",
                password: "rahasia111",
            });

            expect(res.statusCode).toBe(201);
            expect(res.body.success).toBe(true);
            expect(res.body.data.user.email).toBe("ray@example.com");
            expect(res.body.data.token).toBeDefined();
        });

        it("Should reject registration with missing fields", async () => {
            const res = await request(app).post("/api/auth/register").send({
                email: "ray@example.com",
            });
            
            expect(res.statusCode).toBe(400);
            expect(res.body.success).toBe(false);
        });

        it("Should reject duplicate email", async () => {
            await request(app).post("/api/auth/register").send({
                name: "Rayyaa",
                email: "ray@example.com",
                password: "rahasia111",
            });

            const res = await request(app).post("/api/auth/register").send({
                name: "Rayyaa Kedua",
                email: "ray@example.com",
                password: "rahasia111",
            });

            expect(res.statusCode).toBe(409);
            expect(res.body.message).toMatch(/already registered/i);
        });
    });

    describe("POST /api/auth/login", () => {
        beforeEach(async () => {
            await request(app).post("/api/auth/register").send({
              name: "Rayyaa",
              email: "ray@example.com",
              password: "rahasia111",
            });
        });

        it("Should login successfully with correct credentials", async () => {
            const res = await request(app).post("/api/auth/login").send({
                email: "ray@example.com",
                password: "rahasia111",
            });

            expect(res.statusCode).toBe(200);
            expect(res.body.data.token).toBeDefined();
        });

        it("Should reject login with wrong password", async () => {
            const res = await request(app).post("/api/auth/login").send({
                email: "ray@example.com",
                password: "password-salah",
            });

            expect(res.statusCode).toBe(401);
            expect(res.body.message).toMatch(/invalid email or password/i);
        });
    });
});