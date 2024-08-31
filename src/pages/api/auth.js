// import fs from 'fs';
// import path from 'path';

// const filePath = path.join(process.cwd(), 'src', 'data', 'users.json');

// export default function handler(req, res) {
//     const userData = getUsersData();

//     const { email, password } = req.body;

//     const authenticatedUser = userData.find(user => user.email === email && user.password === password);

//     if (authenticatedUser) {
//         res.status(200).json({ success: true, message: 'Authentication successful' });
//     } else {
//         res.status(401).json({ success: false, message: 'Invalid email or password' });
//     }
// }

// const getUsersData = () => {
//     const jsonData = fs.readFileSync(filePath, 'utf-8');
//     const usersData = JSON.parse(jsonData);
//     return usersData;
// };
