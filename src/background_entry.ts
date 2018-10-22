import { Background } from './background';

//
// Initialization
//
const bg = new Background();
bg.setIcon();

//
// On icon clicked
//
chrome.browserAction.onClicked.addListener(() => { bg.iconClicked(); });

//
// On message
//
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.method === 'getState') {
    sendResponse({ enable: bg.getEnabled(), option: bg.getOption() });
  } else {
    sendResponse({});
  }
});
