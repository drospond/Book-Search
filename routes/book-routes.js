const mongoose = require("mongoose");
const bookdb = require("../models/Book");

module.exports = function (app) {
  app.get("/api/books", (req, res) => {
    bookdb
      .find()
      .then((dbBooks) => {
        res.json(dbBooks);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/books", (req, res) => {
    bookdb
      .create(req.body)
      .then((newBook) => {
        res.json(newBook);
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json(err);
      });
  });

  app.delete("/api/books/:id", (req, res) => {
    bookdb
    .deleteOne({_id: req.params.id})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
  });
};
