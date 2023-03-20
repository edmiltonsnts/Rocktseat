function toggleMode() {
    const html = document.documentElement

//Metodo mais extenso//
//if(html.classList.contains('light')) {
// html.classList.remove('light')
//   } else {
//{
//html.classList.add('light')
//}
//Metodo mais curto//
html.classList.toggle('light')
}



