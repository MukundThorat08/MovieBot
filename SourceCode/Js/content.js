// Author : Mukund Thorat
// version : 1.2
// Description : Automation task

function check_display_value(wait_btn, button_to_click, after_click){
    let interval;
    if (wait_btn != null) {
        let isDisplay_none = window.getComputedStyle(wait_btn).getPropertyValue('display')

        if (isDisplay_none === "none") {

            chrome.runtime.sendMessage({display_log: true});
            localStorage.setItem("current_page", window.location.href)
            button_to_click.click()
            clearInterval(interval)
            if (after_click === true) {
                interval = setInterval(check_display_value, 1000, document.getElementById("lite-end-sora-wait"), document.getElementById("lite-end-sora-button"))

                if (window.location.href !== localStorage.getItem("current_page")) {
                    console.log("error with accessing new page")
                }

            }
        }
    }

}

interval = setInterval(check_display_value, 1000, document.getElementById("lite-human-verif-wait"), document.getElementById("lite-human-verif-button"))
console.log(window.href)
if (window.location.href !== localStorage.getItem("current_page")){
    interval = setInterval(check_display_value, 1000, document.getElementById("lite-start-sora-wait"), document.getElementById("lite-start-sora-button"), true)
    log_message_list = JSON.parse(localStorage.getItem('msg_list'))
}
if (window.location.href !== localStorage.getItem("current_page")){
    if (document.getElementById("btn-secondary")!=null){
        document.getElementById("btn-secondary").click();
    }else if (document.getElementById("btn-danger")!=null){
        document.getElementById("btn-danger").click();
    }else if(document.getElementById("drc")!=null){
        document.getElementById("drc").click();
    }else if(document.querySelector("#cf_captcha > div.card-body > div:nth-child(2) > a.btn.btn-success")!=null){
        document.querySelector("#cf_captcha > div.card-body > div:nth-child(2) > a.btn.btn-success").click()
    }

    if(document.getElementById("dev_button")!=null) {
        document.getElementById("dev_button").click()
    }
    if(document.getElementById("ins")!=null) {
        document.getElementById("ins").click()
    }
    if(document.getElementById("btn-success")!=null) {
        document.getElementById("btn-success").click()
    }
}
