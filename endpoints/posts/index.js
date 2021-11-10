const postHandler = ({ axios }) => ({
  get: async (req, res) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.status(200).send(data);
  },

  post: async (req, res) => {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const found = users.find((x) => x.id === req.body.userId);

    if (found) {
      const { body } = req;
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        body
      );

      return res.status(201).send(data);
    }
    return res.sendStatus(400);
  },
});

module.exports = postHandler;
