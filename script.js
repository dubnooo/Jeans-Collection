// --- КЕРУВАННЯ КОШИКОМ ---

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    cart.push({ name: name, price: price });
    localStorage.setItem('eloriaCart', JSON.stringify(cart));
    
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// --- АНІМАЦІЇ СЕРДЕЧОК ---

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Оновлюємо цифру при завантаженні

    document.querySelectorAll('.product-heart').forEach(heart => {
        heart.addEventListener('click', function () {
            this.classList.toggle('liked');
            this.style.transform = 'scale(1.5)';
            setTimeout(() => {
                this.style.transform = this.classList.contains('liked') ? 'scale(1.2)' : 'scale(1)';
            }, 200);
        });
    });

    const mainHeart = document.querySelector('header .heart');
    if (mainHeart) {
        mainHeart.addEventListener('click', function () {
            this.style.transform = 'scale(1.4)';
            setTimeout(() => this.style.transform = 'scale(1)', 300);
        });
    }
});
