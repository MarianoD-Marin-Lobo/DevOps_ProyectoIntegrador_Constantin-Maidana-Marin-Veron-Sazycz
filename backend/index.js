const app = require('./src/app');
const PORT = process.env.PORT || 3000;

const cors = require('cors');

const mongoose = require('mongoose');

// const corsOptions = {
//   origin: 'http://127.0.0.1:5500',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204
// };

const corsOptions = {
  origin: '*', // <--- ¡Permitir CUALQUIER origen! (Solo para probar)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Esto no tiene efecto con origin: '*'
  optionsSuccessStatus: 204
};


app.use(cors(corsOptions)); 






if (require.main === module) {
  const mongoUri = process.env.NODE_ENV === 'docker'
    ? 'mongodb://mongo:27017/tododb'
    : 'mongodb://localhost:27017/tododb';

  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDB connected successfully');
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
    });
}