const greeter = (name = 'User') => {
  console.log(`Hello ${name}`);
};

greeter('Andrew');

greeter();

// Object destructuring with default function params
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 10,
};

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction('order', product);
