$('button').click((e) => {
    let $p = $(e.target).closest('p');
    $p.innerHTML = e.target.innerHTML;
})