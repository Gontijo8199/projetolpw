localStorage.setItem('logged', 'false');
$('#sa').click(() => {
    localStorage.setItem('logged', 'ghest');
    window.location.href = 'index.html';
})