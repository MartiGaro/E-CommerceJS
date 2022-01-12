export class prodotti {
    id;
    modello;
    categoria;
    prezzo1;
    prezzo2;
    url;
    constructor(_id, _modello, _categoria, _prezzo1, _prezzo2, _url) {
        this.id = _id;
        this.modello = _modello;
        this.categoria = _categoria;
        this.prezzo1 = _prezzo1;
        this.prezzo2 = _prezzo2;
        this.url = _url;
    }

    stampaElemento(contenitore){
        contenitore.innerHTML += '<div class="col-md-4 text-center"><div><div class="w-100"><img id="'+ this.modello +'" style="cursor:pointer;" src="'+this.url+'" class="w-100 mb-3"></div><h6>'+this.modello+'</h6><h6>Prezzo: € '+this.prezzo1+'</h6><h6 style="color:red">Prezzo outlet: € '+this.prezzo2+'</h6></div><div class="d-flex flex-row p-3 justify-content-center"><button id="'+ this.modello +'" class="btn btn-danger w25">Aggiungi al carrello</button></div></div>';
    }
}
