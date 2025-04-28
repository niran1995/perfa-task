// Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  });

//Gallery Image Popup
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const closeBtn = document.querySelector('.close');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = item.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close when clicking outside the image
  window.addEventListener('click', (e) => {
    if (e.target == lightbox) {
      lightbox.style.display = 'none';
    }
  });


  // Simple Cart System
  let cart = [];

  // Example products (you can add more if needed)
  const products = [
  { name: "Day & Night Blind", price: 120 },
  { name: "Roller Blind", price: 100 },
  { name: "Motorized Blind", price: 250 }
  ];

  // Function to add a product to cart
  function addToCart(index) {
  const product = products[index];
  const existingProduct = cart.find(item => item.name === product.name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
  }

  // Function to remove product from cart
  function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
  }

  // Function to change quantity
  function changeQuantity(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) {
    removeFromCart(index);
  } else {
    renderCart();
  }
  }

  // Function to render cart items
  function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <p>£${item.price} x ${item.quantity}</p>
        <div class="cart-buttons">
          <button onclick="changeQuantity(${index}, 1)">+</button>
          <button onclick="changeQuantity(${index}, -1)">-</button>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      </div>
    `;
  });

  document.getElementById('total').innerText = `Total: £${total}`;
  }

  // Initially render empty cart
  renderCart();



