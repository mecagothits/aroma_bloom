document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const addToCartButtons = document.querySelectorAll(".buy-btn");
    const addToWishlistButtons = document.querySelectorAll(".wishlist-btn");
    const addButton = document.querySelector(".add");
    const subtractButton = document.querySelector(".sub");
    const priceElement = document.querySelector(".price");

    let quantity = 1;
    const pricePerItem = parseFloat(priceElement.textContent.replace("$", ""));

    // Function to update the price based on the quantity
    function updatePrice() {
        const totalPrice = pricePerItem * quantity;
        priceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Event listeners for add and subtract buttons
    addButton.addEventListener("click", () => {
        quantity++;
        updatePrice();
    });

    subtractButton.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            updatePrice();
        }
    });

    // Add event listeners for add to cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener("click", event => {
            const productName = event.target.closest(".product-info")?.querySelector("h1")?.innerText ||
                                event.target.closest(".product-card")?.querySelector("h4")?.innerText;
            if (productName) {
                addToCart(productName);
            }
        });
    });

    // Add event listeners for add to wishlist buttons
    addToWishlistButtons.forEach(button => {
        button.addEventListener("click", event => {
            const productName = event.target.closest(".product-info")?.querySelector("h1")?.innerText ||
                                event.target.closest(".product-card")?.querySelector("h4")?.innerText;
            if (productName) {
                addToWishlist(productName);
            }
        });
    });

    // Function to add product to cart
    function addToCart(productName) {
        alert(`${productName} has been added to your cart! Quantity: ${quantity}`);
        // Here you can add the product to the cart in your backend or local storage
    }

    // Function to add product to wishlist
    function addToWishlist(productName) {
        alert(`${productName} has been added to your wishlist!`);
        // Here you can add the product to the wishlist in your backend or local storage
    }
});