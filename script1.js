document.addEventListener('DOMContentLoaded', () => {
    // Location finder function
    function findLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        alert("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
    }

    // Add event listener to location finder button
    document.querySelector('.location-finder button').addEventListener('click', findLocation);

    // Toggle category function
    function toggleCategory(categoryId) {
        const category = document.getElementById(categoryId);
        if (category.style.display === "none" || category.style.display === "") {
            category.style.display = "block";
        } else {
            category.style.display = "none";
        }
    }

    // Add event listeners to service categories
    const categories = document.querySelectorAll('.service-category');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const subcategory = category.querySelector('.subcategory');
            if (subcategory.style.display === "none" || subcategory.style.display === "") {
                subcategory.style.display = "block";
            } else {
                subcategory.style.display = "none";
            }
        });
    });
});
