// const app = require('./src/app'); // Adjust the path if needed
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const app = express();

// Allow all origins (or you can specify the exact origin)
app.use(cors({
  origin: 'http://127.0.0.1:5502' // You can also use '*' to allow all origins in dev
}));

// Define your routes
app.post('/api/contact', (req, res) => {
  res.json({ message: 'Contact API' });
});


app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});



// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 5000;

// // Middleware to parse JSON and URL-encoded form data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve the HTML file on the root route
// app.get('/', (req, res) => {
//   res.sendFile('D:/My Portfolio/index.html'); // Update the path here
// });

// // POST route to handle contact form submission
// app.post('/api/contact', (req, res) => {
//   const { name, email, number, message } = req.body;

//   // Respond with the form data or null if fields are missing
//   if (name && email && number && message) {
//     res.json({
//       id: 1,
//       name: name,
//       email: email,
//       number: number,
//       message: message
//     });
//   } else {
//     res.json({
//       id: 1,
//       name: null,
//       email: null,
//       number: null,
//       message: null
//     });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
