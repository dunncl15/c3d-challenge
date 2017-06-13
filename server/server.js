const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('/locations', (request, response) => {
  database('locations').select()
  .then(locations => response.status(200).json(locations))
  .catch(error => console.error('error: ', error))
});

app.post('/locations', (request, response) => {

  if (!request.body) {
    return response.status(422).send({ error: 'No location provided' });
  }

  const location = request.body;
  database('locations').insert(location, 'id')
  .then(location => response.status(201).json({ id: location[0] }))
  .catch(error => console.error('error: ', error));
});

app.delete('/locations/:id', (request, response) => {
  const { id } = request.params

  database('locations').where('id', id).del()
  .then(location => {
    if (!location) {
      response.status(404).send({ error: 'Location not found' })
    } else {
      response.sendStatus(204)
    }
  })
  .catch(error => response.status(500).send({ error: error }))
})

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log('RrrarrrrRrrrr server alive on port 3001');
});
