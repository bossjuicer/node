const { MongoClient, ObjectId } = require("mongodb");
// console.log(mongodb);
// const mongoClient = mongodb.MongoClient;

const conURL = "mongodb://127.0.0.1:27017";
const dbName = "task-app";
MongoClient.connect(conURL, (err, client) => {
  if (err) {
    console.log("Unable to connect");
    return;
  }
  const db = client.db(dbName);
  db.collection("user").insertOne({ name: "Mohd Aquib", age: 28 }, (err, res) =>
    console.log(res)
  );
  // db.collection("user").findOne({ age: 21 }, (err, user) => {
  //   if (err) {
  //     console.log("Unable to find user");
  //     return;
  //   }
  //   console.log(user);
  // });
  // db.collection('user').find().toArray((err,users)=>{
  //     console.log(users);
  // })

  // objid = ObjectId("6205482e014748bf6475f911");
  // console.log(objid.getTimestamp());

  //   db.collection("user")
  //     .deleteMany({ age: 23 })
  //     .then((res) => console.log(res));
  //   db.collection("user").insertMany(
  //     [
  //       {
  //         name: "Suhial",
  //         age: 23,
  //       },
  //       {
  //         name: "Suhail",
  //         age: 23,
  //       },
  //       {
  //         name: "Suhial",
  //         age: 23,
  //       },
  //     ],
  //     (err, res) => {
  //       if (err) {
  //         console.log("could ot add resourcce");
  //         return;
  //       } else {
  //         return console.log(res);
  //       }
  //     }
  //   );
});
