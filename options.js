function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    remoteHost: document.querySelector("#remoteHostURL").value,
    localFile: document.querySelector("#localFile").value,
    prefix: document.querySelector("#prefix").value
  });
}

function restoreOptions() {

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  browser.storage.local.get().then(function(result) {
    document.querySelector("#remoteHostURL").value = result.remoteHost;
    document.querySelector("#localFile").value = result.localFile;
    document.querySelector("#prefix").value = result.prefix;
  }, onError);

}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);