let id = localStorage.getItem('cdper');

$.ajax({
    url: `https://api.ambr.top/v2/en/avatar/${id}?vh=32F2`,
    dataType: 'json',
    success: res => {
        let dd = res.data;
        let nv = 1;
        const lvl = 1;

        $("#nm").html(dd.route);
        $('#imps').attr('src', `https://api.ambr.top/assets/UI/${dd.icon}.png`);

        for(let i = 0; i <= Object.keys(dd.talent).length; i++){
            if(dd.talent[i] != undefined){
                let tl = dd.talent[i];
                let tb = document.createElement('table');
                    let the = document.createElement('thead');
                    let tbd = document.createElement('tbody');
                        let tr1 = document.createElement('tr');
                            let nm = document.createElement('td');
                        let tr2 = document.createElement('tr');
                            let ic = document.createElement('img');                            
                            $(ic).attr('src', `https://api.ambr.top/assets/UI/${tl.icon}.png`);
                            $(nm).html(tl.name);

                        $(tr2).append(ic);
                        $(tr1).append(nm);

                    $(the).append(tr1);
                    $(the).append(tl.description);
                    $(the).append(tr2);
                
                $(tb).append(the);
                
                if(tl.type == '0' || tl.type == '1'){
                    for(let e = 0; e < Object.keys(tl.promote[lvl].description).length; e++){
                        if(tl.promote[lvl].description[e] != ""){
                            let sk = tl.promote[lvl].description[e];
                            let $mu = document.createElement('tr');
                                let $nm = document.createElement('td');
                                let $mult = document.createElement('td');
                                    let $pnm = document.createElement('p');
                                    let $pmult = document.createElement('p');
                            
                            sk = sk.split(/[{}]/);
                            if(sk[0] == '#'){
                                sk[0] = sk[5].split('#')[1]+sk[6];
                                sk[1] = sk[7];
                            }

                                    $($pnm).html(sk[0].split('|')[0]);
                                $nm.appendChild($pnm);
                            $mu.appendChild($nm);
                            
                            let par = sk[1].split(':');
                            let mod = par[1];
                            let idn = parseInt(par[0].split('m')[1], 10);
                            idn--;
                            let obj = tl.promote[lvl].params[idn];
            
                            if(mod == 'F1P'){
                                obj *= 100;
                                obj = Math.round(obj);
                                obj += '%';

                                        $($pmult).html(obj);
                                    $($mult).append($pmult);
                            $mu.appendChild($mult)
                            }
                            if(sk[0] == 'Low/High Plunge DMG|'){
                                let par1 = sk[1].split(':');
                                let par2 = sk[3].split(':');
                                let idn1 = parseInt(par1[0].split('m')[1], 10);
                                let idn2 = parseInt(par2[0].split('m')[1], 10);
                                idn1--;
                                idn2--;
                                let obj = `${Math.round(tl.promote[lvl].params[idn1] * 100)}% / ${Math.round(tl.promote[lvl].params[idn2] * 100)}% `;
                                

                                        $($pmult).html(obj);
                                    $($mult).append($pmult);
                            $mu.appendChild($mult)
                            }
                            else{
                                if(mod == 'F1' && sk[0] != 'Charged Attack Stamina Cost|'){
                                    obj += 's';
                                }
                                else if(mod == 'F2'){
                                    $($pnm).html(`${sk[0].split('|')[1]} - ${sk[0].split('|')[1]}`);
                                    obj *= 10;
                                    obj = Math.round(obj);
                                    obj += 's';
                                }
                                        $($pmult).html(obj);
                                    $($mult).append($pmult);
                            $mu.appendChild($mult)
                            }        
                            
                            $(tbd).append($mu);
                        }
                    }

                }
                if(tl.type == '2'){
                   
                }

                $(tb).append(tbd);
                $('body').append(tb);
            }
        }
    }
})