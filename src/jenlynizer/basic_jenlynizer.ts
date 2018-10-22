import { IJenlynizer } from './ijenlynizer';
import { Option } from '../option';

const JENLYNIZED = 'jenlynized';

function ignoreJenlynized(path: string): string {
  return `${path}:not(.${JENLYNIZED})`;
}

function markJenlynized(e: Element) {
  e.classList.add(JENLYNIZED);
}

function select(root: Element, sel: string): NodeListOf<Element> {
  return root.querySelectorAll(ignoreJenlynized(sel));
}

export class Jenlynizer implements IJenlynizer {

  private jenlynizing: boolean = false;

  private jenlynizeTweet(tweet: HTMLElement, option: Option) {
    tweet.querySelectorAll('.fullname').forEach((value) => {
      (value as HTMLElement).innerText = option.name;
    });
    tweet.querySelectorAll('.username').forEach((value) => {
      const n = value.querySelectorAll('b');
      if (n && n.length >= 1) {
        n[0].innerText = option.id;
      }
    });
    tweet.querySelectorAll('.avatar').forEach((value) => {
      (value as HTMLImageElement).src = option.avater;
    });
    // RT
    tweet.querySelectorAll('.js-retweet-text').forEach((value) => {
      const n = value.querySelectorAll('b');
      if (n && n.length >= 1) {
        n[0].innerText = option.name;
      }
    });
    tweet.querySelectorAll('.QuoteTweet-fullname').forEach((value) => {
      (value as HTMLImageElement).innerText = option.name;
    });
    // thread icon
    tweet.querySelectorAll('.avatar--circular').forEach((value) => {
      (value as HTMLImageElement).src = option.avater;
    });
    markJenlynized(tweet);
  }

  private jenlynizeHeaders(body: HTMLElement, option: Option) {
    // home
    select(body, '.DashboardProfileCard-name').forEach((value) => {
      const n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = option.name;
      markJenlynized(value);
    });
    select(body, '.username').forEach((value) => {
      const n = value.querySelectorAll('b');
      if (n && n.length >= 1) n[0].innerText = option.id;
      markJenlynized(value);
    });
    select(body, '.DashboardProfileCard-avatarImage').forEach((value) => {
      (value as HTMLImageElement).src = option.avater;
      markJenlynized(value);
    });
    select(body, '.Avatar').forEach((value) => {
      (value as HTMLImageElement).src = option.avater;
      markJenlynized(value);
    });
    // others home
    select(body, '.ProfileHeaderCard-name').forEach((value) => {
      const n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = option.name;
      markJenlynized(value);
    });
    select(body, '.ProfileAvatar-image').forEach((value) => {
      (value as HTMLImageElement).src = option.avater;
      markJenlynized(value);
    });
    select(body, '.ProfileNameTruncated').forEach((value) => {
      const n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = option.name;
      markJenlynized(value);
    });
    select(body, '.ProfileCardMini-avatarImage').forEach((value) => {
      (value as HTMLImageElement).src = option.avater;
      markJenlynized(value);
    });
    // List
    select(body, '.ListFollowCard-metadata').forEach((value) => {
      const n = value.querySelectorAll('a');
      if (n && n.length >= 1) n[0].innerText = option.name;
      markJenlynized(value);
    });
    select(body, '.avatar').forEach((value) => {
      (value as HTMLImageElement).src = option.avater;
      markJenlynized(value);
    });
    select(body, '.ProfileListItem-avatar').forEach((value) => {
      (value as HTMLImageElement).src = option.avater;
      markJenlynized(value);
    });
    // moment
    select(body, '.MomentUserByline-fullname').forEach((value) => {
      (value as HTMLElement).innerText = option.name;
      markJenlynized(value);
    });
    select(body, '.MomentUserByline-avatar').forEach((value) => {
      (value as HTMLImageElement).src = option.avater;
      markJenlynized(value);
    });
  }

  private jenlynizeProfileCard(card: HTMLElement, option: Option) {
    card.querySelectorAll('.fullname').forEach((value) => {
      (value as HTMLElement).innerText = option.name;
    });
    card.querySelectorAll('.username').forEach((value) => {
      const n = value.querySelectorAll('b');
      if (n && n.length >= 1) {
        n[0].innerText = option.id;
      }
    });
    card.querySelectorAll('.ProfileCard-avatarImage').forEach((value) => {
      (value as HTMLImageElement).src = option.avater;
    });
    markJenlynized(card);
  }

  private static readonly TWEET_SELECTORS = [
    '.tweet',
    '.ActivityItem',
    '.QuoteTweet',
    '.account-summary',
    '.activity-user-profile-content',
    '.typeahead-account-item',
  ];

  private doJenlynize(option: Option): void {
    // console.log('jenlynizing!');
    const body = document.querySelector('body');
    if (!body) { return; }
    this.jenlynizeHeaders(body, option);
    for (const i in Jenlynizer.TWEET_SELECTORS) {
      select(body, Jenlynizer.TWEET_SELECTORS[i]).forEach((element) => {
        this.jenlynizeTweet(element as HTMLElement, option);
      });
    }
    select(body, '.ProfileCard').forEach((value) => {
      this.jenlynizeProfileCard(value as HTMLElement, option);
    });
    select(body, '.user-profile-link').forEach((value) => {
      const n = value.querySelectorAll('b');
      if (n && n.length >= 1) {
        n[0].innerText = option.name;
      } else {
        (value as HTMLElement).innerText = option.name;
      }
      markJenlynized(value);
    });
  }

  public jenlynize(option: Option): void {
    if (this.jenlynizing) {
      return;
    }
    this.jenlynizing = true;
    this.doJenlynize(option);
    this.jenlynizing = false;
  }
}
