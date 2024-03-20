import request from "supertest"
import { createApp } from ".";

let app: any;

beforeAll(async () => {
  app = await createApp();
});
beforeEach(async () => {
  

});

describe("POST /messages", () => {
  it("responds with a success message", async () => {
    const response = await request(app)
    .post("/messages")
    .send({ message: "testing with redis"});
    
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Message added to list");
  });
});

describe("GET /messages", () => {
  it("response with all messages", async () => {
    const response = await request(app).get("/messages");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe([])


  });
})