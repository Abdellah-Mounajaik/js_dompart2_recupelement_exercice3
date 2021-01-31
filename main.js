let content = document.querySelector("#content")
console.log(content);

let content2 = document.querySelectorAll("#content")[0]
console.log(content2);

let li = document.querySelector(".important")
console.log(li);

let li2 = document.querySelectorAll(".important")
console.log(li2);

let lifinal = Array.from(li2)
lifinal.forEach(element => {
    console.log(element.innerText);
});

let recupere = document.getElementById("content").getElementsByClassName("grandParagraphe")
console.log(recupere);