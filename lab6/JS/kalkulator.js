function oblicz(){
     var l1=parseFloat(document.getElementById('l1').value);
     var l2=parseFloat(document.getElementById('l2').value);
     var tab = document.getElementsByName("operator");
     var op;
     for(let i=0;i<tab.length;i++){
       if(tab[i].checked){
            op = tab[i].value;
            console.log(op);
            break;
       }
     }
     var s=document.getElementById('wynik');
     switch (op){
        case '+':s.value=l1+l2;break;
        case'-':s.value=l1-l2;break;
        case'*':s.value=l1*l2;break;
        case'/':
            if(l2==0){
            s.value="Nie dzielimy przez zero";break;
            }
            s.value=l1/l2;break;
        default: s.value="Nie wybrano operatora";
     }
 }