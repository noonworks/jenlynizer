function saveEnable(e) {
  localStorage.setItem(LS_KEY_EN, e);
}

function readEnable() {
  const str = localStorage.getItem(LS_KEY_EN);
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
  const str = localStorage.getItem(LS_KEY);
  if (str) {
    return JSON.parse(str);
  }
  const def_str = JSON.stringify(DEFAULT_VALUE);
  localStorage.setItem(LS_KEY, def_str);
  return DEFAULT_VALUE;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == 'getState'){
    sendResponse({enable: enable, jen: getOption()});
  } else {
    sendResponse({});
  }
});

const LS_KEY = 'jenlynizer';
const LS_KEY_EN = LS_KEY + '_enable';
const DEFAULT_VALUE = {
  version: 1,
  name : 'ジェンリンス',
  id : 'jenlyns',
  avater :'https://pbs.twimg.com/media/C--GAqDVoAAiVsY.jpg'
};

let enable = readEnable();
saveEnable(enable);
setIcon(enable);
chrome.browserAction.onClicked.addListener(iconClicked);
