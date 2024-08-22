import mongoose from "mongoose";

const schoolSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

// Create a geospatial index on the 'location' field for proximity queries
schoolSchema.index({ location: '2dsphere' });

const schoolModel = mongoose.model('School', schoolSchema);

export default schoolModel;
