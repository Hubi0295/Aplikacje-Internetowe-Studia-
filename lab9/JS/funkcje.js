function oblicz(){
     var l1=parseFloat(document.getElementById('l1').value);
     var l2=parseFloat(document.getElementById('l2').value);
     var procent=parseFloat(document.getElementById('procent').value);
     var rata=document.getElementById('rata');
     var s=document.getElementById('kwotaZOdsetkami');
     var q = 1 + (procent / 100 / 12);
     var rataValue = l1 * Math.pow(q, l2) * (q - 1) / (Math.pow(q, l2) - 1);
     rata.value = rataValue.toFixed(2);
     s.value = (rataValue * l2).toFixed(2);
}