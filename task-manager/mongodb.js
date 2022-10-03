// CRUD Operations

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = `mongodb://127.0.0.1:27017`;
const databaseName = `task-manager`;

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to the database');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne(
    //   { _id: new ObjectID('633a92d6c05b868028ab39ba') },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }

    //     console.log(result);
    //   }
    // );

    // db.collection('users')
    //   .find({ age: 26 })
    //   .toArray((error, documents) => {
    //     console.log(documents);
    //   });

    // db.collection('users')
    //   .find({ age: 26 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    db.collection('tasks').findOne(
      {
        _id: new ObjectID('633ae8f270f5d9d3e84a26a5'),
      },
      (error, result) => {
        if (error) {
          return console.log('Error finding document');
        }

        console.log(result);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, documents) => {
        console.log(documents);
      });
  }
);
