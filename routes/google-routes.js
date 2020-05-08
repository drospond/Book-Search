module.exports = function (app) {
  const axios = require("axios");
  const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
  const APIKEY = process.env.API_KEY;
  app.get("/api/searchBooks", (req, res) => {
    axios
      .get(`${BASEURL}${req.body.query}&key=${APIKEY}`)
      .then((books) => res.json(books.data))
      .catch(er=>console.log(er));
  });
};
