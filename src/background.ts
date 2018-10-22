import { Option } from './option';

export class Background {
  private static readonly LS_KEY_EN = 'jenlynizer_enable';

  private enabled: boolean = false;
  private option: Option = new Option();

  constractor() {
    this.option.load();
    this.loadEnabled();
  }

  private loadEnabled(): void {
    const str = localStorage.getItem(Background.LS_KEY_EN);
    if (str === null) {
      this.enabled = false;
      this.saveEnabled();
    } else {
      if (str === 'true') {
        this.enabled = true;
      } else if (str === 'false') {
        this.enabled = false;
      } else {
        if (str.toLowerCase() === 'true') {
          this.enabled = true;
        } else {
          this.enabled = false;
        }
        this.saveEnabled();
      }
    }
  }

  private saveEnabled() {
    localStorage.setItem(Background.LS_KEY_EN, this.enabled.toString());
  }

  public getEnabled(): boolean {
    return this.enabled;
  }

  public getOption(): Option {
    return this.option;
  }

  public setIcon() {
    chrome.browserAction.setIcon({ path: `img/i96${this.enabled ? '' : 'off'}.png` });
  }

  public iconClicked() {
    this.enabled = !this.enabled;
    this.saveEnabled();
    this.setIcon();
  }
}
