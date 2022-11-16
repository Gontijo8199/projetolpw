let type = [
    'EQUIP_BRACER',
    'EQUIP_DRESS',
    'EQUIP_NECKLACE',
    'EQUIP_RING',
    'EQUIP_SHOES'
]

let id = localStorage.getItem('idart');

$.ajax({
    url: `https://api.ambr.top/v2/EN/reliquary/${id}?vh=32F5`,
    dataType: 'json',
    success: resp => {
        let dd = resp.data;
        
        $('#ic').attr('src', `https://api.ambr.top/assets/UI/reliquary/${dd.icon}.png`);
        $('#nm').html(`<h2>${dd.name}</h2>`);

        $('#nmart').html(dd.suit[type[0]].name);
        $('#descart').html(dd.suit[type[0]].description);

        $('#ic1 img').attr('src', `https://api.ambr.top/assets/UI/reliquary/${dd.suit[type[0]].icon}.png`);
        $('#ic2 img').attr('src', `https://api.ambr.top/assets/UI/reliquary/${dd.suit[type[1]].icon}.png`);
        $('#ic3 img').attr('src', `https://api.ambr.top/assets/UI/reliquary/${dd.suit[type[2]].icon}.png`);
        $('#ic4 img').attr('src', `https://api.ambr.top/assets/UI/reliquary/${dd.suit[type[3]].icon}.png`);
        $('#ic5 img').attr('src', `https://api.ambr.top/assets/UI/reliquary/${dd.suit[type[4]].icon}.png`);

        $('.ics').click((e) => {
            let ind = $('.ics').index(e.currentTarget);
            $('#nmart').html(dd.suit[type[ind]].name);
            $('#descart').html(dd.suit[type[ind]].description);
        })
    }
})