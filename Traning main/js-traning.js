

const form = document.querySelector(".js-form");
const output = document.querySelector(".output");
var numError = document.querySelector(".numError");
var textError = document.querySelector(".textError");

const data = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let number = +this.elements["number"].value;
  
   if(!number){
      numError.innerHTML = "введите число";
      return
   }
   else if (number<1){
      numError.innerHTML = "введите целое положительное число";
      return
   }
   else{
      numError.innerHTML = ""; 
   }
  let content = this.elements["content"].value;
   if(content === ""){
      textError.innerHTML = "введите данные";
      return
   }
    let index = null;
    for (let i = 0; i < data.length; i++){
       if (data[i].number === number){
          index = String(i);
          textError.innerHTML = "такое число уже использованно";
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
  textError.innerHTML = "";
}