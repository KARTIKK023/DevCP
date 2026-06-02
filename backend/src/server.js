const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const config = require('./config');
const healthRoutes = require('./routes/health');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const meetingRoutes = require('./routes/meetings');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/meetings', meetingRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'DevSphere API is running',
    health: '/health',
  });
});

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
  });
});

// Start server
const startServer = async () => {
  try {
    // Connect to MongoDB first
    await connectDB();

    // Start listening only after successful DB connection
    const host = process.env.HOST || '0.0.0.0';

    app.listen(config.port, host, () => {
      console.log(`✓ Server running on ${host}:${config.port}`);
      console.log(`✓ Environment: ${config.nodeEnv}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
