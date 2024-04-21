
function oblicz()
{
    var l1=document.getElementById('l1');
    l1=l1.value;
    l1=parseInt(l1);
    var l2=parseInt(document.getElementById('l2').value);
    var l3=parseInt(document.getElementById('l3').value);

    var r=document.getElementById('rata');
    var s=document.getElementById('suma');
    if(l2==0 || l3==0){
        r.value="Nie można podać 0 w racie lub procencie";
    }
    else{
        r.value=l1*(l3/12)/(1-(1/Math.pow((1+(l3/12)),l2)));
    }
}