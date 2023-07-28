const btChange = document.querySelector(".item span")
const btn = document.querySelector(".hide span")
const firstScreen = document.querySelector("main > .item")
const secondScreen = document.querySelector("main .item + .item")


btChange.addEventListener("click", changeImage)
btn.addEventListener("click", changeImage)


function changeImage(){
  firstScreen.classList.toggle("hide")
  secondScreen.classList.toggle("hide")
}
