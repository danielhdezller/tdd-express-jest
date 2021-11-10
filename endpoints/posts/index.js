const postHandler = ({ axios }) => ({
  get: async (req, res) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.status(200).send(data);
  },

  post: async (req, res) => {
    await axios.get("https://jsonplaceholder.typicode.com/users");

    const { body } = req;
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      body
    );

    res.status(201).send(data);
  },
});

module.exports = postHandler;
