import { prodotti } from './classe.js';

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
    
    let lista = [];
    let i;
    caricaLista();

    function caricaLista() {
        $.ajax({
            url: 'assets/js/prodotti.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (i, el) {
                    let id = el.id;
                    let modello = el.modello;
                    let categoria = el.categoria;
                    let prezzo1 = el.prezzo1;
                    let prezzo2 = el.prezzo2;
                    let url = el.url;
                    let capo = new prodotti(id, modello, categoria, prezzo1, prezzo2, url);

                    lista.push(capo);
                });
                stampaLista();
            }
        });
    }


    function stampaLista() {
        document.getElementById('contenitore').innerHTML = '';

        for (i = 0; i < lista.length; i++) {
            lista[i].stampaElemento(document.getElementById('contenitore'));
        }
    }

    $(document).on('click', '#menuCategoria a', function () {
        let titoloCategoria = $(this).html();
        $('#titoloCategoria').html(titoloCategoria);
        document.getElementById('contenitore').innerHTML = '';
        for (i = 0; i < lista.length; i++) {
            if (titoloCategoria == '&nbsp;') {
                lista[i].stampaElemento(document.getElementById('contenitore'));
            } else if (titoloCategoria != '&nbsp;') {
                if (lista[i].categoria.toUpperCase() == titoloCategoria.toUpperCase()) {
                    lista[i].stampaElemento(document.getElementById('contenitore'));
                }
            }
        }
    });

    $(document).on('click', '#contenitore img', function () {
        let id = this.getAttribute('id');
        let storage = [];

        for (i = 0; i < lista.length; i++) {
            if (lista[i].modello == id) {
                storage.push(lista[i]);
                localStorage.setItem(storage, JSON.stringify(storage));
                localStorage.setItem('storage', storage);
                location.href = "dettaglio.html"
            }
        }
    });

    $(document).on('click', '#contenitore button', function () {
        let id = this.getAttribute('id');
        let x = localStorage.getItem('user');
        let y = [];

        if (x) {
            for (i = 0; i < lista.length; i++) {
                if (lista[i].modello == id) {
                    if (localStorage.getItem(x)) {
                        y = JSON.parse(localStorage.getItem(x));
                    }
                    y.push(lista[i]);
                    localStorage.setItem(x, JSON.stringify(y));
                    localStorage.setItem('nome', x);
                    alert('Elemento aggiunto al carrello!')
                }
            }
        }
        else {
            location.href = '#login'
            document.getElementById('errore').style.color = "rgb(216, 40, 40)";
            document.getElementById('errore').innerHTML = "Per aggiungere prodotti al carrello effettuare il login!";
        }

    });
});
