export function initNewsletter() {
  const form = document.querySelector('.newsletter__form');
  const input = document.querySelector('.newsletter__input');
  const subscribeBtn = form.querySelector('.button');
  
  subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    
    if (!email) {
      alert('Por favor ingresa un email');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor ingresa un email válido');
      return;
    }
    
    alert(`Gracias por suscribirte con ${email}`);
    input.value = '';
  });
}