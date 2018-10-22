//
// Message listener
//
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == 'getState'){
    sendResponse({enable: getEnable(), option: getOption()});
  } else {
    sendResponse({});
  }
});

//
// Save/Get from local storage
//
const LS_KEY = 'jenlynizer';
const LS_KEY_EN = LS_KEY + '_enable';
let _enable = 'not initialized';

function getEnable() {
  if (typeof(_enable) != 'boolean') {
    const str = localStorage.getItem(LS_KEY_EN);
    _enable = (str === 'true');
  }
  return _enable;
}
function saveEnable(e) {
  _enable = e;
  localStorage.setItem(LS_KEY_EN, _enable);
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
const DEFAULT_VALUE = {
  version: 1,
  name : 'ジェンリンス',
  id : 'jenlyns',
  avater :'https://pbs.twimg.com/media/C--GAqDVoAAiVsY.jpg'
};

//
// Icon functions
//
function setIcon(e) {
  chrome.browserAction.setIcon({ path:'img/i96' + (e ? '' : 'off') + '.png' });
}
function iconClicked() {
  const new_enable = ! getEnable();
  saveEnable(new_enable);
  setIcon(new_enable);
}

//
// Initialization
//
saveEnable(getEnable());
setIcon(getEnable());
chrome.browserAction.onClicked.addListener(iconClicked);
