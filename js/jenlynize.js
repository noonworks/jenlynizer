(function(){
  function ignoreJenlynized(path) {
    return path + ':not(.' + jenlynized + ')';
  }
  
  function jenlynizeTweet(tweet, jen) {
    [].forEach.call(tweet.querySelectorAll('.fullname'), function(value, key) {
      value.innerText = jen.name;
    });
    [].forEach.call(tweet.querySelectorAll('.username'), function(value, key) {
      var n = value.querySelectorAll("b");
      if (n && n.length >= 1) n[0].innerText = jen.id;
    });
    [].forEach.call(tweet.querySelectorAll('.avatar'), function(value, key) {
      value.src = jen.avater;
    });
    // RT
    [].forEach.call(tweet.querySelectorAll('.js-retweet-text'), function(value, key) {
      var n = value.querySelectorAll("b");
      if (n && n.length >= 1) n[0].innerText = jen.name;
    });
    [].forEach.call(tweet.querySelectorAll('.QuoteTweet-fullname'), function(value, key) {
      value.innerText = jen.name;
    });
    tweet.classList.add(jenlynized);
  }
  
  function jenlynizeProfileCard(card, jen) {
    [].forEach.call(card.querySelectorAll('.fullname'), function(value, key) {
      value.innerText = jen.name;
    });
    [].forEach.call(card.querySelectorAll('.username'), function(value, key) {
      var n = value.querySelectorAll("b");
      if (n && n.length >= 1) n[0].innerText = jen.id;
    });
    [].forEach.call(card.querySelectorAll('.ProfileCard-avatarImage'), function(value, key) {
      value.src = jen.avater;
    });
    card.classList.add(jenlynized);
  }
  
  function jenlynizeHeaders(body, jen) {
    // home
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.DashboardProfileCard-name')), function(value, key) {
      var n = value.querySelectorAll("a");
      if (n && n.length >= 1) n[0].innerText = jen.name;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.username')), function(value, key) {
      var n = value.querySelectorAll("b");
      if (n && n.length >= 1) n[0].innerText = jen.id;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.DashboardProfileCard-avatarImage')), function(value, key) {
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.Avatar')), function(value, key) {
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    // others home
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.ProfileHeaderCard-name')), function(value, key) {
      var n = value.querySelectorAll("a");
      if (n && n.length >= 1) n[0].innerText = jen.name;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.ProfileAvatar-image')), function(value, key) {
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.ProfileNameTruncated')), function(value, key) {
      var n = value.querySelectorAll("a");
      if (n && n.length >= 1) n[0].innerText = jen.name;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.ProfileCardMini-avatarImage')), function(value, key) {
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    // List
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.ListFollowCard-metadata')), function(value, key) {
      var n = value.querySelectorAll("a");
      if (n && n.length >= 1) n[0].innerText = jen.name;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.avatar')), function(value, key) {
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.ProfileListItem-avatar')), function(value, key) {
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    // moment
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.MomentUserByline-fullname')), function(value, key) {
      value.innerText = jen.name;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.MomentUserByline-avatar')), function(value, key) {
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
  }
  
  function jenlynize(jen) {
    var body = document.querySelector('body');
    jenlynizeHeaders(body, jen);
    [].forEach.call(document.querySelectorAll(ignoreJenlynized('.tweet')), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.ActivityItem')), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.QuoteTweet')), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.account-summary')), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.activity-user-profile-content')), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.typeahead-account-item')), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.ProfileCard')), function(value, key) {
      jenlynizeProfileCard(value, jen);
    });
    [].forEach.call(body.querySelectorAll(ignoreJenlynized('.user-profile-link')), function(value, key) {
      var n = value.querySelectorAll("b");
      if (n && n.length >= 1) {
        n[0].innerText = jen.name;
      } else {
        value.innerText = jen.name;
      }
      value.classList.add(jenlynized);
    });
  }
  
  function update() {
    if (updating) return;
    updating = true;
    if (enable) jenlynize(jen);
    updating = false;
  }
  
  function syncState() {
    chrome.runtime.sendMessage({method: "getState"}, function(response) {
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
  
  var jenlynized = 'jenlynized';
  var intervalID = -1;
  var updating = false;
  var jen = {};
  var enable = 'dummy';
  document.addEventListener('DOMContentLoaded', initialize);
})();
