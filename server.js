const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
	const { message } = req.body;

	if (!message) {
		return res.status(400).json({ error: 'Сообщение не может быть пустым' });
	}

	// must be save on PORT 3000
	console.log('Получено сообщение:', message);

	res.json({ susses: true, message: `Сообщение "${message}" получено!` });
});

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`);
});
