const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI;

    if (!mongodbUri) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    await mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✓ MongoDB connected successfully');

    const User = require('../models/User');

    if (process.env.NODE_ENV !== 'production') {
      try {
        await User.collection.dropIndex('provider_1_providerId_1');
      } catch (error) {
        if (error.code !== 27 && error.codeName !== 'IndexNotFound') {
          throw error;
        }
      }

      await User.syncIndexes();
    }

    return true;
  } catch (error) {
    console.error('✗ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
