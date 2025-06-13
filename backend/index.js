const app = require('./src/app'); 
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose'); 


app.use(cors());


if (require.main === module) {
  mongoose.connect('mongodb://mongo:27017/tododb', { 
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