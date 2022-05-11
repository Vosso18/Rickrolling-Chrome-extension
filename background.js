var applegateURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"

function applegate(){
  chrome.tabs.create({ url: applegateURL });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    applegate();
});

chrome.tabs.onCreated.addListener(function(tab) {
  if(Math.random() <= 0.01){
    applegate();
  }
});