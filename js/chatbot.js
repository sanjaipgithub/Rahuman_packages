document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".chat-button");
    const messageContainer = document.querySelector(".message-container");
    const closeButton = document.querySelector("#closeButton");
    const loadingAnimation = '<div class="loader"></div>';
    let previousState = null;


    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Hide all buttons
            buttons.forEach((btn) => {
                btn.style.display = "none";
            });

            // Show loading animation
            messageContainer.style.display = "block";
            messageContainer.innerHTML = loadingAnimation;

            // Simulate loading delay (you can adjust the delay time as needed)
            setTimeout(() => {
                const buttonId = button.id;
                const message = getMessageForButton(buttonId);

                // Display the content, close button, and the button container
                messageContainer.innerHTML = `<p>${message}</p>
                <br><button class="close-button" id="closeButton">Close</button>`;
                messageContainer.style.display = "block";

                // Store the previous state for later use
                previousState = messageContainer.innerHTML;
            }, 2000); // Adjust the delay time as needed
        });
    });

    // Handle close button click event
    document.addEventListener("click", (event) => {
        if (event.target.id === "closeButton") {
            // Hide the content and show the buttons again
            messageContainer.style.display = "none";
            buttons.forEach((btn) => {
                btn.style.display = "block";
            });

            // Restore the previous state content
            if (previousState !== null) {
                messageContainer.innerHTML = previousState;
            }
        }
    });


    function getMessageForButton(buttonId) {
        switch (buttonId) {
            case "button1":
                return `<B> ADDRESS : </B> <BR> 5c, Pandit Jawaharlal, Nehru Road, Near Srivilliputtur Railway Station, Srivilliputtur-626125, Tamil Nadu, India <br> <img src= "images/icon_1.png" width = "10%">
                        <a id="contactus id="openMapsButton" href="https://www.google.com/maps/place/Rahuman+Packages/@9.4515857,77.5548763,15z/data=!4m14!1m7!3m6!1s0x3b06e9d395a26bd9:0xf225353516a6d650!2sRahuman+Packages!8m2!3d9.4515857!4d77.5548763!16s%2Fg%2F11fslqy114!3m5!1s0x3b06e9d395a26bd9:0xf225353516a6d650!8m2!3d9.4515857!4d77.5548763!16s%2Fg%2F11fslqy114?entry=ttu" target="_blank">GET DIRECTION</a> `;
            case "button2":
                return ` <B> MOBILE NO : </B> <BR> <img src="images/profile.jpg" width="10%"> MARKETING TEAM <br> <br><img src="images/call_1.png" width= "10%"> <a href="tel:+9443262542 id="phoneNumber" onclick="window.open('tel:9443262542');">Phone: 9443262542</a></p>
         `;

            case "button3":
                return ` <B> EMAIL ID : </B> <BR><img src="images/email.png" width="10%"> rahumanpackages@yahoo.co.in <br> `;
            case "button4":
                return ` <B> WORKING HOURS : </B> <BR> <img src="images/working.png" width="10%"> 9:00 AM to 8:00 PM `;
            default:
                return "";
        }

    }
});



const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get user input
    const input = inputField.value;

    // Clear input field
    inputField.value = '';
    const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: "2-digit"
    });

    // Add user input to conversation
    let message = document.createElement('div');
    message.classList.add('chatbot-message', 'user-message');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
    conversation.appendChild(message);

    // Generate chatbot response
    const response = generateResponse(input);

    // Add chatbot response to conversation
    message = document.createElement('div');
    message.classList.add('chatbot-message', 'chatbot');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
    conversation.appendChild(message);
    message.scrollIntoView({
        behavior: "smooth"
    });
});


function generateResponse(input) {
    // Define an array of responses based on different input patterns
    const responses = [
        "Hello, how can I help you today?",
        "I'm here to assist you. What can I do for you?",
        "Welcome! What's on your mind?",
        "How can I assist you today?",
    ];

    // Check if the input contains specific keywords or patterns
    if (input.toLowerCase().includes("hello")) {
        return "Hello there!";
    } else if (input.toLowerCase().includes("help")) {
        return "Of course, I can help. What do you need assistance with?";
    } else if (input.toLowerCase().includes("bye")) {
        return "Goodbye! If you have more questions, feel free to return anytime.";
    } else if (input.toLowerCase().includes("address" || "location")) {
        return `<B> ADDRESS : </B> <BR> 5c, Pandit Jawaharlal, Nehru Road, Near Srivilliputtur Railway Station, Srivilliputtur-626125, Tamil Nadu, India <br>
                        <a id="contactus id="openMapsButton" href="https://www.google.com/maps/place/Rahuman+Packages/@9.4515857,77.5548763,15z/data=!4m14!1m7!3m6!1s0x3b06e9d395a26bd9:0xf225353516a6d650!2sRahuman+Packages!8m2!3d9.4515857!4d77.5548763!16s%2Fg%2F11fslqy114!3m5!1s0x3b06e9d395a26bd9:0xf225353516a6d650!8m2!3d9.4515857!4d77.5548763!16s%2Fg%2F11fslqy114?entry=ttu" target="_blank">GET DIRECTION</a><br><br> `;
    } else if (input.toLowerCase().includes("mobile" || "contact")) {
        return `<B> MOBILE NO : </B> <BR> <img src="images/profile.jpg" width="10%"> MARKETING TEAM <br> <br><img src="images/call_1.png" width= "10%"> <a href="tel:+9443262542 id="phoneNumber" onclick="window.open('tel:+9443262542');">Phone: +91 94432 62542</a></p><br><br>
        `;
    } else if (input.toLowerCase().includes("mail" || "email")) {
        return ` <B> EMAIL ID : </B> <BR><img src="images/email.png" width="10%"> rahumanpackages@yahoo.co.in <br> <br> `;
    } else if (input.toLowerCase().includes("working hours" || "timing")) {
        return "9 AM to 8 PM ";
    }

    // Return a random response if no specific pattern is matched
    return responses[Math.floor(Math.random() * responses.length)];
}