const form = document.querySelector('.form-calc');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputWeight = event.target.querySelector('.weight-input');
    const inputHeight = event.target.querySelector('.height-input');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    console.log(weight, height);

    if (!weight) {
        setResult('Peso Inválido', false);
        return;
    }

    if (!height) {
        setResult('Altura Inválida', false);
        return;
    }

    const imc = getIMC(weight, height);

    const ImcRange = getImcRange(imc);

    const msg = `Seu IMC é ${imc} - ${ImcRange}.`;

    setResult(msg, true);
});

function getImcRange(imc) {
    const level = ['Muito abaixo do peso', 'Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade I', 'Obesidade II (severa)', 'Obesidade III (mórbida)']

    if (imc >= 39.99) return level[6]
    
    if (imc >= 34.99) return level[5]
    
    if (imc >= 29.99) return level[4]
    
    if (imc >= 24.99) return level[3]
    
    if (imc >= 18.49) return level[2]

    if (imc >= 34.99) return level[1]
    
    if (imc < 17) return level[0]
};

function getIMC(weight, height) {
    const imc = weight / height ** 2;
    return imc.toFixed(2);
};

function createP() {
    const p = document.createElement('p');
    return p;
};

function setResult(msg, isValid) {
    const result = document.querySelector('.result');
    result.innerHTML = '';

    const p = createP();

    if (isValid) {
        p.classList.add('result-p');
    } else {
        p.classList.add('result-bad');
    }


    p.innerHTML = msg;
    result.appendChild(p);
};
