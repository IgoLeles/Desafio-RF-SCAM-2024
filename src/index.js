const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const empregadoRoutes = require('.src/routes/empregado.routes');
const departamentoRoutes = require('.src/routes/departamento.routes');

app.use('/api/empregados', empgregadoRoutes);
app.use('/api/departamento', departamentoRoutes);

app.listen(port, () => {
    console.log('Server is running on port ${port}');   
});
