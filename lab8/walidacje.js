function sprawdzPole(pole_id,obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}
function sprawdz_radio(nazwa_radio){
    var obiekt=document.getElementsByName(nazwa_radio);
     for (i=0;i<obiekt.length;i++)
     { wybrany=obiekt[i].checked;
    if (wybrany) return true; }
    return false;
}
function sprawdz_box(box_id)
{
    var obiekt=document.getElementById(box_id);
    if (obiekt.checked) return true;
    else return false;
}
function sprawdz()
{
    var ok=true;
    obiektNazw = /^[a-zA-Z]{2,20}$/;
    obiektemail =/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek=/^[1-9][0-9]{1,2}$/;

    if (!sprawdzPole("nazw",obiektNazw))
        { ok=false;
        document.getElementById("nazw_error").innerHTML="Wpisz poprawnie nazwisko!";
        }
    else document.getElementById("nazw_error").innerHTML="";

    if (!sprawdzPole("wiek",obiektWiek))
        { ok=false;
        document.getElementById("wiek_error").innerHTML="Wpisz poprawnie wiek!";
        }
    else document.getElementById("wiek_error").innerHTML="";

    if (!sprawdzPole("email",obiektemail))
        { ok=false;
         document.getElementById("email_error").innerHTML="Wpisz poprawnie email!";
        }
    else document.getElementById("email_error").innerHTML="";
    if(!sprawdz_radio("zaplata")){
        ok=false
        document.getElementById("zaplata_error").innerHTML="Wybierz sposob platnosci!";

    }
    else document.getElementById("zaplata_error").innerHTML="";
    if(!sprawdz_box("php")){
        if(!sprawdz_box("c")){
        if(!sprawdz_box("java")){
            ok=false
            document.getElementById("produkt_error").innerHTML="Wybierz jakis tutorial!";
            }
        }
    }
    else document.getElementById("produkt_error").innerHTML="";
    if(ok){
        pokazDane();
    }
    return ok;

}
function pokazDane()
{
     var dane="Następujące dane zostaną wysłane:\n";
     dane+="Nazwisko i imie: "+document.getElementById('nazw').value+"\n";
     dane+="Wiek: "+document.getElementById('wiek').value+"\n";
     dane+="Email: "+document.getElementById('email').value+"\n";
     var tab = document.getElementsByName("jezyk");
     for(let i=0;i<tab.length;i++){
             if(tab[i].checked){
                  dane+="Wybrany jezyk: "+tab[i].value+"\n";
             }
     }
     dane+="Sposob platnosci: "+document.querySelector('input[name="zaplata"]:checked').value+"\n";
     var e = document.getElementById("kraj");
     var text = e.options[e.selectedIndex].text;
     dane+="Kraj: "+text;
     if (window.confirm(dane)) return true;
     else return false;
}
