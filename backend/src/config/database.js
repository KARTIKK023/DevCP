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

    try {
      await User.collection.dropIndex('provider_1_providerId_1');
    } catch (error) {
      if (error.code !== 27 && error.codeName !== 'IndexNotFound') {
        throw error;
      }
    }

    await User.syncIndexes();
    const indexes = await User.collection.indexes();
    // #region agent log
    fetch('http://127.0.0.1:7538/ingest/2e1c2ab1-e6ed-4201-b7c8-fbb89c3e6453',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'6e83b9'},body:JSON.stringify({sessionId:'6e83b9',runId:'post-fix',location:'database.js:connect',message:'user collection indexes after sync',data:{indexes:indexes.map((i)=>({name:i.name,key:i.key,unique:Boolean(i.unique),sparse:Boolean(i.sparse),partial:Boolean(i.partialFilterExpression)}))},timestamp:Date.now(),hypothesisId:'C,D'})}).catch(()=>{});
    // #endregion

    return true;
  } catch (error) {
    console.error('✗ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
