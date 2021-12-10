var button = document.getElementById("activate")

button.addEventListener("click", function(){
    chrome.runtime.sendMessage({ msg: "flip" });
})
