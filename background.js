window.onload = function(){
  let url = location.href;
  window.addEventListener('keydown',function(e){
    if(event.ctrlKey && !event.shiftKey){
      if(e.keyCode >= 48 && e.keyCode <= 57){
        chrome.storage.local.get(null, function(data){});
        let key = url + `________${e.keyCode-48}`;
        chrome.storage.local.set({[key]: window.pageYOffset}, function(){});
      }
    }
    else if(event.shiftKey){
      if(e.keyCode >= 48 && e.keyCode <= 57){
        let key = url + `________${e.keyCode-48}`;
        chrome.storage.local.get([key], function(data){
          window.scroll(0, data[key]);
        });
      }
    }
  });
}
