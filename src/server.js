const app = require('./app');
config = require('../config/config');

const port = config.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
