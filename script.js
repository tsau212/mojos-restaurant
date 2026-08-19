document.addEventListener("DOMContentLoaded", function () {

    const menuCategories = document.querySelectorAll(".menu-category");
    const menuPanels = document.querySelectorAll(".menu-panel");

    console.log("Menu system loaded");
    console.log("Categories found:", menuCategories.length);
    console.log("Panels found:", menuPanels.length);


    menuCategories.forEach(function (category) {

        category.addEventListener("click", function () {

            console.log("Menu clicked:", category.dataset.category);

            const selectedCategory = category.dataset.category;


            // Remove active from every category
            menuCategories.forEach(function (button) {

                button.classList.remove("active");

            });


            // Remove active from every panel
            menuPanels.forEach(function (panel) {

                panel.classList.remove("active");

            });


            // Activate the clicked category
            category.classList.add("active");


            // Find the matching panel
            const selectedPanel =
                document.getElementById(selectedCategory);


            // Show the matching panel
            if (selectedPanel) {

                selectedPanel.classList.add("active");

            } else {

                console.log(
                    "Could not find panel:",
                    selectedCategory
                );

            }

        });

    });

});