# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications where errors within asynchronous operations inside route handlers are not properly handled, leading to silent failures.  The application doesn't send an error response to the client when an error occurs.

## Bug

The `bug.js` file shows an Express.js application with a route handler that performs an asynchronous operation (`someAsyncOperation`).  If this operation fails (simulated by a random chance in this example), the error is caught by `.catch()`, but no proper response is sent back to the client.  The error is only logged to the console.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle such errors.  It uses a `try...catch` block to handle errors, and responds appropriately to the client, sending an error response with an appropriate HTTP status code (e.g., 500) when necessary.

This example highlights the importance of comprehensive error handling in asynchronous operations within Express.js applications to ensure robustness and prevent silent failures.