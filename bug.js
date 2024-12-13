const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(err => {
    // Error handling is missing here.  The error is swallowed
    console.error(err); //This logs the error, but doesn't send a response
  });
});
app.listen(3000, () => console.log('Server started'));

async function someAsyncOperation() {
  // Simulates an asynchronous operation that might fail
  // In a real-world scenario, this could be database access, file I/O, etc.
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong');
  }
  return 'Operation successful';
}