function flipVideos() {
    var videos = document.getElementsByTagName("video");

    for (let video of videos) {
        console.log(video.style.transform);

        if(video.style.transform == "rotate(90deg)") video.style.transform = "rotate(180deg)";
        else if(video.style.transform == "rotate(180deg)") video.style.transform = "rotate(270deg)";
        else if(video.style.transform == "rotate(270deg)") video.style.transform = ``;
        else video.style.transform = `rotate(90deg)`;
    }
}

chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse){

    var tab = await getCurrentTab();

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: flipVideos
        });

});

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}
  
