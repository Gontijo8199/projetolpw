$.ajax({
    url: `https://api.ambr.top/v2/en/avatar?vh=32F3`,
    dataType: 'json',
    success: resp => {
        let dd = resp.data.items;
        var ind = 10000002;
        
        for(let i = ind; i <= 10000076; i++){
                if(dd[i] != undefined){
                    $('h2').each((e) => {
                        let el = $('h2')[e];
                        let imgel = $('.icper')[e];
                        if($(el).html() == dd[i].name){
                            $(imgel).attr('src', `https://api.ambr.top/assets/UI/${dd[i].icon}.png`);
                        }
                    })
                    
                }
        }
        $('.per').click((e) => {
            let el = e.currentTarget;
            for(let i = ind; i <= 10000076; i++){
                if(dd[i] != undefined){
                    if(dd[i].name == $(el).children('h2').html()){
                        localStorage.setItem('cdper', dd[i].id);
                    }
                }
            }
        })
        
        
        
        
        let tb = document.createElement('table');
                let the = document.createElement('thead');
                let tbd = document.createElement('tbody');
            $(tb).append(the);
            $(tb).append(tbd);

    }
})