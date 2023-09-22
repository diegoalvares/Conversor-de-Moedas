const btn = document.querySelector('#converter')

btn.addEventListener('click', function(e){
    e.preventDefault();
    const dinheiro = document.getElementById('dinheiro')
    const moeda = document.getElementById('moedas')
    const resultado = document.getElementById('resultado')

    if (moeda.value == 'Dólar'){
        const dolar = dinheiro.value*4.93
        console.log(dolar)
        resultado.innerHTML = '🤑 R$ ' + dolar + ' 🤑'
    }
    else if (moeda.value == 'Euro'){
        const euro = dinheiro.value*5.25
        console.log(euro)
        resultado.innerHTML = '🤑 R$ ' + euro + ' 🤑'
    }

    else if (moeda.value == 'Ien'){
        const ien = dinheiro.value*0.033
        console.log(ien)
        resultado.innerHTML= '🤑 R$ ' + ien + ' 🤑'
    }

    else{
        alert('Preencha todos os campos!')
    }
})
