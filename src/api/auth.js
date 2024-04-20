// pages/api/auth.js
import fs from 'fs';
import path from 'path';

// Define the file path to users.json
const filePath = path.join(process.cwd(), 'src', 'data', 'users.json');

// Function to authenticate user credentials
export default function handler(req, res) {
  // Read user data from the JSON file
  const userData = getUsersData();

  // Assuming you're receiving email and password in the request body
  const { email, password } = req.body;

  // Find the user with the provided email and password
  const authenticatedUser = userData.find(user => user.email === email && user.password === password);

  // If authenticated user is found, send success response
  if (authenticatedUser) {
    res.status(200).json({ success: true, message: 'Authentication successful' });
  } else {
    // If authentication fails, send error response
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
}

// Function to read user data from users.json
const getUsersData = () => {
  // Read JSON data from users.json file
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  // Parse JSON data into array of user objects
  const usersData = JSON.parse(jsonData);
  // Return the array of user objects
  return usersData;
};
