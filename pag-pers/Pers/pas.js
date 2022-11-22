localStorage.setItem('skms', 1);
$(document).ready(() => {
    let es = localStorage.getItem('skms');
    if(es === 1){
        $('.pag1').css('display', 'table');
        $('.pag2').css('display', 'none');
        $('.pag3').css('display', 'none');
    }
    else if(es === 2){
        $('.pag1').css('display', 'none');
        $('.pag2').css('display', 'table');
        $('.pag3').css('display', 'none');
    }
    else if(es === 3){
        $('.pag1').css('display', 'none');
        $('.pag2').css('display', 'none');
        $('.pag3').css('display', 'table');
    }
})

document.addEventListener('keydown', (e) => {
    let k = e.key;
    es = localStorage.getItem('skms');

    if(k == 'ArrowRight'){
        if(es == 1){
            $('.pag1').css('display', 'none');
            $('.pag2').css('display', 'table');
            localStorage.setItem('skms', 2);
        }
        if(es == 2){
            $('.pag2').css('display', 'none');
            $('.pag3').css('display', 'table');
            localStorage.setItem('skms', 3);
        }
        if(es == 3){
            $('.pag3').css('display', 'none');
            $('.pag1').css('display', 'table');
            localStorage.setItem('skms', 1);
        }
    }
    else if(k == 'ArrowLeft'){
        if(es == 1){
            $('.pag1').css('display', 'none');  
            $('.pag3').css('display', 'table');
            localStorage.setItem('skms', 3);
        }
        if(es == 2){
            $('.pag2').css('display', 'none');
            $('.pag1').css('display', 'table');
            localStorage.setItem('skms', 1);
        }
        if(es == 3){
            $('.pag3').css('display', 'none');
            $('.pag2').css('display', 'table');
            localStorage.setItem('skms', 2);
        }
    }
})