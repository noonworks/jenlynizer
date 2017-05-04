(function(){
  function jenlynizeTweet(tweet, jen) {
    if (tweet.classList.contains(jenlynized)) return;
    [].forEach.call(tweet.getElementsByClassName('fullname'), function(value, key) {
      value.innerText = jen.name;
    });
    [].forEach.call(tweet.getElementsByClassName('username'), function(value, key) {
      var n = value.getElementsByTagName("b");
      if (n && n.length >= 1) n[0].innerText = jen.id;
    });
    [].forEach.call(tweet.getElementsByClassName('avatar'), function(value, key) {
      value.src = jen.avater;
    });
    // RT
    [].forEach.call(tweet.getElementsByClassName('js-retweet-text'), function(value, key) {
      var n = value.getElementsByTagName("b");
      if (n && n.length >= 1) n[0].innerText = jen.name;
    });
    [].forEach.call(tweet.getElementsByClassName('QuoteTweet-fullname'), function(value, key) {
      value.innerText = jen.name;
    });
    tweet.classList.add(jenlynized);
  }
  
  function jenlynizeProfileCard(card, jen) {
    if (card.classList.contains(jenlynized)) return;
    [].forEach.call(card.getElementsByClassName('fullname'), function(value, key) {
      value.innerText = jen.name;
    });
    [].forEach.call(card.getElementsByClassName('username'), function(value, key) {
      var n = value.getElementsByTagName("b");
      if (n && n.length >= 1) n[0].innerText = jen.id;
    });
    [].forEach.call(card.getElementsByClassName('ProfileCard-avatarImage'), function(value, key) {
      value.src = jen.avater;
    });
    card.classList.add(jenlynized);
  }
  
  function jenlynizeHeaders(body, jen) {
    // home
    [].forEach.call(body.getElementsByClassName('DashboardProfileCard-name'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      var n = value.getElementsByTagName("a");
      if (n && n.length >= 1) n[0].innerText = jen.name;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.getElementsByClassName('username'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      var n = value.getElementsByTagName("b");
      if (n && n.length >= 1) n[0].innerText = jen.id;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.getElementsByClassName('DashboardProfileCard-avatarImage'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.getElementsByClassName('Avatar'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    // others home
    [].forEach.call(body.getElementsByClassName('ProfileHeaderCard-name'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      var n = value.getElementsByTagName("a");
      if (n && n.length >= 1) n[0].innerText = jen.name;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.getElementsByClassName('ProfileAvatar-image'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.getElementsByClassName('ProfileNameTruncated'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      var n = value.getElementsByTagName("a");
      if (n && n.length >= 1) n[0].innerText = jen.name;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.getElementsByClassName('ProfileCardMini-avatarImage'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    // List
    [].forEach.call(body.getElementsByClassName('ListFollowCard-metadata'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      var n = value.getElementsByTagName("a");
      if (n && n.length >= 1) n[0].innerText = jen.name;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.getElementsByClassName('avatar'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.getElementsByClassName('ProfileListItem-avatar'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
    // moment
    [].forEach.call(body.getElementsByClassName('MomentUserByline-fullname'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      value.innerText = jen.name;
      value.classList.add(jenlynized);
    });
    [].forEach.call(body.getElementsByClassName('MomentUserByline-avatar'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      value.src = jen.avater;
      value.classList.add(jenlynized);
    });
  }
  
  function jenlynize(jen) {
    var body = document.querySelector('body');
    jenlynizeHeaders(body, jen);
    [].forEach.call(body.getElementsByClassName('tweet'), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.getElementsByClassName('ActivityItem'), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.getElementsByClassName('QuoteTweet'), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.getElementsByClassName('account-summary'), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.getElementsByClassName('activity-user-profile-content'), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.getElementsByClassName('typeahead-account-item'), function(value, key) {
      jenlynizeTweet(value, jen);
    });
    [].forEach.call(body.getElementsByClassName('ProfileCard'), function(value, key) {
      jenlynizeProfileCard(value, jen);
    });
    [].forEach.call(body.getElementsByClassName('user-profile-link'), function(value, key) {
      if (value.classList.contains(jenlynized)) return;
      var n = value.getElementsByTagName("b");
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
