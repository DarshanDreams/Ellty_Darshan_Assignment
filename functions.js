
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle hover and click for bars
    function handleBarHoverAndClick(bar, checkbox) {
        bar.addEventListener("mouseover", function() {
            if (checkbox.checked) {
                checkbox.style.backgroundColor = "lightblue";
                checkbox.style.border = "1px solid lightblue";
                checkbox.style.color = "white";
            } else {
                checkbox.style.border = "1px solid grey";
                checkbox.style.color = "grey";
            }
        });

        bar.addEventListener("mouseout", function() {
            if (checkbox.checked) {
                checkbox.style.backgroundColor = "blue";
                checkbox.style.border = "1px solid blue";
                checkbox.style.color = "white";
            } else {
                checkbox.style.backgroundColor = "#fff";
                checkbox.style.border = "1px solid #ccc";
                checkbox.style.color = "transparent";
            }
        });

        bar.addEventListener("click", function() {
            checkbox.checked = !checkbox.checked;
            if (checkbox.checked) {
                checkbox.style.backgroundColor = "blue";
                checkbox.style.border = "1px solid blue";
                checkbox.style.color = "white";
            } else {
                checkbox.style.backgroundColor = "#fff";
                checkbox.style.border = "1px solid #ccc";
                checkbox.style.color = "transparent";
            }
        });
    }

    // All Pages bar
    const allPagesBar = document.getElementById("all-pages-bar");
    const allPagesCheckbox = document.getElementById("all-pages-checkbox");
    handleBarHoverAndClick(allPagesBar, allPagesCheckbox);

    // Page No. bars
    const pageBars = document.querySelectorAll(".page");
    pageBars.forEach(pageBar => {
        const checkbox = pageBar.querySelector("input[type='checkbox']");
        handleBarHoverAndClick(pageBar, checkbox);
    });
});
