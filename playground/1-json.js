const fs = require('fs');

// const book = {
//   title: 'Kane and Abel',
//   author: 'Jeffrey Archer',
// };

// bookJson = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJson);

// console.log(bookJson);

// const bookParsed = JSON.parse(bookJson);

// console.log(bookParsed);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();

// const data = JSON.parse(dataJSON);

// console.log(dataJSON);

// console.log(data);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

// console.log(data);

data['name'] = 'Gyanas';
data['age'] = 24;

// console.log(data);

const changedJsonData = JSON.stringify(data);

// console.log(changedJsonData);

fs.writeFileSync('1-json.json', changedJsonData);
