const logger_box = document.getElementById('logger');
let log_message_list = [];
localStorage.setItem('msg_list',  JSON.stringify(log_message_list));
console.log(JSON.parse(localStorage.getItem("msg_list")))

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("received")
    let message_lst;
    if (request.display_log === true) {
        log_message_list.push("succeed with clicking on button...")
        localStorage.setItem('msg_list', JSON.stringify(log_message_list));

        console.log(request.message);
        message_lst = JSON.parse(localStorage.getItem("msg_list"))
        for (const item_index in message_lst) {
            log = document.createElement('p')
            log.textContent = message_lst[item_index]
            logger_box.appendChild(log)
        }
    }
});
