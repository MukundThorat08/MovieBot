// Listen for messages from content.js
console.log("server")
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Forward the message to the popup.js script
    console.log("sended to popup")
    chrome.runtime.sendMessage({ display_log: true });

});
