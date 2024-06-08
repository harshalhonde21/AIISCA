import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  city:{
    type:String,
    required:true,
  }
}, { timestamps: true });

const Gallery = mongoose.model('AIISCAImage', imageSchema);

export default Gallery;
