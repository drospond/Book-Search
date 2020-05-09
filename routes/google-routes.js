module.exports = function (app) {
  const axios = require("axios");
  const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
  const APIKEY = process.env.API_KEY;
  app.post("/api/searchBooks", (req, res) => {
    axios
      .get(`${BASEURL}${req.body.query}&key=${APIKEY}`)
      // .then((books) => res.json(books.data.items))
      .then((books) => {
        const mappedBooks = books.data.items.map((book)=>{
          let newBookOject = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
          }
          return newBookOject;
        })
        res.json(mappedBooks);
      })
      .catch(er=>console.log(er));
  });
};
