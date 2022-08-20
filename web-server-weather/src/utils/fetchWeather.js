const request = require('request');

const fetchWeather = (address, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b0840193f72e56d7d13f085235012996&query=${address}`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.error) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      const data = body.current;

      const { temperature, feelslike, weather_descriptions } = data;

      callback(undefined, {
        temperature,
        feelslike,
        weather_descriptions: weather_descriptions[0],
      });
    }
  });
};

module.exports = fetchWeather;
