import { Option } from '../option';
import { StateMessage } from '../state_message';

export class State {
  private option: Option | null = null;
  private enabled: boolean = false;

  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      window.setInterval(() => { this.sync(); }, 500);
    });
  }

  public getOption(): Option | null {
    return this.option;
  }

  public getEnabled(): boolean {
    return this.enabled;
  }

  private sync(): void {
    chrome.runtime.sendMessage({ method: 'getState' }, (response: StateMessage) => {
      if (!response) {
        this.enabled = false;
        return;
      }
      this.option = response.option;
      this.enabled = response.enable;
      // console.log('get state. ', response);
    });
  }
}
