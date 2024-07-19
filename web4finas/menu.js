
    document.addEventListener('DOMContentLoaded', function() {
      const cart = [];
      const cartItemsContainer = document.getElementById('cart-items');
      const cartTotal = document.getElementById('cart-total');

      function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item';
          listItem.innerHTML = `${item.item} - ${item.price ? `$${item.price}` : 'Recipe Acquired'} <button class="btn btn-danger btn-xs pull-right remove-item" data-index="${index}">&times;</button>`;
          cartItemsContainer.appendChild(listItem);
          if (item.price) {
            total += parseFloat(item.price);
          }
        });
        cartTotal.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
      }

      function addToCart(item, price) {
        cart.push({ item, price });
        updateCart();
        alert(`${item} has been added to your cart.`);
      }

      document.querySelectorAll('.get-recipe').forEach(button => {
        button.addEventListener('click', function() {
          const item = this.getAttribute('data-item');
          addToCart(item, null);
        });
      });

      document.querySelectorAll('.buy-item').forEach(button => {
        button.addEventListener('click', function() {
          const item = this.getAttribute('data-item');
          const price = this.getAttribute('data-price');
          addToCart(item, price);
        });
      });

      cartItemsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-item')) {
          const index = e.target.getAttribute('data-index');
          cart.splice(index, 1);
          updateCart();
        }
      });
    });
  