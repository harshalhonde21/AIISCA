import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  
  reportUrl: {
    type: String,
    required: true,
  },
  reportTitle: {
    type: String,
    required: true,
    unique:true,
  },
  thumbnailUrl:{
    type: String,
    required: true,
  },
  desc:{
    type: String,
    required: true,
  }
}, { timestamps: true });

const Report = mongoose.model('AIISCAReports', reportSchema);

export default Report;
