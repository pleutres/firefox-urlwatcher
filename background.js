var options = browser.storage.local.get();
var remoteHostURL = null;
var localFile = null;
var prefix = null;

function loadParameters() {
  browser.storage.local.get().then(function(result) {
    remoteHostURL = result.remoteHost;
    localFile = result.localFile;
    prefix = result.prefix;
    console.log("options remoteHostURL = " + remoteHostURL);
    console.log("options localFile = " + localFile);
    console.log("options prefix = " + prefix);
  }, onError);
}

function onError(error) {
  console.log(`Main Error: ${error}`);
}

function logURL(tabId, changeInfo, tab) {
  if (changeInfo.url != null) {
  	// console.log("Chargement : " + changeInfo.url);
    if (remoteHostURL != null) {
  	var xmlhttp = new XMLHttpRequest();
    	// xmlhttp.onreadystatechange = function() {
      //   console.log("xhr status = " + xmlhttp.status);
      // };
      xmlhttp.open("GET", remoteHostURL + "?p="+prefix+"&u=" + encodeURI(changeInfo.url), true);
      xmlhttp.send();
    }
    
  }
}

loadParameters();

browser.storage.onChanged.addListener(loadParameters)

//console.log("loading");
browser.tabs.onUpdated.addListener(logURL);


//console.log("loaded");