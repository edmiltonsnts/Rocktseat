function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    //Metodo mais extenso//
//if(html.classList.contains('light')) {
// html.classList.remove('light')
//   } else {
//html.classList.add('light')
//}
//pegar a tagn img
const img = document.querySelector("#profile img")
//substituir a imagem 
if (html.classList.contains("light")) {
    //Se tiver light mode, add a imagem 2
    img.setAttribute("src", "./assets/avatar2.png")
} else {
    //Se tiver sem, manter o normal
    img.setAttribute("src", "./assets/avatar.png")
}
}
