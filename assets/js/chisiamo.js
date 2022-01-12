$(document).ready(function(){
    if (localStorage.getItem('user')) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    }

    document.getElementById('logout').addEventListener('click', function () {
        localStorage.clear();
        document.getElementById('login').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
    });
});