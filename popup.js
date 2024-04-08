document.getElementById('randomCheckButton').addEventListener('click', function() {
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {command: "randomCheck"});
    });
    window.close(); // Close the popup after the button is clicked
});