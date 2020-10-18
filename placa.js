var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
var f = new Date();
function mostrarDia(){
    var cod = document.getElementById('placa').value
    if(cod === '0'){return document.getElementById('dia').innerHTML=''}
    else if(cod === '1'){
        var dia1y2 = (f.getDate()+ 3)+ ' de ' + meses[f.getMonth()]+' de '+f.getFullYear();

        return document.getElementById('dia').innerHTML = 'Debes surtir el '+dia1y2}
    else if(cod === '3'){
        var dia3y4 = (f.getDate()+ 4)+ ' de ' + meses[f.getMonth()]+' de '+f.getFullYear();

        return document.getElementById('dia').innerHTML = 'Debes surtir el '+dia3y4}
    else if(cod === '5'){
        
        var dia5y6 = f.getDate()+ ' de ' + meses[f.getMonth()]+' de '+f.getFullYear();
        return document.getElementById('dia').innerHTML = 'Debes surtir el ' +dia5y6
        } 
    else if(cod === '7'){
        // var r = new Date()
        var dia7y8 = (f.getDate() + 1) + ' de '+meses[f.getMonth()]+' de '+ f.getFullYear()
        return document.getElementById('dia').innerHTML = 'Debes surtir el ' + dia7y8}
    else if(cod === '9'){
        var dia9y0 = (f.getDate() + 2) + ' de '+meses[f.getMonth()]+' de '+ f.getFullYear()
        return document.getElementById('dia').innerHTML = 'Debes surtir el ' +dia9y0}
    // document.getElementById('dia').innerHTML = cod;
    
    

}

