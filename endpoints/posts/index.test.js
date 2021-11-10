const request = require("supertest");
const app = require("../../server");

describe("Server", () => {
  describe("Endpoints", () => {
    describe("Posts POST", () => {
      it("should creates a new post", async () => {
        //Arrange Act
        const response = await request(app)
          .post("/posts")
          .send({ userId: 5 })
          .set("user_id", 1)
          .set("Content-Type", "application/json");

        //Assert
        expect(response.statusCode).toEqual(201);
        expect(response.body.userId).toEqual(5);
        expect(response.body).toHaveProperty("id");
      });

      it("should not creates a new post", async () => {
        //Arrange Act
        const response = await request(app)
          .post("/posts")
          .send({ userId: 400 })
          .set("user_id", 1)
          .set("Content-Type", "application/json");

        //Assert
        expect(response.statusCode).toEqual(400);
      });
    });
  });
});
