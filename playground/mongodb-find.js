const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos")
    //   .find({ _id: ObjectID("5c42d98283591036997df8ae") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {S
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );
    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log("Todos");
    //       console.log(count);
    //     },
    //     err => {
    //       console.log("Unable to count", err);
    //     }
    //   );

    db.collection("Users")
      .find({ name: "Patrick" })
      .count()
      .then(
        count => {
          console.log(`${count} users have name Patrick`);
        },
        err => {
          console.log(err);
        }
      );

    db.close();
  }
);
