const fetchWeather = require('./utils/fetchWeather');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address!');
} else {
  fetchWeather(
    address,
    (error, { temperature, feelslike, weather_descriptions }) => {
      if (error) {
        return console.log('Error', error);
      }

      console.log('Weather forecast:', {
        temperature,
        feelslike,
        weather_descriptions,
      });
    }
  );
}
