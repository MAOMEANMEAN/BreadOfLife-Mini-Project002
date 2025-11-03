// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Cart button - navigate to menu page
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            window.location.href = 'menu.html';
        });
    }
    
    // User button - navigate to contact page
    const userBtn = document.getElementById('user-btn');
    if (userBtn) {
        userBtn.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }
});