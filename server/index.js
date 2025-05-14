const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ 
    status: 'success',
    return: 'test',
    time: new Date().toISOString(),
    user: {
      id: 123,
      name: 'Alice',
      role: 'admin'
   }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

