utente = document.getElementById('utente');
psw = document.getElementById('psw');

$(document).ready(function(){
    document.getElementById('btn').addEventListener('click', function () {
        if (utente.value == "" && psw.value == "") {
            document.getElementById('msg').style.color = 'rgb(216, 40, 40)';
            document.getElementById('msg').innerHTML = 'Inserisci username e password!';
        } else if (utente.value == "") {
            document.getElementById('msg').style.color = 'rgb(216, 40, 40)';
            document.getElementById('msg').innerHTML = 'Inserisci username!';
        } else if (psw.value == "") {
            document.getElementById('msg').style.color = 'rgb(216, 40, 40)';
            document.getElementById('msg').innerHTML = 'Inserisci password!';
        } else if (utente.value !== "" && psw.value !== "") {
            document.getElementById('msg').style.color = 'rgb(25, 163, 25)';
            document.getElementById('login').style.display = 'none';
            document.getElementById('logout').style.display = 'block';
            document.getElementById('msg').innerHTML = 'Accesso effettuato!';
    
            let user=document.querySelector('#utente').value;
            let x=[];
            let y=[]
    
            localStorage.setItem('user',user);
            if(localStorage.getItem(user)){
                x=JSON.parse(localStorage.getItem(user));
                localStorage.setItem(user,JSON.stringify(x));
            }
    
            y=JSON.parse(localStorage.getItem(user));
        }
    
        document.getElementById('logout').addEventListener('click', function () {
            localStorage.removeItem('user');
            document.getElementById('login').style.display = 'block';
            document.getElementById('logout').style.display = 'none';
        });
    });
});
