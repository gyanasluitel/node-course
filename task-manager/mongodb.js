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

    // db.collection('users').insertOne(
    //   {
    //     name: 'Taylor Hill',
    //     age: 26,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Recess',
    //       age: 24,
    //     },
    //     {
    //       name: 'Samikshya',
    //       age: 26,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert users');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection('tasks').insertMany(
      [
        {
          description: 'IT Security',
          completed: true,
        },
        {
          description: 'Hackerrank',
          completed: false,
        },
        {
          description: 'Agile Course',
          completed: true,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert tasks');
        }

        console.log(result.ops);
      }
    );
  }
);
