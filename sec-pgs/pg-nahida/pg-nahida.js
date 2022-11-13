$.ajax({
    url: 'https://api.ambr.top/v2/en/avatar/10000002?vh=32F2',
    dataType: 'json',
    success: res => {
        let dd = res.data;
        let i = 1;

        $("#nm").html(dd.route);
        $('#imps').attr('src', `https://api.ambr.top/assets/UI/${dd.icon}.png`)

        let natk = dd.talent[0];
        let $e = dd.talent[1];
        let ult = dd.talent[2];
        let p1 = dd.talent[4];
        let p2 = dd.talent[5];
        let p3 = dd.talent[6];

        //atks normais
        $('#icn_natk').attr('src',`https://api.ambr.top/assets/UI/${natk.icon}.png`);
        $('#nm_natk').html(natk.name)
        $('#desc_natk').html(natk.description.replace(/\n/, "<br>"));

        $(natk.promote[i].description).each((e) => {
            if(natk.promote[i].description[e] != ""){
                let $mu = document.createElement('tr');
                $('#natk_t tbody').append($mu);
                    let $nm = document.createElement('td');
                    let $mult = document.createElement('td');
                        let $pnm = document.createElement('p');
                        let $pmult = document.createElement('p');
            
                let sk = natk.promote[i].description[e];
                sk = sk.split(/[{}]/);

                        $($pnm).html(sk[0].split('|')[0]);
                    $nm.appendChild($pnm);
                $mu.appendChild($nm);
                
                let par = sk[1].split(':');
                let mod = par[1];
                let idn = parseInt(par[0].split('m')[1], 10);
                idn--;
                let obj = natk.promote[i].params[idn];

                if(mod == 'F1P'){
                    obj *= 100;
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
                    let obj = `${natk.promote[i].params[idn1] * 100}% || ${natk.promote[i].params[idn2] * 100}% `;

                            $($pmult).html(obj);
                        $($mult).append($pmult);
                $mu.appendChild($mult)
                }
                else{
                            $($pmult).html(obj);
                        $($mult).append($pmult);
                $mu.appendChild($mult)
                }
            }
        })
        // Fim atks normais

        // Habilidade Elemental
        $('#icn_e').attr('src',`https://api.ambr.top/assets/UI/${$e.icon}.png`);
        $('#nm_e').html($e.name);
        $('#desc_e').html($e.description);

        $($e.promote[i].description).each((e) => {
            if($e.promote[i].description[e] != ""){
                let $mu = document.createElement('tr');
                $('#e_t tbody').append($mu);
                    let $nm = document.createElement('td');
                    let $mult = document.createElement('td');
                        let $pnm = document.createElement('p');
                        let $pmult = document.createElement('p');
            
                let sk = $e.promote[i].description[e];
                sk = sk.split(/[{}]/);
                if(sk[0] == '#'){
                    sk[0] = sk[5].split('#')[1]+sk[6];
                    sk[1] = sk[7];
                }
                        $($pnm).html(sk[0].split('|')[0]);
                    $nm.appendChild($pnm);
                $('#e_t tbody tr')[e].append($nm);
                
                let par = sk[1].split(':');
                let mod = par[1];
                let idn = parseInt(par[0].split('m')[1], 10);
                idn--;
                let obj = $e.promote[i].params[idn];

                if(mod == 'F1P'){
                    obj *= 100;
                    obj += '%';
                            $($pmult).html(obj);
                        $($mult).append($pmult);
                $('#e_t tbody tr')[e].append($mult);
                }
                else if(sk.lenght > 2){
                    let par1 = sk[1].split(':');
                    let par2 = sk[3].split(':');
                    let idn1 = parseInt(par1[0].split('m')[1], 10);
                    let idn2 = parseInt(par2[0].split('m')[1], 10);
                    idn1--;
                    idn2--;
                    let obj = `${e.promote[i].params[idn1] * 100}% || ${e.promote[i].params[idn2] * 100}% `;

                            $($pmult).html(obj);
                        $($mult).append($pmult);
                    $('#e_t tbody tr')[e].append($mult);
                }
                else{
                        $($pmult).html(obj);
                    $($mult).append($pmult);
                $('#e_t tbody tr')[e].append($mult);
                }
            }
        })
        // Fim Habilidade Elemental
        // Ult
        $('#icn_ult').attr('src',`https://api.ambr.top/assets/UI/${ult.icon}.png`);
        $('#nm_ult').html(ult.name);
        $('#desc_ult').html(ult.description);

        $(ult.promote[i].description).each((e) => {
            if(ult.promote[i].description[e] != ""){
                let $mu = document.createElement('tr');
                $('#ult_t tbody').append($mu);
                    let $nm = document.createElement('td');
                    let $mult = document.createElement('td');
                        let $pnm = document.createElement('p');
                        let $pmult = document.createElement('p');
            
                let sk = ult.promote[i].description[e];
                sk = sk.split(/[{}]/);
                if(sk[0] == '#'){
                    sk[0] = sk[5].split('#')[1]+sk[6];
                    sk[1] = sk[7];
                }
                        $($pnm).html(sk[0].split('|')[0]);
                    $nm.appendChild($pnm);
                $('#ult_t tbody tr')[e].append($nm);
                
                let par = sk[1].split(':');
                let mod = par[1];
                let idn = parseInt(par[0].split('m')[1], 10);
                idn--;
                let obj = ult.promote[i].params[idn];

                if(mod == 'F1P'){
                    obj *= 100;
                    obj += '%';
                            $($pmult).html(obj);
                        $($mult).append($pmult);
                $('#ult_t tbody tr')[e].append($mult);
                }
                else if(sk.lenght > 2){
                    let par1 = sk[1].split(':');
                    let par2 = sk[3].split(':');
                    let idn1 = parseInt(par1[0].split('m')[1], 10);
                    let idn2 = parseInt(par2[0].split('m')[1], 10);
                    idn1--;
                    idn2--;
                    let obj = `${e.promote[i].params[idn1] * 100}% || ${ult.promote[i].params[idn2] * 100}% `;

                            $($pmult).html(obj);
                        $($mult).append($pmult);
                    $('#ult_t tbody tr')[e].append($mult);
                }
                else{
                        $($pmult).html(obj);
                    $($mult).append($pmult);
                $('#ult_t tbody tr')[e].append($mult);
                }
            }
        })
        // Fim Ult
  }
})