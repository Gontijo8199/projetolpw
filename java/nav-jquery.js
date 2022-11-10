$('#mn').mouseover((e) => {
    $('#mn').css('width', '120px');
   
    $('#icmn').css('height', '50px');
    $('#icmn').css('width', '120px');
   
    $('.opc').css('width', '120px');
    $('.opc').css('min-height', '30px');
   
    $('.opc .oppr').each((e) => {
        $($('.opc .oppr')[e]).html(`Opção -${e+1}-`);
    })
   
    $('.opc .subop').each((el) => {
        $('.opc .subop').css('display', 'flex')
    })
})
$('#mn').mouseout((e) => {
    $('#mn').css('width', '70px');
    
    $('#icmn').css('height', '70px');
    $('#icmn').css('width', '70px');
    
    $('.opc').css('width', '70px');
    $('.opc').css('min-height', '20px');
    
    $('.opc .oppr').each((e) => {
        $($('.opc .oppr')[e]).html(`-${e+1}-`);
    })
    
    $('.opc .subop').each((el) => {
        $('.opc .subop').css('display', 'none');
    })
})