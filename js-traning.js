const form = document.querySelector(".js-form");
const output = document.querySelector(".output-main");
var numberError = document.querySelector(".numberError");
var contentError = document.querySelector(".contentError");

const data = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let number = +this.elements["number"].value;
  let content = this.elements["content"].value;
  isValidNumber(number);
  isValidContent(content);

  if (!!isValidNumber(number) || !!isValidContent(content)) {
    isValidNumber(number);
    isValidContent(content);
    return;
  }

  let index = null;
  for (let i = 0; i < data.length; i++) {
    if (data[i].number === number) {
      index = String(i);
      break;
    }
  }

  index ? (data[index].content = content) : data.push({ number, content });
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

function isValidNumber(number) {
  if (!number) {
    return (numberError.style.display = "block");
  } else if (number < 1) {
    return (numberError.style.display = "block");
  } else {
    numberError.style.display = "";
    return false;
  }
}

function isValidContent(content) {
  if (content === "") {
    return (contentError.style.display = "block");
  } else {
    contentError.style.display = "";
    return false;
  }
}
