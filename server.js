var http = require('http');
var url = require('url');
var leggiFile = require('fs');

var server = http.createServer(function (req, res) {
    var pagina = url.parse(req.url, true).pathname;
    if (pagina == '/index.html'){ 
        leggiFile.readFile('index.html', function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }); 
    }
    else if (pagina == '/chisiamo.html'){
        leggiFile.readFile('chisiamo.html', function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }); 
    } 
    else if (pagina == '/categorie.html'){
        leggiFile.readFile('categorie.html', function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }); 
    } 
    else if (pagina == '/carrello.html'){
        leggiFile.readFile('carrello.html', function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }); 
    } 
    else if (pagina == '/contatti.html'){
        leggiFile.readFile('contatti.html', function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }); 
    } 
    else if (pagina == '/pagamento.html'){
        leggiFile.readFile('pagamento.html', function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }); 
    } 
    else if (pagina == '/dettaglio.html'){
        leggiFile.readFile('dettaglio.html', function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }); 
    } 
});

server.listen(8080);