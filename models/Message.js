const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
	message: { type: String, required: true }, // field "message" required
	createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
