const express = require('express');
const app = express();
let errorCount = 0;


// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

// Error-handling middleware
app.use((err, req, res, next) => {
    errorCount++;
    console.log(`Error Count: ${errorCount}`);
    res.status(404).send(`Error occurred, total error count: ${errorCount}`);
});

// Example route with a thrown error
app.get('/user', function(req, res) {
  // Throw an error, this will be caught by the error-handling middleware
  throw new Error("User not found");
});

// A normal POST route (no error)
app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

// Route to check the current error count
app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// Global error-catching middleware for any unhandled errors
//we place this middleware at end because we ant this to be called after execution of request in route handlers and then if they throw any error just handle it 
// conventionally if u dont do this the error will be like could not fine c>:/users/ ... which exposes th backend filesystem architecture that is not good
//so we use this error checking at end .
app.use((err, req, res, next) => {
    errorCount++;
    res.status(404).json({ error: "An error occurred", errorCount });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
