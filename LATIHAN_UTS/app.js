const express = require('express');
const app = express();
const topicRoutes = require('./routes/topicRoutes');

app.use(express.json()); // untuk parse JSON request body

app.use('/topiccollection', topicRoutes);

// ... kode lainnya

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});