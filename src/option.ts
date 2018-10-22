export interface IOptions {
  version: number;
  name: string;
  id: string;
  avater: string;
}

const DEFAULT_OPTION_VALUES: IOptions = {
  version: 1,
  name: 'ジェンリンス',
  id: 'jenlyns',
  avater: 'https://pbs.twimg.com/media/C--GAqDVoAAiVsY.jpg',
};

export class Option implements IOptions {
  private static readonly LS_KEY = 'jenlynizer';

  public version: number;
  public name: string;
  public id: string;
  public avater: string;

  constructor() {
    this.version = DEFAULT_OPTION_VALUES.version;
    this.name = DEFAULT_OPTION_VALUES.name;
    this.id = DEFAULT_OPTION_VALUES.id;
    this.avater = DEFAULT_OPTION_VALUES.avater;
  }

  public save(): void {
    const str = JSON.stringify(this);
    // console.log(str);
    localStorage.setItem(Option.LS_KEY, str);
  }

  public load(): void {
    const str = localStorage.getItem(Option.LS_KEY);
    if (str) {
      const obj = JSON.parse(str);
      this.version = obj.version;
      this.name = obj.name;
      this.id = obj.id;
      this.avater = obj.avater;
    }
  }
}

export class OptionForm {
  private static readonly ID_NAME: string = 'fullname';
  private static readonly ID_ID: string = 'accountid';
  private static readonly ID_AVATER: string = 'iconUrl';

  private name: HTMLInputElement;
  private id: HTMLInputElement;
  private avater: HTMLInputElement;

  constructor() {
    this.name = document.getElementById(OptionForm.ID_NAME) as HTMLInputElement;
    this.id = document.getElementById(OptionForm.ID_ID) as HTMLInputElement;
    this.avater = document.getElementById(OptionForm.ID_AVATER) as HTMLInputElement;
    const save = document.getElementById('save') as HTMLButtonElement;
    if (!(this.name && this.id && this.avater && save)) {
      if (save) {
        save.disabled = true;
      }
      throw new Error('Can not get input forms.');
    }
    save.addEventListener('click', () => {
      const opt = this.readForm();
      opt.save();
    });
  }

  public readForm(): Option {
    const r = new Option();
    r.name = this.name.value;
    r.id = this.id.value;
    r.avater = this.avater.value;
    return r;
  }

  public apply(opt: Option): void {
    this.name.value = opt.name;
    this.id.value = opt.id;
    this.avater.value = opt.avater;
  }
}
