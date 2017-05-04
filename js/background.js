function saveEnable(e) {
  localStorage.setItem(LS_KEY_EN, e);
}

function readEnable() {
  var str = localStorage.getItem(LS_KEY_EN);
  return (str === 'true');
}

function setIcon(e) {
  chrome.browserAction.setIcon({ path:'img/i96' + (e ? '' : 'off') + '.png' });
}

function iconClicked() {
  enable = !enable;
  saveEnable(enable);
  setIcon(enable);
}

function getOption() {
  var str = localStorage.getItem(LS_KEY);
  if (str) {
    return JSON.parse(str);
  }
  var str = JSON.stringify(DEFAULT_VALUE);
  localStorage.setItem(LS_KEY, str);
  return DEFAULT_VALUE;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == 'getState'){
    sendResponse({enable: enable, jen: getOption()});
  } else {
    sendResponse({});
  }
});

var LS_KEY = 'jenlynizer';
var LS_KEY_EN = LS_KEY + '_enable';
var DEFAULT_VALUE = {
  version: 1,
  name : 'ジェンリンス',
  id : 'jenlyns',
  avater :'https://pbs.twimg.com/media/C--GAqDVoAAiVsY.jpg'
};

var enable = readEnable();
saveEnable(enable);
setIcon(enable);
chrome.browserAction.onClicked.addListener(iconClicked);
