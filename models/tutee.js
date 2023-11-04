const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tuteeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  language: [
    {
      type: String,
      enum: ['English', 'Mandarin', 'Fench', 'Japanese', 'Korean', 'Spanish'],
    },
  ],
});

module.exports = mongoose.model('Tutee', tuteeSchema);
