const usersHandlers = require("./index");

describe("Endpoints", () => {
  describe("users", () => {
    describe("get", () => {
      it("returns to user json", async () => {
        //arrange
        const axios = {
          get: jest.fn().mockResolvedValue({
            data: 1,
          }),
        };

        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };

        //act
        await usersHandlers({ axios }).get({}, res);

        //assert
        expect(res.status.mock.calls).toEqual([[200]]);
        expect(res.send.mock.calls).toEqual([[1]]);
      });
    });

    describe("post", () => {
      it("create a resource", async () => {
        //arrange
        const axios = {
          post: jest.fn().mockResolvedValue({
            data: 1,
          }),
        };

        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };

        const req = {
          body: "request body",
        };

        //act
        await usersHandlers({ axios }).post(req, res);
        console.log("--> res:", res.status.mock); //LOG

        //assert
        expect(res.status.mock.calls).toEqual([[201]]);
        expect(res.send.mock.calls).toEqual([[1]]);
        expect(axios.post.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users", "request body"],
        ]);
      });
    });

    describe("put", () => {
      it("update a resource", async () => {
        //arrange
        const axios = {
          put: jest.fn().mockResolvedValue({
            data: 1,
          }),
        };

        const res = {
          sendStatus: jest.fn(),
          send: jest.fn(),
        };

        const req = {
          body: "request body",
          params: { id: 2 },
        };

        //act
        await usersHandlers({ axios }).put(req, res);

        //assert
        expect(axios.put.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users/2", "request body"],
        ]);
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
      });
    });

    describe("delete", () => {
      it("delete a resource to", async () => {
        //arrange
        const axios = {
          delete: jest.fn(),
        };

        const res = {
          sendStatus: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };

        const req = {
          params: { id: 5 },
        };

        //act
        await usersHandlers({ axios }).delete(req, res);

        //assert
        expect(axios.delete.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users/5"],
        ]);
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
      });
    });
  });
});
