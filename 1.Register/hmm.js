function Accept(){
    var x=document.forms['Datadiri']['Awal'].value;
    var z=document.forms['Datadiri']['Akhir'].value;
    var y=document.forms['Datadiri']['Email'].value;

    var tabel = document.getElementById("table-Input");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = x;
    cell2.innerHTML = z;
    cell3.innerHTML = y;
}
document.querySelector('.button').addEventListener('click',function(){
    document.querySelector('.Bg-Message').style.display = 'flex' ;
})

document.getElementById('button').addEventListener('click',function() {
    document.querySelector('.Bg-Message').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.Bg-Message').style.display = 'none';
});
