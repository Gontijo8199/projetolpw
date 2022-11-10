let i = 0;

function pas(){
    if(i < 3){
        i++;
    }
    else{
        i = 0;
    }
    $('#evnts img').attr('src', `Imagens/Eventos-principais/evnt-${i+1}.jpg`);
}
$('#btvt').click(() => {
    if(i > 0 && i <= 4){
        i--;
    }
    else{
        i = 3;
    }
    $('#evnts img').attr('src', `Imagens/Eventos-principais/evnt-${i+1}.jpg`);
});

$('#btps').click(pas());

setInterval(() => {
    pas();
}, 10000);