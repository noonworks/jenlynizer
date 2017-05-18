(function(){
  const JENLYNIZED = 'jenlynized';
  
  function ignoreJenlynized(path) {
    return path + ':not(.' + JENLYNIZED + ')';
  }
  
  function markJenlynized(e) {
    e.classList.add(JENLYNIZED);
  }
  
  function jenlynizeTweet(tweet, jen) {
    for (var value of tweet.querySelectorAll('.fullname')) {
      value.innerText = jen.name;
    }
    for (var value of tweet.querySelectorAll('.username')) {
      var n = value.querySelectorAll('b');
      if (n && n.length >= 1) n[0].innerText = jen.id;
    }
    for (var value of tweet.querySelectorAll('.avatar')) {
      value.src = jen.avater;
    }
    // RT
    for (var value of tweet.querySelectorAll('.js-retweet-text')) {
      var n = value.querySelectorAll('b');
      if (n && n.length >= 1) n[0].innerText = jen.name;
    }
    for (var value of tweet.querySelectorAll('.QuoteTweet-fullname')) {
      value.innerText = jen.name;
    }
    markJenlynized(tweet);
  }
  
  function jenlynizeProfileCard(card, jen) {
    for (var value of card.querySelectorAll('.fullname')) {
      value.innerText = jen.name;
    }
    for (var value of card.querySelectorAll('.username')) {
      var n = value.querySelectorAll('b');
      if (n && n.length >= 1) n[0].innerText = jen.id;
    }
    for (var value of card.querySelectorAll('.ProfileCard-avatarImage')) {
      value.src = jen.avater;
    }
    markJenlynized(card);
  }
  
  function jenlynizeHeaders(body, jen) {
    // home
    for (var value of body.querySelectorAll(ignoreJenlynized('.DashboardProfileCard-name'))) {
      var n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = jen.name;
      markJenlynized(value);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.username'))) {
      var n = value.querySelectorAll('b');
      if (n && n.length >= 1) n[0].innerText = jen.id;
      markJenlynized(value);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.DashboardProfileCard-avatarImage'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.Avatar'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    // others home
    for (var value of body.querySelectorAll(ignoreJenlynized('.ProfileHeaderCard-name'))) {
      var n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = jen.name;
      markJenlynized(value);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.ProfileAvatar-image'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.ProfileNameTruncated'))) {
      var n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = jen.name;
      markJenlynized(value);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.ProfileCardMini-avatarImage'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    // List
    for (var value of body.querySelectorAll(ignoreJenlynized('.ListFollowCard-metadata'))) {
      var n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = jen.name;
      markJenlynized(value);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.avatar'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.ProfileListItem-avatar'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
    // moment
    for (var value of body.querySelectorAll(ignoreJenlynized('.MomentUserByline-fullname'))) {
      value.innerText = jen.name;
      markJenlynized(value);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.MomentUserByline-avatar'))) {
      value.src = jen.avater;
      markJenlynized(value);
    }
  }
  
  function jenlynize(jen) {
    var body = document.querySelector('body');
    jenlynizeHeaders(body, jen);
    for (var value of document.querySelectorAll(ignoreJenlynized('.tweet'))) {
      jenlynizeTweet(value, jen);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.ActivityItem'))) {
      jenlynizeTweet(value, jen);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.QuoteTweet'))) {
      jenlynizeTweet(value, jen);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.account-summary'))) {
      jenlynizeTweet(value, jen);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.activity-user-profile-content'))) {
      jenlynizeTweet(value, jen);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.typeahead-account-item'))) {
      jenlynizeTweet(value, jen);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.ProfileCard'))) {
      jenlynizeProfileCard(value, jen);
    }
    for (var value of body.querySelectorAll(ignoreJenlynized('.user-profile-link'))) {
      var n = value.querySelectorAll('b');
      if (n && n.length >= 1) {
        n[0].innerText = jen.name;
      } else {
        value.innerText = jen.name;
      }
      markJenlynized(value);
    }
  }
  
  function update() {
    if (updating) return;
    updating = true;
    if (enable) jenlynize(jen);
    updating = false;
  }
  
  function syncState() {
    chrome.runtime.sendMessage({method: 'getState'}, function(response) {
      // options
      jen = response.jen;
      // on/off
      enable = response.enable;
      if (enable && intervalID == -1) {
        intervalID = window.setInterval(update, 100);
      } else if (!enable && intervalID != -1) {
        clearInterval(intervalID);
        intervalID = -1
      }
    });
  }
  
  function initialize() {
    window.setInterval(syncState, 100);
  }
  
  var intervalID = -1;
  var updating = false;
  var jen = {};
  var enable = 'dummy';
  document.addEventListener('DOMContentLoaded', initialize);
})();
