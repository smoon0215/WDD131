import pictures from './gallery.mjs';

// Get the dropdown and image list container
        const yearSelect = document.getElementById("yearSelect");
        const imageList = document.getElementById("image-list");

        // Function to filter images based on the selected year and update the image display
        function updateImages() {
            // Get the selected year
            const selectedYear = yearSelect.value;

            // Filter pictures based on the selected year
            const filteredPictures = pictures.filter(picture => picture.Year === selectedYear);

            // Clear the existing images in the list
            imageList.innerHTML = ' ';

            // Add the filtered images to the list
            filteredPictures.forEach(picture => {
                const listItem = document.createElement('li');
                const imgElement = document.createElement('img');
                imgElement.src = picture.image;
                imgElement.alt = picture.alt;
                listItem.appendChild(imgElement);
                imageList.appendChild(listItem);
            });
        }

        // Initial image display based on default selected year
        updateImages();

        // Add an event listener to update images when the year is changed
        yearSelect.addEventListener("change", updateImages);