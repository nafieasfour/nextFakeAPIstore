
// Import required modules
const usersData = require('../../public/data/users.json');

// Handler function for the API route
export default function handler(req, res) {
  // Return the user data as JSON
  res.status(200).json(usersData);
}
