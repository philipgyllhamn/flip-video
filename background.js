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

// //deprecated
// function AddButtonToVideo(){
//     var videos = document.getElementsByTagName("video");

//     for (let video of videos) {
//         var parent = video.parentNode;
        
//         var div = document.createElement("div");
//         div.innerHTML = "<img style=\"width: 4%; float: right;\" src=\"https://toppng.com/uploads/preview/there-are-2-circular-lines-following-each-other-with-synchronize-icon-11553488932brif00rxqm.png\">";
//         div.style.zIndex = "10000";
//         div.style.fontSize = "-webkit-xxx-large";
//         div.style.position = "absolute";
//         div.style.right = "0";
//         div.style.top = "0";
//         div.className = "FlipVideo_SuperClass";

//         div.onclick = function(){
//             if(video.style.transform == "rotate(90deg)") video.style.transform = "rotate(180deg)";
//             else if(video.style.transform == "rotate(180deg)") video.style.transform = "rotate(270deg)";
//             else if(video.style.transform == "rotate(270deg)") video.style.transform = ``;
//             else video.style.transform = `rotate(90deg)`;
//         }

//         parent.appendChild(div);

//     }
// }

// // deprecated
// chrome.tabs.onUpdated.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tab },
//         function: AddButtonToVideo
//       });
// });

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
  
// deprecated
// function HideOrUnhideButtons(){
//     var controls = document.getElementsByClassName("FlipVideo_SuperClass");

//     for (const control of controls) {
//         control.style.display = "none";
//     }
// }