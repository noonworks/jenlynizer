import { Option, OptionForm } from './option';

try {
  const opt = new Option();
  opt.load();
  const form = new OptionForm();
  form.apply(opt);
} catch (e) {
  const errorP = document.getElementById('error_message') as HTMLParagraphElement;
  if (errorP) {
    errorP.innerText = e.message;
  }
  console.log(e.message);
}
