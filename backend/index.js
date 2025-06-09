const app = require('./src/app');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));