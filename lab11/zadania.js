function zapiszProduktDoKoszyka() {
      var item={};
      item.nazwa = document.getElementById("nazwa").value;
      item.cena = document.getElementById("cena").value;
      item.kolor = document.getElementById("kolor").value;
      item.liczba_sztuk = document.getElementById("liczba_sztuk").value;
      var lista = JSON.parse(localStorage.getItem('lista'));
      if (typeof(Storage) !== "undefined") {
          if (lista===null) lista=[];
          item.id=lista.length;
          lista.push(item);
          localStorage.setItem('lista', JSON.stringify(lista));
          console.log(item);
          alert("Para zapisana poprawnie.");
          if(!(document.getElementById('koszyczek').innerHTML === "")){
            wyswietlKoszyk();
          }
      } else {
          alert("Twoja przeglądarka nie obsługuje localStorage.");
      }

}
function wyswietlKoszyk(){
      var lista = JSON.parse(localStorage.getItem('lista'));
      var wynik="<h2><strong> Koszyk zakupowy</strong></h2><br>"
      wynik+="<table>";
      for(var i=0;i<lista.length;i++){
            wynik+="<tr><td><input type=radio name=produkty value="+lista[i].id+" id=item"+lista[i].id+">Nazwa produktu: "+lista[i].nazwa+"</td>";
            wynik+="<td> Cena :</strong> "+lista[i].cena+"</td>";
            wynik+="<td> Kolor:</strong> "+lista[i].kolor+"</td>";
            wynik+="<td> Liczba sztuk: "+lista[i].liczba_sztuk+"</td></tr>";
      }
      wynik+="</table>";
      document.getElementById("koszyczek").innerHTML = wynik;
      var formularz="<form><button type=button onclick=usunProdukt()>Usuń Produkt</button><br><br><br><label for=nazwa>Nazwa produktu:</label><input type=text id=nazwaEdytowanie name=nazwaEdytowanie required><br><br><label for=cenaEdytowanie>Cena:</label><input type=number id=cenaEdytowanie name=cenaEdytowanie required><br><br><label for=kolorEdytowanie>Kolor:</label><input type=text id=kolorEdytowanie name=kolorEdytowanie required><br><br><label for=liczba_sztukEdytowanie>Liczba sztuk:</label><input type=number id=liczba_sztukEdytowanie name=liczba_sztukEdytowanie required><button type=button onclick=edytujProdukt()>Edytuj Produkt</button><br><br></form>";
      document.getElementById("edytowanie").innerHTML = formularz;
      }


      function edytujProdukt(){
      var tab = document.getElementsByName("produkty");
      var op;
      for(let i=0;i<tab.length;i++){
         if(tab[i].checked){
              op = i;
              console.log(op);
              break;
         }
       }
       var item={};
       console.log(op);
       item.nazwa = document.getElementById("nazwaEdytowanie").value;
       item.cena = document.getElementById("cenaEdytowanie").value;
       item.kolor = document.getElementById("kolorEdytowanie").value;
       item.liczba_sztuk = document.getElementById("liczba_sztukEdytowanie").value;
       item.id = op;
       var lista = JSON.parse(localStorage.getItem('lista'));
       lista[op]=item;
       console.log(item);
       localStorage.setItem('lista', JSON.stringify(lista));
       wyswietlKoszyk();
}
function usunProdukt(){
      var tab = document.getElementsByName("produkty");
      var op;
      for(let i=0;i<tab.length;i++){
         if(tab[i].checked){
              op = i;
              console.log(op);
              break;
         }
       }
       var lista = JSON.parse(localStorage.getItem('lista'));
       lista.splice(op);
       localStorage.setItem('lista', JSON.stringify(lista));
       wyswietlKoszyk();
}
function usunWszystkieProdukty(){
       localStorage.clear();
       wyswietlKoszyk();
}
function wyszukaj(){
    var fraza = document.getElementById("wyszukaj").value;
    var lista = JSON.parse(localStorage.getItem('lista'));
    var wynik="<h2><strong> Wyszukiwarka</strong></h2><br>"
    wynik+="<table>";
    const regex = "/[A-Z]/g";
      for(var i=0;i<lista.length;i++){
            if(lista[i].nazwa.includes(fraza)){
            wynik+="<tr><td><input type=radio name=produkty value="+lista[i].id+" id=item"+lista[i].id+">Nazwa produktu: "+lista[i].nazwa+"</td>";
            wynik+="<td> Cena :</strong> "+lista[i].cena+"</td>";
            wynik+="<td> Kolor:</strong> "+lista[i].kolor+"</td>";
            wynik+="<td> Liczba sztuk: "+lista[i].liczba_sztuk+"</td></tr>";
        }
      }
      wynik+="</table>";
      document.getElementById("koszyczek").innerHTML = wynik;
}