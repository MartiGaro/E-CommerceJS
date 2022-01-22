$(document).ready(function(){

    if (localStorage.getItem('user')) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    }

    document.getElementById('logout').addEventListener('click', function () {
        localStorage.removeItem('user');
        document.getElementById('login').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
    });
    
    var totale=0;
    var y=[];
    var i=0;

    
    y=JSON.parse(localStorage.getItem('unProdotto'));

    for(i=0;i<y.length;i++){
        totale+= parseInt(y[i].prezzo2);
    }
    document.getElementById('prezzo').innerHTML+='€ ' + totale;
});