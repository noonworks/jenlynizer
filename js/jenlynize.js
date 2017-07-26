(function(){
  const JENLYNIZED = 'jenlynized';
  
  function ignoreJenlynized(path) {
    return path + ':not(.' + JENLYNIZED + ')';
  }
  
  function markJenlynized(e) {
    e.classList.add(JENLYNIZED);
  }
  
  function jenlynizeTweet(tweet, jen) {
    for (let value of tweet.querySelectorAll('.fullname')) {
      value.innerText = jen.name;
    }
    for (let value of tweet.querySelectorAll('.username')) {
      const n = value.querySelectorAll('b');
      if (n && n.length >= 1) n[0].innerText = jen.id;
    }
    for (let value of tweet.querySelectorAll('.avatar')) {
      value.src = jen.avater;
    }
    // RT
    for (let value of tweet.querySelectorAll('.js-retweet-text')) {
      const n = value.querySelectorAll('b');
      if (n && n.length >= 1) n[0].innerText = jen.name;
    }
    for (let value of tweet.querySelectorAll('.QuoteTweet-fullname')) {
      value.innerText = jen.name;
    }
    markJenlynized(tweet);
  }
  
  function jenlynizeProfileCard(card, jen) {
    for (let value of card.querySelectorAll('.fullname')) {
      value.innerText = jen.name;
    }
    for (let value of card.querySelectorAll('.username')) {
      const n = value.querySelectorAll('b');
      if (n && n.length >= 1) n[0].innerText = jen.id;
    }
    for (let value of card.querySelectorAll('.ProfileCard-avatarImage')) {
      value.src = jen.avater;
    }
    markJenlynized(card);
  }
  
  function jenlynizeHeaders(body, jen) {
    // home
    for (let value of body.querySelectorAll(ignoreJenlynized('.DashboardProfileCard-name'))) {
      const n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = jen.name;
      markJenlynized(value);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.username'))) {
      const n = value.querySelectorAll('b');
      if (n && n.length >= 1) n[0].innerText = jen.id;
      markJenlynized(value);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.DashboardProfileCard-avatarImage'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.Avatar'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    // others home
    for (let value of body.querySelectorAll(ignoreJenlynized('.ProfileHeaderCard-name'))) {
      const n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = jen.name;
      markJenlynized(value);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.ProfileAvatar-image'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.ProfileNameTruncated'))) {
      const n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = jen.name;
      markJenlynized(value);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.ProfileCardMini-avatarImage'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    // List
    for (let value of body.querySelectorAll(ignoreJenlynized('.ListFollowCard-metadata'))) {
      const n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = jen.name;
      markJenlynized(value);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.avatar'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.ProfileListItem-avatar'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    // moment
    for (let value of body.querySelectorAll(ignoreJenlynized('.MomentUserByline-fullname'))) {
      value.innerText = jen.name;
      markJenlynized(value);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.MomentUserByline-avatar'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
  }
  
  function doJenlynize() {
    const jen = getOption();
    const body = document.querySelector('body');
    jenlynizeHeaders(body, jen);
    for (let value of document.querySelectorAll(ignoreJenlynized('.tweet'))) {
      jenlynizeTweet(value, jen);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.ActivityItem'))) {
      jenlynizeTweet(value, jen);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.QuoteTweet'))) {
      jenlynizeTweet(value, jen);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.account-summary'))) {
      jenlynizeTweet(value, jen);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.activity-user-profile-content'))) {
      jenlynizeTweet(value, jen);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.typeahead-account-item'))) {
      jenlynizeTweet(value, jen);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.ProfileCard'))) {
      jenlynizeProfileCard(value, jen);
    }
    for (let value of body.querySelectorAll(ignoreJenlynized('.user-profile-link'))) {
      const n = value.querySelectorAll('b');
      if (n && n.length >= 1) {
        n[0].innerText = jen.name;
      } else {
        value.innerText = jen.name;
      }
      markJenlynized(value);
    }
  }
  
  //
  // Jenlynize
  //
  let _jenlynizing = false;
  function jenlynize() {
    if (_jenlynizing) return;
    _jenlynizing = true;
    if (getEnable()) doJenlynize();
    _jenlynizing = false;
  }
  
  //
  // Set/Get option values
  //
  let _enable = false;
  function setEnable(enable) {
    _enable = enable;
  }
  function getEnable() {
    return _enable;
  }
  let _option = {};
  function setOption(option) {
    _option = option;
  }
  function getOption() {
    return _option;
  }
  
  //
  // Get options from background (Cycle)
  //
  let intervalID = -1;
  function syncState() {
    chrome.runtime.sendMessage({method: 'getState'}, function(response) {
      if (! response) {
        clearInterval(intervalID);
        intervalID = -1;
        return;
      }
      setOption(response.option);
      setEnable(response.enable);
      // on/off
      const enbl = getEnable();
      if (enbl && intervalID == -1) {
        intervalID = window.setInterval(jenlynize, 100);
      } else if (!enbl && intervalID != -1) {
        clearInterval(intervalID);
        intervalID = -1
      }
    });
  }
  document.addEventListener('DOMContentLoaded', function() { window.setInterval(syncState, 100); });
})();
