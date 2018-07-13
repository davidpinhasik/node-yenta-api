const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/YentaApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  };

  console.log('Connected to MongoDB server');
  const db = client.db('YentaApp');

  db.collection('Contact').insertOne({
    firstName: 'Yaacov',
    lastName: 'Ploni',
    id: '012345678',
    city: 'Bet Shemesh',
    status: 'open'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to connect to server', err);
    };

    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  client.close();
});
