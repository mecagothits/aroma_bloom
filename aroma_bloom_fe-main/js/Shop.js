document.addEventListener('DOMContentLoaded', () => {
    const applyFiltersButton = document.getElementById('apply-filters');
    const filterForm = document.getElementById('filter-form');
    const productCards = document.querySelectorAll('.product-card');

    applyFiltersButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Get selected filter values
        const selectedAromaLevels = [...filterForm.querySelectorAll('input[name="aroma-level"]:checked')].map(input => input.value);
        const selectedAromaTypes = [...filterForm.querySelectorAll('input[name="aroma-type"]:checked')].map(input => input.value);
        const selectedPrice = filterForm.querySelector('input[name="price"]:checked')?.value;

        productCards.forEach(card => {
            const aromaLevel = card.dataset.aromaLevel;
            const aromaType = card.dataset.aromaType;
            const price = parseFloat(card.dataset.price);

            let matchesAromaLevel = selectedAromaLevels.length === 0 || selectedAromaLevels.includes(aromaLevel);
            let matchesAromaType = selectedAromaTypes.length === 0 || selectedAromaTypes.includes(aromaType);
            let matchesPrice = !selectedPrice || 
                (selectedPrice === 'low' && price < 30) || 
                (selectedPrice === 'mid' && price >= 30 && price <= 40) || 
                (selectedPrice === 'high' && price > 40);

            if (matchesAromaLevel && matchesAromaType && matchesPrice) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});