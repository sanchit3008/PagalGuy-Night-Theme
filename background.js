chrome.tabs.onUpdated.addListener(() =>  {  
    chrome.tabs.insertCSS(null, { file: "dark-mode.css" });
});