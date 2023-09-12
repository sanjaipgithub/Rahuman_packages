// script.js
document.addEventListener('DOMContentLoaded', function() {
    const popoverButton = document.getElementById('popoverButton');
    const popoverContainer = document.getElementById('popoverContainer');
    const closePopoverButton = document.getElementById('closePopover');

    const popoverButton1 = document.getElementById('popoverButton1');
    const popoverContainer1 = document.getElementById('popoverContainer1');
    const closePopoverButton1 = document.getElementById('closePopover1');

    const popoverButton2 = document.getElementById('popoverButton2');
    const popoverContainer2 = document.getElementById('popoverContainer2');
    const closePopoverButton2 = document.getElementById('closePopover2');

    const popoverButton3 = document.getElementById('popoverButton3');
    const popoverContainer3 = document.getElementById('popoverContainer3');
    const closePopoverButton3 = document.getElementById('closePopover3');
    
    popoverButton.addEventListener('click', function() {
        // Display the popover container when the button is clicked
        popoverContainer.style.display = 'block';
    });

    closePopoverButton.addEventListener('click', function() {
        // Close the popover when the close button is clicked
        popoverContainer.style.display = 'none';
    });
    popoverButton1.addEventListener('click', function() {
        // Display the popover container when the button is clicked
        popoverContainer1.style.display = 'block';
    });

    closePopoverButton1.addEventListener('click', function() {
        // Close the popover when the close button is clicked
        popoverContainer1.style.display = 'none';
    });
    popoverButton2.addEventListener('click', function() {
        // Display the popover container when the button is clicked
        popoverContainer2.style.display = 'block';
    });

    closePopoverButton2.addEventListener('click', function() {
        // Close the popover when the close button is clicked
        popoverContainer2.style.display = 'none';
    });
    popoverButton3.addEventListener('click', function() {
        // Display the popover container when the button is clicked
        popoverContainer3.style.display = 'block';
    });

    closePopoverButton3.addEventListener('click', function() {
        // Close the popover when the close button is clicked
        popoverContainer3.style.display = 'none';
    });
});
