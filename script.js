// Criação dos elementos da calculadora
const body = document.body;
const wrapper = document.createElement('div');
const h1 = document.createElement('h1');
const labelNome = document.createElement('label');
const inputNome = document.createElement('input');
const labelIdade = document.createElement('label');
const inputIdade = document.createElement('input');
const labelPeso = document.createElement('label');
const inputPeso = document.createElement('input');
const labelAltura = document.createElement('label');
const inputAltura = document.createElement('input');
const buttonCalc = document.createElement('button');
const result = document.createElement('div');
const resultIMC = document.createElement('p');
const resultStatus = document.createElement('p');
const resultIdade = document.createElement('p')
const resultNome = document.createElement('p');

// Configuração dos elementos
h1.textContent = 'Calculadora de IMC';
labelIdade.textContent = 'Idade:';
inputIdade.type = 'number';
inputIdade.id = 'idade';
labelNome.textContent = 'Digite Seu Nome:';
inputNome.type = 'textcontent';
inputNome.id = 'nome';
labelPeso.textContent = 'Peso (KG), Exemplo(90): ';
labelAltura.textContent = ' Altura (M), Exemplo(1,90): ';
inputPeso.type = 'number';
inputAltura.type = 'number';
buttonCalc.textContent = 'Calcular';
resultIMC.textContent = 'IMC:';
resultStatus.textContent = 'Status:';
resultNome.textContent = '';


// Adiciona os elementos à página
body.appendChild(wrapper);
wrapper.appendChild(h1);
wrapper.appendChild(labelNome);
wrapper.appendChild(inputNome);
result.appendChild(resultNome);
wrapper.appendChild(labelIdade);
wrapper.appendChild(inputIdade);
wrapper.appendChild(labelPeso);
wrapper.appendChild(inputPeso);
wrapper.appendChild(labelAltura);
wrapper.appendChild(inputAltura);
wrapper.appendChild(buttonCalc);
wrapper.appendChild(result);
result.appendChild(resultIMC);
result.appendChild(resultStatus);

// Estilo dos elementos
wrapper.style.width = '300px';
wrapper.style.backgroundColor = '#E0FFFF'
wrapper.style.border = 'solid 10px #ccc';
wrapper.style.borderRadius = '10px';
wrapper.style.padding = '20px';
h1.style.textAlign = 'center';
h1.style.fontFamily = 'Arial';
h1.style.color = 'blue';
labelPeso.style.display = 'block';
labelAltura.style.display = 'block';
inputPeso.style.width = '100%';
inputAltura.style.width = '100%';
buttonCalc.style.display = 'block';
buttonCalc.style.marginTop = '10px';
buttonCalc.style.backgroundColor = '#4CAF50';
buttonCalc.style.color = 'white';
buttonCalc.style.border = 'none';
buttonCalc.style.borderRadius = '5px';
buttonCalc.style.padding = '10px 20px';
buttonCalc.style.cursor = 'pointer';
result.style.marginTop = '20px';
result.style.padding = '10px';
result.style.textAlign = 'center';
labelNome.style.display = 'block';
inputNome.style.width = '100%';
document.body.style.backgroundImage = "url('fundo.gif')"; 
labelIdade.style.display = 'block';
inputIdade.style.width = '20%';

// adiciona estilo do body
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';



// Evento de clique para o botão de cálculo
buttonCalc.addEventListener('click', function() {
  const nome =  inputNome.value;  
  const idade = parseInt(inputIdade.value);
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);
 
  if (!nome || !idade || !peso || !altura) {
    alert('Preencha os campos corretamente!');
    return;
  }
  const imc = parseFloat((peso / (altura * altura)).toFixed(2));
  resultIMC.textContent = `Olá ${nome},sua idade é ${idade} e seu IMC é: ${imc}`;
  if (imc < 18.5) {
    resultStatus.textContent = 'Status: abaixo do peso';
    result.style.backgroundColor = 'yellow';
  } else if (imc >= 18.5 && imc < 25) {
    resultStatus.textContent = 'Status: peso normal';
    result.style.backgroundColor = 'green';
  } else if (imc >= 25 && imc < 30) {
    resultStatus.textContent = 'Status: acima do peso';
    result.style.backgroundColor = 'red';
  } else {
    resultStatus.textContent = 'Status: obeso';
    result.style.backgroundColor = 'purple';
  }



});
