export function initCart() {
  const cartIcon = document.querySelector('.nav__cart');
  const body = document.body;
  
  // Crear modal de carrito
  const cartModal = document.createElement('div');
  cartModal.classList.add('cart-modal');
  cartModal.innerHTML = `
    <h2>Tu Carrito</h2>
    <div class="cart-items"></div>
    <div class="cart-total">Total: $0</div>
    <button class="cart-close">Cerrar</button>
  `;
  
  cartModal.style.display = 'none';
  body.appendChild(cartModal);

  cartIcon.addEventListener('click', () => {
    cartModal.style.display = cartModal.style.display === 'none' ? 'block' : 'none';
  });

  document.querySelector('.cart-close').addEventListener('click', () => {
    cartModal.style.display = 'none';
  });
}