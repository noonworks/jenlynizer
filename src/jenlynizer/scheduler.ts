import { State } from './state';
import { IJenlynizer } from './ijenlynizer';

export class Scheduler {
  private state: State;
  private jenlynizer: IJenlynizer | null = null;
  private intervalID: number = -1;

  constructor() {
    this.state = new State();
    this.state.setCallback((state: State) => { this.setSchedule(state); });
  }

  public setJenlynizer(j: IJenlynizer): void {
    this.jenlynizer = j;
  }

  private stop() {
    clearInterval(this.intervalID);
    this.intervalID = -1;
  }

  public setSchedule(state: State): void {
    const enabled = state.getEnabled();
    if (enabled && this.intervalID === -1) {
      this.intervalID = window.setInterval(() => {
        if (state && this.jenlynizer) {
          const opt = state.getOption();
          if (opt) {
            this.jenlynizer.jenlynize(opt);
          }
        }
      }, 200);
    } else if (!enabled && this.intervalID !== -1) {
      this.stop();
    }
  }
}
