```javascript
const query = { /* some query */ };

// Incorrect way to update an array field
db.collection('myCollection').updateOne(query, {
  $push: { 'myArrayField': { $each: [ /* some values */ ], $sort: { 'someField': 1 } } //Incorrect
});
```