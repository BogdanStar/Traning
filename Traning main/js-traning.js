

const form = document.querySelector(".js-form");
const output = document.querySelector(".output");

const data = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let number = +this.elements["number"].value;
   if(!number){
      alert("Введите число")
      return
   }
   if (number<1){
      alert ("Введите целое положительное число")
      return
   }
  let content = this.elements["content"].value;
   if(content === ""){
      alert("Введите данные")
      return
   }
    let index = null;
    for (let i = 0; i < data.length; i++){
       if (data[i].number === number){
          index = String(i);
          alert("Нельзя использовать то же число")
          break;
      } 
    }
   // data.push({ number, content });
   index ? data[index].text = text : data.push({ number, content });
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