```javascript
const query = { /* some query */ };
const newValues = [ /* some values */ ];

// Correct way to maintain order before update
newValues.sort((a, b) => a.someField - b.someField);

db.collection('myCollection').updateOne(query, {
  $push: { 'myArrayField': { $each: newValues } }
});
```