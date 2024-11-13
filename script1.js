document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu function
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    // Add event listener to menu icon
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

    // Hide menu when clicking outside
    document.addEventListener('click', (event) => {
        const navLinks = document.querySelector('.nav-links');
        const menuIcon = document.querySelector('.menu-icon');
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Toggle category function
    function toggleCategory(categoryId) {
        const category = document.getElementById(categoryId);
        category.style.display = category.style.display === 'block' ? 'none' : 'block';
    }

    // Add event listeners to service categories
    const serviceCategories = document.querySelectorAll('.service-category');
    serviceCategories.forEach(category => {
        category.addEventListener('mouseover', () => {
            const subcategory = category.querySelector('.subcategory');
            subcategory.style.display = 'block';
        });
        category.addEventListener('mouseout', () => {
            const subcategory = category.querySelector('.subcategory');
            subcategory.style.display = 'none';
        });
        category.addEventListener('click', () => {
            const subcategory = category.querySelector('.subcategory');
            subcategory.style.display = subcategory.style.display === 'block' ? 'none' : 'block';
        });
    });
});
