console.log('Client side JS file is used');

const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');
const messageOne = document.getElementById('message-one');
const messageTwo = document.getElementById('message-two');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const location = searchInput.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  fetch(`/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageOne.textContent = `${data.error}!`;
      } else {
        messageOne.textContent = `The location is: ${data.location}.`;
        messageTwo.textContent = `The temperature is: ${data.temperature} degree Celsius.`;
      }
    });
  });
});
