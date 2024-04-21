class User{
    constructor(email="", login="user", pass="user") {
        this.login=login;
        this.pass=pass;
        this.email=email;
    }
    
    static formularzRejestracji(){
        var formularz = "";
        formularz += '<div>email: <input type=email name=email id=email required> <br>';
        formularz += 'login: <input type=text name=login id=login required> <br>';
        formularz += 'haslo: <input type=password name=password id=password required> <br>';
        formularz += '<button type="button" id="rejestruj">Zarejestruj</button></div><br>';
        document.getElementById('formularz').innerHTML=formularz;
    }
    
    static sprawdzCzyIstniejeLogin(login) {
        return localStorage.getItem(login) !== null;
    }
    
    static sprawdzCzyIstniejeEmail(email) {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const user = JSON.parse(localStorage.getItem(key));
            if (user.email === email) {
                return true;
            }
        }
        return false;
    }

    pokaz(){
        return "Dane użytkownika: login:"+this.login+ " haslo:"+this.pass+" email:"+this.email;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    User.formularzRejestracji();
    rejestruj.addEventListener("click", ()=> {
        var login = document.getElementById("login").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if (!(email && login && password)) {
            document.getElementById('info').innerHTML = "Wypełnij wszystkie pola!"
            return;
        }
        if (User.sprawdzCzyIstniejeLogin(login)) {
            document.getElementById('info').innerHTML="Użytkownik o podanym loginie już istnieje!"
            return;
        }

        if (User.sprawdzCzyIstniejeEmail(email)) {
            document.getElementById('info').innerHTML="Użytkownik o podanym mailu już istnieje!"
            return;
        }
        document.getElementById('info').innerHTML=""
        var user = new User(email, login, password);
        localStorage.setItem(user.login, JSON.stringify(user));
    });
});
