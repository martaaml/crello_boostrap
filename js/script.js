function showContent(itemId) {
    // Ocultar todos los elementos de contenido
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => {
      item.style.display = 'none';
    });

    // Mostrar solo el elemento seleccionado
    const selectedItem = document.getElementById(itemId);
    if (selectedItem) {
      selectedItem.style.display = 'block';
    }
  }

      // Validación de formularios
      (function () {
        'use strict'
        const forms = document.querySelectorAll('.needs-validation')
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    })()

// Asegúrate de que el código se ejecute después de que la página se haya cargado.
window.addEventListener('DOMContentLoaded', (event) => {
    // Precio base por usuario
    const basePrice = 10;
  
    // Referencias a los elementos
    const userSlider = document.getElementById('userSlider');
    const userCount = document.getElementById('userCount');
    const totalCost = document.getElementById('totalCost');
  
    // Función para calcular el costo con descuento
    function calculateDiscountedPrice(users) {
      let pricePerUser = basePrice;
  
      if (users >= 50 && users < 100) {
        pricePerUser = basePrice * 0.9; // 10% de descuento
      } else if (users >= 100 && users < 200) {
        pricePerUser = basePrice * 0.8; // 20% de descuento
      } else if (users >= 200) {
        pricePerUser = basePrice * 0.7; // 30% de descuento
      }
  
      return pricePerUser;
    }
  
    // Función para actualizar los valores
    function updateValues() {
      const users = userSlider.value;
      const pricePerUser = calculateDiscountedPrice(users);
      const total = users * pricePerUser;
  
      userCount.textContent = users;
      totalCost.textContent = total.toFixed(2); // Muestra el total con 2 decimales
    }
  
    // Evento cuando el control deslizante se mueve
    userSlider.addEventListener('input', updateValues);
  
    // Inicializar los valores al cargar la página
    updateValues();
  });

 // Sincroniza el cambio de texto con el carrusel
 document.addEventListener('DOMContentLoaded', function () {
  // Obtener el carrusel y los textos
  const carousel = document.getElementById('carouselExample');
  const textItems = document.querySelectorAll('#text-carousel .carousel-text');
  
  // Sincroniza el cambio de texto con el carrusel
  carousel.addEventListener('slid.bs.carousel', function (event) {
      // Ocultar todos los textos
      textItems.forEach(item => item.classList.remove('active'));
      
      // Mostrar el texto correspondiente a la imagen activa
      textItems[event.to].classList.add('active');
  });
});  