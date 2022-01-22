$(document).ready(function () {
    if (localStorage.getItem('user')) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    }

    document.getElementById('logout').addEventListener('click', function () {
        localStorage.removeItem('user');
        document.getElementById('login').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
    });

    let bottone = document.getElementById('invia');

    bottone.addEventListener('click', function () {
        document.getElementById('nomeAcquisto').value = "";
        document.getElementById('email').value = "";
        document.getElementById('oggetto').value = "";
        document.getElementById('textarea').value = "";
        alert('Messaggio inviato!')
    });
});
