const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env
	.MONGODB_URI}/messagesDB`;

mongoose.connect(dbURL, {
	useNewURLParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
	console.log('Подключено к MongoDB');
});

mongoose.connection.on('error', (err) => {
	console.error('Ошибка подключения к MongoDB:', err);
});
