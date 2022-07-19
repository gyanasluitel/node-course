const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=b0840193f72e56d7d13f085235012996&query=Kathmandu`;

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);

    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error: ', error);
});

request.end();
