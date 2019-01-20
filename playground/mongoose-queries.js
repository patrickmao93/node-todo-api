const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

// const id = "5c43e1da90126d84ece1ed320";

// if (!ObjectID.isValid(id)) {
//   console.log("ID is not valid");
// }

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("ID not found");
//     }
//     console.log(todo);
//   })
//   .catch(err => console.log(err));

const userId = "5c42f741f4f1b0885a653592";
if (!ObjectID.isValid(userId)) {
  return console.log("userId is not valid");
}

User.findById(userId)
  .then(
    user => {
      if (!user) {
        return console.log("user not found");
      }
      console.log("User: ", user);
    },
    err => {
      console.log(err);
    }
  )
  .catch(err => console.log(err));
