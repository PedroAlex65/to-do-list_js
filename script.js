const imageMore = document.querySelector(".image-up");
const ul = document.querySelector(".container-task");

function createLi() {
  let loopCreateLi = 1;

  for (let i = 0; i < loopCreateLi; i++) {
    const li = document.createElement("li");
    li.classList.add("task");

    li.innerHTML = `<input placeholder="tittle" class="text" type="text">
    <textarea placeholder="description" name="" class="area" cols="30" rows="4"></textarea>
    <div class='done'>
       <img class='image-checked' src="./src/img/checked.png" alt="">
       <img class='image-delete' src="./src/img/excluir.png" alt="">
    </div>`;

    ul.appendChild(li);

    const imageChecked = li.querySelector(".image-checked");
    const imageDelete = li.querySelector(".image-delete");

    function deleteTask({ target }) {
      const clickLixo = target;
      const searchUl = clickLixo.closest(".task");
      ul.removeChild(searchUl);
    }
    imageDelete.addEventListener("click", deleteTask);

    function handleChecked(event) {
      console.log("Imagem clicada ");

      const h1 = event.currentTarget.closest("li").querySelector(".h1Letter");
      h1.style.textDecoration = "line-through";

      const p = event.currentTarget
        .closest("li")
        .querySelector(".areaTranformEndParagraph");
      p.style.textDecoration = "line-through";
    }
    imageChecked.addEventListener("click", handleChecked);
  }
}

imageMore.addEventListener("click", createLi);

function valueInput(event) {
  const target = event.target;
  if (event.keyCode === 13) {
    if (target.nodeName === "INPUT" && target.type === "text") {
      const inputTesteTwo = event.target.closest("li").querySelector(".text");
      const valueInput = inputTesteTwo.value;
      const TransformText = document.createTextNode(valueInput);
      const h1 = document.createElement("h1");
      h1.classList.add("h1Letter"); // adiciona a classe h1Letter à tag <h1>
      h1.appendChild(TransformText);
      inputTesteTwo.replaceWith(h1);
    }

    if (target.nodeName === "TEXTAREA") {
      const inputTeste = event.target.closest("li").querySelector(".area");
      const valueTextArea = inputTeste.value;
      const texto = document.createTextNode(valueTextArea);
      const p = document.createElement("p");
      p.classList.add("areaTranformEndParagraph");
      p.appendChild(texto);
      inputTeste.replaceWith(p);
    }
  }
}

ul.addEventListener("keyup", valueInput);
