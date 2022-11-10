$("#usu img").click(() => {
    if($("#usu tbody").css('display') == 'block'){
        $("#usu tbody").css('display', 'none');
    }
    else{
        $("#usu tbody").css('display', 'block');
    }
})