import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(cors({ origin: 'http://localhost:3000/' }));

import { getDataRickMorty, getDataById } from './functions/functions.js';

app.get('/character', async (req, res) => {
	try {
		const results = await getDataRickMorty();
		res.json(results);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'No funcionó' });
	}
});

app.listen(3001, () => {
	console.log('Server is running on 3001');
});
