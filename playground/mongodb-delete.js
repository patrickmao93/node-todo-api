const { MongoClient, ObjectId } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to TodoApp", err);
    }

    console.log("Successfully connected to TodoApp");

    // db.collection("Todos")
    //   .deleteMany({ text: "Something to do" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Todos")
    //   .deleteOne({ text: "fajoeifef" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users").deleteMany({ name: "Patrick" });
    db.collection("Users").findOneAndDelete({
      _id: new ObjectId("5c42e2206f5a830ab21819d3")
    });
  }
);
