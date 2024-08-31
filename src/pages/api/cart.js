import fs from 'fs';
import path from 'path';

const cartFilePath = path.join(process.cwd(), 'src/data/cart.json');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { cart } = req.body; // Expecting { cart: [...] }

    // Validate that 'cart' is an array
    if (!Array.isArray(cart)) {
      res.status(400).json({ error: 'Cart data must be an array' });
      return;
    }

    // Write to the cart.json file
    fs.writeFile(cartFilePath, JSON.stringify(cart, null, 2), (err) => {
      if (err) {
        console.error('Error writing to cart.json:', err);
        res.status(500).json({ error: 'Error saving cart data' });
      } else {
        res.status(200).json({ message: 'Cart saved successfully' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
