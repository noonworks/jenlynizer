import { IJenlynizer } from './ijenlynizer';
import { Option } from '../option';

export class Jenlynizer implements IJenlynizer {
  private static readonly JENLYNIZED = 'jenlynized';

  private jenlynizing: boolean = false;

  private doJenlynize(): void {
    console.log('jenlynizing!');
  }

  public jenlynize(option: Option): void {
    if (this.jenlynizing) {
      return;
    }
    this.jenlynizing = true;
    this.doJenlynize();
    this.jenlynizing = false;
  }
}
