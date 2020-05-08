module.exports = function (app) {
  const axios = require("axios");
  const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
  const APIKEY = process.env.API_KEY;
  app.post("/api/searchBooks", (req, res) => {
    axios
      .get(`${BASEURL}${req.body.query}&key=${APIKEY}`)
      .then((books) => res.json(books.data.items))
      .catch(er=>console.log(er));
  });
};
