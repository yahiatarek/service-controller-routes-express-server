const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { swaggerDocs: V1SwaggerDocs } = require("./apis-version-1/swagger");

const port = 3000;
const workoutsRoutesFromRouterV1 = require('./apis-version-1/routes/workoutsRoutes');
const recordsRoutesFromRouter = require('./apis-version-1/routes/recordsRoutes');

app.use(bodyParser.json());
app.use('/api/v1/workouts', workoutsRoutesFromRouterV1);
app.use('/api/v1/records', recordsRoutesFromRouter);
app.listen(port, () => {
    console.log(`API is listening on port ${port}`);
    V1SwaggerDocs(app, port);
  });