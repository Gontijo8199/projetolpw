$.ajax({
    url: `https://api.ambr.top/v2/en/reliquary?vh=32F5`,
    dataType: 'json',
    success: resp => {
        let dd = resp.data.items;
        let i3 = 10000;
        let i4 = 14000;
        let i5 = 15000;

        for(;i3 < 10100; i3++){
            if(dd[i3] != undefined){
                let ic = document.createElement('img');
                let link = document.createElement('a');
                $(ic).attr('src', `https://api.ambr.top/assets/UI/reliquary/${dd[i3].icon}.png`);
                $(link).attr('href', 'pag-arts.html');
                $(link).click((e) => {
                    let str = $(e.target).attr('src');
                    let strpr = str.split(/[/.]/)[8].split('_')[2];
                    strpr = parseInt(strpr, 10);
                    console.log(strpr);
                    localStorage.setItem('idart', strpr);
                })

                $(link).append(ic);
                $('body').append(link);
            }
        }
        for(;i4 < 14100; i4++){
            if(dd[i4] != undefined){
                let ic = document.createElement('img');
                let link = document.createElement('a');
                $(ic).attr('src', `https://api.ambr.top/assets/UI/reliquary/${dd[i4].icon}.png`);
                $(link).attr('href', 'pag-arts.html');

                $(link).click((e) => {
                    let str = $(e.target).attr('src');
                    let strpr = str.split(/[/.]/)[8].split('_')[2];
                    strpr = parseInt(strpr, 10);
                    localStorage.setItem('idart', strpr);
                })

                $(link).append(ic);
                $('body').append(link);
            }
        }
        for(;i5 < 15100; i5++){
            if(dd[i5] != undefined){
                let ic = document.createElement('img');
                let link = document.createElement('a');
                $(ic).attr('src', `https://api.ambr.top/assets/UI/reliquary/${dd[i5].icon}.png`); 
                $(link).attr('href', 'pag-arts.html');
                $(link).click((e) => {
                    let str = $(e.target).attr('src');
                    let strpr = str.split(/[/.]/)[8].split('_')[2];
                    strpr = parseInt(strpr, 10);
                    console.log(strpr);
                    localStorage.setItem('idart', strpr);
                })

                $(link).append(ic);
                $('body').append(link); 
            }
        }
    }
})