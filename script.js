const cart = [];

function addToCart(productId) {
  const productElement = document.querySelector(`.product[data-id="${productId}"]`);
  const name = productElement.dataset.name;
  const price = parseFloat(productElement.dataset.price);

  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ id: productId, name, price, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItemsContainer.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    totalPrice += item.price * item.quantity;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <span>₹${(item.price * item.quantity).toFixed(2)}</span>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  totalPriceElement.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert('Thank you for your purchase!');
    cart.length = 0; // Clear the cart
    updateCart();
  }
}



