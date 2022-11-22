$("#nahida").click((e) => {
    localStorage.setItem('cdper', '10000073');
})
$("#layla").click((e) => {
    localStorage.setItem('cdper', '10000074');
})  
$(document).ready(() => {
    var lg = localStorage.getItem('logged');
    if(lg === 'false'){
        window.location.href = 'login.html';
    }
})