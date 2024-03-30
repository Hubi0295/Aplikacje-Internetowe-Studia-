function pokaz(id)
{
 switch (id)
 {
 case 1: tresc = pokaz123();break;
 case 2: tresc = pokazGalerie();break;
 case 3: tresc = pokazPost(); break;
 case 4: tresc = pokazKontakt();break;
 }

 document.getElementById('blok').innerHTML = tresc;
}
function pokaz123(){
 var tresc ='<h2><br />Pierwsze kroki</h2> '+'<p>Pierwsze aplikacje typu SPA pisane były jako aplety Javy lub jako aplikacje Flash, obecnie praktycznie wykorzystywane są tylko aplikacje pisane w JavaScript. Chociaż można pisać aplikacje typu SPA w samym języku JavaScript (nazywanym także Vanilla JavaScript), najczęściej jednak wykorzystuje się do tego celu biblioteki takie jak np. React.js czy frameworki, jak np. Vue.js czy Angular.</p>'+
 '<p class="srodek"><img src="images/baner.jpg" alt="Zdjęcie" /></p>'+
 '<article><h2>Wady SPA</h2><p>'+
 ' Czas wytworzenia oraz nakład pracy włożony w stworzenie takiej aplikacji jest większy, co wiąże ze sobą dodatkowe koszta, dlatego tworzenie małych stron staje się nieopłacalne, gdyż efekt dla strony z jedną zakładką będzie praktycznie niezauważalny Pozycjonowanie stron tego typu wymaga również większego nakładu pracy. W obecnej chwili roboty indeksujące Google nie radzą sobie ze strona typu Single Page Application, co przyczynia się do tworzenia rozwiązań przystosowanych dla robotów. </p></article>';
 return tresc;
}

function pokazGalerie()
{
 var tresc='<h2><br />Moja galeria</h2>';
 tresc+=' <div class="galeria">';
 //wygeneruj kod HTML z obrazami za pomocą pętli for:
 for(i=1;i<=10;i++)
 {
 tresc+='<div class="slajd"> <img src="static/miniaturki/obraz'+i+'.jpg" /></div>';
 }
 return tresc+'</div>';
}
function pokazKontakt()
{
 var tresc='<h2><br />Kontakt</h2>';
 tresc+= '<h2><br />Numer Telefonu: 123432123</h2>'
 tresc+= '<h2><br />Email: kontakt@gmail.com</h2>'
 tresc+= '<h2><br />Adres: Warszawa ul.Grodzka 12</h2>'

 return tresc;
}
function pokazPost()
{
 tresc='<h2><br />Dodaj post</h2>';
 tresc+='<article class="srodek" ><form action="mailto:hubert.szelepusta@gmail.com" method="post" onsubmit="return pokazDane();"> Twój email:<br /> <input type="email" name="email" id="email" required /><br />'
  +'Naziwsko i imię:<br /> <input type="text" name="dane" id="dane" required /><br />'
  +'Telefon:<br /> <input type="tel" name="tel" id="tel" required /><br />'
  +'Zainteresowania:<br /> <input type="checkbox" name="Zainteresowania" id="Sport" value="Sport"/>Sport'
  +'<input type="checkbox" name="Zainteresowania" id="Muzyka" value="Muzyka"/>Muzyka'
  +'<input type="checkbox" name="Zainteresowania" id="Film" value="Film"/>Film'
  +'<input type="checkbox" name="Zainteresowania" id="Inne" value="Inne"/>Inne</br>'
  +'Wiek:<br /> <input type="radio" name="wiek" id="<10" value="<10"/>Mniej niż 10'
  +'<input type="radio" name="wiek" id="10-20" value="10-20"/>10-20'
  +'<input type="radio" name="wiek" id="21-30" value="21-30"/>21-30'
  +'<input type="radio" name="wiek" id="31-40" value="31-40"/>31-40'
  +'<input type="radio" name="wiek" id="41-50" value="41-50"/>41-50'
  +'<input type="radio" name="wiek" id=">50" value=">50"/>>50</br>'
  +'Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea> <br />'
  +'<input type="submit" name="wyslij" value="Wyślij" /> </form></article>'

 return tresc;
}
function pokazDane()
{
 //Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
 //typu confirm do zatwierdzenia przez użytkownika:
 var dane="Następujące dane zostaną wysłane:\n";
 dane+="Email: "+document.getElementById('email').value+"\n";
 dane+="Nazwisko i imie: "+document.getElementById('dane').value+"\n";
 dane+="Telefon: "+document.getElementById('tel').value+"\n";
 dane+="Wiek: "+document.querySelector('input[name="wiek"]:checked').value+"\n";
 var tab = document.getElementsByName("Zainteresowania");
 for(let i=0;i<tab.length;i++){
         if(tab[i].checked){
              dane+="Zainteresowanie: "+tab[i].value+"\n";
         }
 }
 dane+="Wiadomosc: "+document.getElementById('wiadomosc').value+"\n";
 if (window.confirm(dane)) return true;
 else return false;
}
