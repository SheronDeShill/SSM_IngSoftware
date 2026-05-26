const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Petición recibida: ${req.method} ${req.url}`);
    next();
});

const authRoutes = require('./src/routes/auth.routes');
require('./src/config/db');

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Servidor SSM-ADM funcionando');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});