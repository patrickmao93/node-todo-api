const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos").insertOne(
    //   {
    //     text: "Something to do",
    //     completed: false
    //   },
    //   (err, result) => {
    //     console.log(result);
    //     if (err) {
    //       return console.log("Unable to insert", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // db.collection("Users").insertOne(
    //   {
    //     name: "Patrick",
    //     age: 26,
    //     location: "Shanghai"
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to add", err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //   }
    // );
    db.close();
  }
);
