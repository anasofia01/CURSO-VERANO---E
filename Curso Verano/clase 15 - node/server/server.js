const expressApp = require('express');
const app = expressApp();

app.get('/user', (req, res) => {
	res.json({ saludo: 'Hola usuario' });
});

app.listen(3001, () => {
	console.log('Server is running on 3001');
});
