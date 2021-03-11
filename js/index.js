// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;

  const modifiedPrice = Number(price);
  console.log(price,modifiedPrice);
  console.log(quantity);

  const test = product.querySelector('.subtotal span');
  const resultat = quantity * modifiedPrice;

  test.textContent = resultat;

  // let subtotal = document.querySelector('.subtotal span').textContent;
  // document.querySelector('.subtotal span').textContent = quantity * modifiedPrice;
  
  console.log(resultat);

  return resultat;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  products.forEach(product => updateSubtotal(product));
  // end of test
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
