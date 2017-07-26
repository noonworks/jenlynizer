function readForm() {
  return {
    version: 1,
    name: document.getElementById('fullname').value,
    id: document.getElementById('accountid').value,
    avater: document.getElementById('iconUrl').value
  };
}

function save() {
  const jen = readForm();
  const str = JSON.stringify(jen);
  //console.log(str);
  localStorage.setItem(LS_KEY, str);
}

function applyForm() {
  const str = localStorage.getItem(LS_KEY);
  const jen = JSON.parse(str);
  document.getElementById('fullname').value = jen.name;
  document.getElementById('accountid').value = jen.id;
  document.getElementById('iconUrl').value = jen.avater;
}

const LS_KEY = 'jenlynizer';

applyForm();
document.getElementById('save').addEventListener('click', save);
