const mongoose = require('mongoose');

const dbURL = `mongodb+srv://${process.env.MONGODB_URI}:${process.env.MONGODB_PASS}@cluster0.couga.mongodb.net/`;

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
