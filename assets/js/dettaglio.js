$(document).ready(function () {

    if (localStorage.getItem('user')) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    }

    document.getElementById('logout').addEventListener('click', function () {
        localStorage.clear();
        document.getElementById('login').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
    });
    
    if (localStorage.getItem('storage')) {
        let Storage = localStorage.getItem('storage');
        let y = [];
        let i;

        console.log(Storage);

        y = JSON.parse(localStorage.getItem(Storage));
        
        console.log(y);
        for (i = 0; i < y.length; i++) {
        document.getElementById('dettaglio').innerHTML += '<div class="col-md-6 w-100 text-center d-flex justify-content-center"><div><div class="w-100 mb-3"><img src="'+y[i].url+'" class="w-100"></div><h2>'+y[i].modello+'</h2><h2>Prezzo: € '+y[i].prezzo1+'</h2><h2 style="color:red">Prezzo outlet: € '+y[i].prezzo2+'</h2></div></div>';
        }
    }
});

