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

    if (localStorage.getItem('user')) {
        let Nome = localStorage.getItem('user');
        var y = [];
        let i;

        document.getElementById('vuoto').style.display = 'none';
        document.getElementById('benvenuto').innerHTML = "Carrello di " + Nome + '<br><button type="button" class="btn btn-danger m-3 "id="acquistaTutto">Acquista tutto!</button>';
        y = JSON.parse(localStorage.getItem(Nome));
        for (i = 0; i < y.length; i++) {
            document.getElementById('contenitore').innerHTML += '<div class="col-md-4 text-center"><div><div class="w-100 mb-3"><img src="' + y[i].url + '" class="w-100"></div><h6>' + y[i].modello + '</h6><h6>Prezzo: € ' + y[i].prezzo1 + '</h6><h6 style="color:red">Prezzo outlet: € ' + y[i].prezzo2 + '</h6></div><div class="d-flex flex-row p-3 justify-content-center"><button id="' + y[i].modello + '" class="btn btn-danger w25 mr-1">Acquista</button><button class="btn btn-light text-danger w25 ml-1">Rimuovi</button></div></div>';
        }
    }

    $(document).on('click', '#contenitore button', function () {
        let id = this.getAttribute('id');
        var x = [];

        for (i = 0; i < y.length; i++) {
            if (id == y[i].modello) {
                x[0] = y[i];
                localStorage.setItem('unProdotto', JSON.stringify(x));
                location.href = 'pagamento.html';
            }
        }
    });

    $(document).on('click', '#acquistaTutto', function () {
        localStorage.setItem('unProdotto', JSON.stringify(y));
        location.href = 'pagamento.html';
    });
});