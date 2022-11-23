$("#nahida").click((e) => {
    localStorage.setItem('cdper', '10000073');
})
$("#layla").click((e) => {
    localStorage.setItem('cdper', '10000074');
})  
function getCookieName(name) {
    var pair = document.cookie.split('; ').find(x => x.startsWith(name+'='));
    if (pair)
       return pair.split('=')[0]
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
$(document).ready(() => {
    var lg = localStorage.getItem('logged');
    var nome = getCookieName(getCookie("NomeEmUso"));
    let usuario_nome = document.querySelector('#nm_usu');
    usuario_nome.innerHTML=nome;
})