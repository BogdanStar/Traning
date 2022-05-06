

const form = document.querySelector(".js-form");
const output = document.querySelector(".output");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const number = this.elements["number"];
  const content = this.elements["content"];
  dataCreator(number.value, content.value);
  this.reset();
});

function dataCreator(number, content) {
  const data = document.createElement("div");

  data.innerHTML = `${number}) ${content}`;
  output.appendChild(data);
}