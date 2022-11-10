let btvt = document.querySelector('#btvt');
let btps = document.querySelector("#btps");
let evnt = document.querySelector('#evnts img');

let imgs = [
    "Imagens\Eventos-principais\evnt-1.jpg",
    'Imagens\Eventos-principais\evnt-2.jpg',
    'Imagens\Eventos-principais\evnt-3.jpg',
    'Imagens\Eventos-principais\evnt-4.jpg',
]
let i = 0;

function pas(){
    if(i < (imgs.length-1)){
        i++;
    }
    else{
        i = 0;
    }
    evnt.src = `Imagens/Eventos-principais/evnt-${i+1}.jpg`;
}

btvt.addEventListener('click', function (){
    if(i > 0 && i <= imgs.length){
        i--;
    }
    else{
        i = imgs.length - 1;
    }
    evnt.src = `Imagens/Eventos-principais/evnt-${i+1}.jpg`;
});

btps.addEventListener('click', pas);

setInterval(() => {
    pas();
}, 10000);