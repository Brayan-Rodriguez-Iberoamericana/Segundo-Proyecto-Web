require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const usuarioRoutes = require('./routes/usuario.routes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
