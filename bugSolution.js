const express = require('express');
const app = express();
app.get('/', (req, res) => {
  try {
    someAsyncOperation().then(result => {
      res.send(result);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server started'));

async function someAsyncOperation() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong');
  }
  return 'Operation successful';
}