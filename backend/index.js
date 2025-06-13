// const app = require('./src/app');
// const PORT = process.env.PORT || 3000;
// const cors = require('cors');

// app.use(cors());
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// backend/index.js
const app = require('./src/app'); // Importa la instancia de tu app Express desde src/app.js
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose'); // <-- ¡Necesitas mongoose aquí para la conexión!

// Aplica el middleware cors a la aplicación
app.use(cors());

// Este bloque de código SOLO se ejecutará cuando index.js sea el archivo principal
// ejecutado (por ejemplo, con `node index.js` o `npm start`).
// NO se ejecutará cuando 'index.js' sea importado por otro archivo (como tus tests).
if (require.main === module) {
  // Conexión a MongoDB
  mongoose.connect('mongodb://mongo:27017/tododb', { // Conéctate a tu MongoDB real/Dockerizado
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDB connected successfully');
      // Inicia el servidor solo después de una conexión exitosa a la DB
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
      // Opcional: Podrías salir del proceso si la conexión falla gravemente
      // process.exit(1);
    });
}