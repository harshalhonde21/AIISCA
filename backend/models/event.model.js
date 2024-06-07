import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter the event title'],
  },
  description: {
    type: String,
    required: [true, 'Please enter the event description'],
  },
  date: {
    type: Date,
    required: [true, 'Please enter the event date'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please upload an image for the event'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
