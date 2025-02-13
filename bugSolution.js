```javascript
// Correct use of $in operator
db.collection.find({ field: { $in: ["value"] } });
// or for a single value, use $eq operator:
db.collection.find({ field: "value" });
```