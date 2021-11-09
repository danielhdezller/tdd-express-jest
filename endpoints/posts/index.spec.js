const postHandlers = require("./index");

describe("Endpoints", () => {
  describe("posts", () => {
    it.skip("should create", async () => {
      //Arrange
      const mockUsers = [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ];

      const post = {
        userId: 1,
        id: 1,
        title: "Title",
        body: "The content of the post.",
      };

      const req = {
        body: post,
      };

      const res = {
        status: jest.fn(),
        send: jest.fn,
      };

      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: {id: 1000}}),
      };

      //Act
      await postHandlers({ axios }).post(req, res);

      //Assert
      expect(res.status.mock.calls).toEqual([[201]]);
    });
  });
});
