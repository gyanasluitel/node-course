// Object Property Shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: 'Kathmandu',
};

console.log(user);

// Object Destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 10,
};

const { label: productLabel, price, stock, salePrice, rating = 5 } = product;

// console.log(productLabel, price, stock, salePrice, rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
