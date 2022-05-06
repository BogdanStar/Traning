

const form = document.querySelector(".js-form");
const output = document.querySelector(".output");

const data = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const number = this.elements["number"].value;
  const content = this.elements["content"].value;
  data.push({ number, content });
  data.sort((a, b) => a.number - b.number);
  dataCreator();
  this.reset();
});

function dataCreator() {
  const list = data.map((note) => {
    return `<div>${note.number}) ${note.content}</div>`;
  });
  output.innerHTML = list.join("");
}