function mostrarInputOutros() {
    var inputOutrosDiv = document.querySelector('.input-outros');
    var inputOutros = inputOutrosDiv.querySelector('input[type="text"]');
    var radioOutros = document.getElementById('outros');
    inputOutrosDiv.style.display = 'inline-block';
    radioOutros.checked = true;
    inputOutros.focus();
}

function esconderInputOutros() {
    var inputOutrosDiv = document.querySelector('.input-outros');
    var inputOutros = inputOutrosDiv.querySelector('input[type="text"]');
    inputOutrosDiv.style.display = 'none';
    inputOutros.value = ''; 
}

let msgAjuda = {
    
}
