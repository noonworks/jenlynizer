import { Option } from '../option';
import { StateMessage } from '../state_message';

type Callback = (state: State) => void;

export class State {
  private option: Option | null = null;
  private enabled: boolean = false;
  private callback: Callback | null = null;

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

  public setCallback(callback: Callback) {
    this.callback = callback;
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
      if (this.callback) {
        this.callback(this);
      }
    });
  }
}
