const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from DevOps Project v1'));
app.get('/health', (req, res) => res.json({ status: 'UP' }));

if (require.main === module) {
  app.listen(3000, () => console.log('App running on port 3000'));
}
module.exports = app;
