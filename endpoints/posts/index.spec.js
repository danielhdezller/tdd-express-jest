const postHandlers = require("./index");

describe("Endpoints", () => {
  describe("posts", () => {
    it("should create", async () => {
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
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        sendStatus: jest.fn(),
      };

      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } }),
      };

      //Act
      await postHandlers({ axios }).post(req, res);

      //Assert
      expect(res.status.mock.calls).toEqual([[201]]);
      expect(res.send.mock.calls).toEqual([[{ id: 1000 }]]);
      expect(["https://jsonplaceholder.typicode.com/posts", post]);
    });

    it("should not create a post if userId does not exist", async () => {
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
        userId: 3,
        id: 1,
        title: "Title",
        body: "The content of the post.",
      };

      const req = {
        body: post,
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        sendStatus: jest.fn(),
      };

      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } }),
      };

      //Act
      await postHandlers({ axios }).post(req, res);

      //Assert
      expect(axios.post.mock.calls).toEqual([]);
      expect(res.sendStatus.mock.calls).toEqual([[400]]);
    });
  });
});
