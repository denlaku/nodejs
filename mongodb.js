const assert = require('assert');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/test';

const findCol = (db, callback) => {
  const cursor = db.collection('col').find();
  console.log('find success...');
  cursor.each(function(err, doc) {
    // assert.equal(err, null);
    if (doc !== null) {
      console.dir(doc);
    } else {
      callback();
    }
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected correctly to server.');
  findCol(db, () => {
    db.close();
  });
  // window.db = db;
});
