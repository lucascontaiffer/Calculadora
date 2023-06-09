function insert(num){
    let numero = document.getElementById('display').innerHTML;
    display.innerHTML += num;
    
}

function limpar(){
    document.getElementById('display').innerHTML = ''
}

function regredir(){
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display.substring(0, display.length -1)
}

function calculadora(){
    let display = document.getElementById('display').innerHTML;
    if(display){
        document.getElementById('display').innerHTML = eval(display);
    } else {
        window.alert('Sem numéros..')
    }
}