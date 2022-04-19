import "./index.css"

// document.
let contanier= document.querySelector(".contanier")

  let logo = document.querySelector(".logo")
  let img =  document.createElement("img")
    img.src = "https://logos.textgiraffe.com/logos/logo-name/Ritik-designstyle-smoothie-m.png"
    logo.append(img)
  let btn = document.querySelector("button").addEventListener("click", submit)

 function submit(){
    let input = document.querySelector("input").value
    console.log(input)
    let h3 = document.createElement("h3")
    h3.innerText = input
    h3.id="ritik"
  
  let showtext= document.querySelector(".showtext")
  showtext.append(h3)

 }


contanier.append(logo,showtext)

