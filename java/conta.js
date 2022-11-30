let char = [];
let esp = [];
let lan = [];
let ESP = [];
let cat = [];
let arq = [];

$('#adcper').click((e) => {
    $('#slcper table').toggle('display');
})
$.ajax({
    url: `https://api.ambr.top/v2/en/avatar?vh=32F3`,
    dataType: 'json',
    success: resp => {
        let pers = resp.data.items;
        $('#slcper table').toggle('display');
        for(let i = 10000002; i < 10000080; i++){
            if(pers[i] != undefined){
                let el = {
                    name: pers[i].name,
                    id: i,
                    weapon: pers[i].weaponType,
                    icon: `https://api.ambr.top/assets/UI/${pers[i].icon}.png`,
                    gacha: `https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${pers[i].icon.split('_')[2]}.png`,
                    rank: pers[i].rank,
                }
                char.push(el);
                let tr = document.createElement('tr');
                $(tr).html(`<img src='${el.icon}' data-id='${el.id}'>`);
                $(tr).click((e) => {
                    $("#gacha").attr('src', `${el.gacha}`);
                })
                $('#slcper table').append(tr);
            }
        }
        let charpLS = JSON.stringify(char);
        localStorage.setItem('chars', charpLS);
    }
})
$.ajax({
    url: `https://api.ambr.top/v2/en/weapon?vh=32F6 `,
    dataType: 'json',
    success: resp => {
        let arm = resp.data.items;
        for(let i = 11100; i < 15600; i++){
            if(arm[i] != undefined){
                let arma = {
                    nome: arm[i].name,
                    icone: `https://api.ambr.top/assets/UI/${arm[i].icon}.png`,
                    id: arm[i].id,
                    rank: arm[i].rank,
                }
                switch(arm[i].type){
                    case 'WEAPON_SWORD_ONE_HAND':   
                        esp.push(arma);
                    case 'WEAPON_CLAYMORE':   
                        ESP.push(arma);
                    case 'WEAPON_POLE':   
                        lan.push(arma);
                    case 'WEAPON_CATALYST':   
                        cat.push(arma);
                    case 'WEAPON_BOW':   
                        arq.push(arma);
                    default:
                        break;
                }
            }
        }
        let espPJSON = JSON.stringify(esp);
        localStorage.setItem('esp', espPJSON);
        
        let arcPJSON = JSON.stringify(arq);
        localStorage.setItem('arc', arcPJSON);
        
        let lanPJSON = JSON.stringify(lan);
        localStorage.setItem('lan', lanPJSON);
        
        let ESPPJSON = JSON.stringify(ESP);
        localStorage.setItem('ESP', ESPPJSON);
        
        let caPJSON = JSON.stringify(cat);
        localStorage.setItem('cat', caPJSON);

        $('img').click((e) => {
            let p = char.filter((o) => {return $(e.target).attr('data-id') == o.id});
            switch($(p).attr('weapon')){
                case 'WEAPON_SWORD_ONE_HAND':
                    $("#arma").attr('src', esp[0].icone)
                case 'WEAPON_CLAYMORE':   
                    $("#arma").attr('src', ESP[0].icone)
                case 'WEAPON_POLE':   
                    $("#arma").attr('src', lan[0].icone)
                case 'WEAPON_CATALYST':   
                    $("#arma").attr('src', cat[0].icone)
                case 'WEAPON_BOW':   
                    $("#arma").attr('src', arq[0].icone)
                default:
                    console.log($(p).attr('weapon')); 
                    break;
        }
        
    })
    }
})
