function randomCheck() {
    const inputs = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
    inputs.forEach(input => {
        // Randomly decide to check or uncheck the input
        const randomBoolean = Math.random() < 0.5;
        if (input.type === "radio" && randomBoolean) {
            // If it's a radio button and we're checking it, uncheck others in the same group
            const name = input.name;
            document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
                radio.checked = false;
            });
        }
        // Randomly check or uncheck
        input.checked = randomBoolean;
    });
}

function randomClickPrimeNGComponents() {
    // Select all PrimeNG checkboxes and radio buttons
    const primeNgCheckboxes = document.querySelectorAll('.p-checkbox');
    const primeNgRadioButtons = document.querySelectorAll('.p-radiobutton');

    // Randomly click checkboxes
    primeNgCheckboxes.forEach(checkbox => {
        if (Math.random() < 0.5) {
            checkbox.click();
        }
    });

    // Handle radio buttons - clicking randomly within each group
    const radioGroups = new Set();
    primeNgRadioButtons.forEach(radio => {
        
                radio.click();
        
    });
}


// Add this at the end of your content_script.js
browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.command === "randomCheck") {
        randomCheck();
        randomClickPrimeNGComponents();
      }
  });
  

// Call the function to randomly check/uncheck inputs
randomCheck();
// Execute the function to randomly click PrimeNG components
randomClickPrimeNGComponents();
