const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const Message = require('./models/Message');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./db');

app.post('/submit', async (req, res) => {
	const { message } = req.body;

	if (!message) {
		return res.status(400).json({ error: 'Сообщение не может быть пустым' });
	}

	try {
		const newMessage = new Message({ message });
		await newMessage.save();


		console.log('Сообщение сохранено:', message);
		res.json({ success: true, message: `Сообщение "${message}" получено и сохранено!` });
	} catch (error) {
		console.error('Ошибка при сохранении сообщения:', error);
		res.status(500).json({ error: 'Произошла ошибка сервера' });
	}
});

app.get('/messages', async (req, res) => {
	try {
		const message = await Message.find(); // get message
		res.json(message);
	} catch (error) {
		console.error('Ошибка при получении сообщений:', error);
		res.status(500).json({ error: 'Произошла ошибка сервера' });
	}
});

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`);
});
