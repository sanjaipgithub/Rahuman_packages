// Function to open WhatsApp with a specific number
function openWhatsApp() {
    // Replace '1234567890' with the phone number you want to open WhatsApp with
    const phoneNumber = '9443262542';

    // Create a WhatsApp URL with the phone number
    const whatsappURL = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp in a new tab or window
    window.open(whatsappURL, '_blank');
}

// Add a click event listener to the button
document.getElementById('whatsappButton').addEventListener('click', openWhatsApp);