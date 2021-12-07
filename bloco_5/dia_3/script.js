function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
function criaDias() {

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const a = document.querySelector('#days');
    const dias = dezDaysList[i];
    const diasLista = document.createElement('li');

    if (dias === dias) {
      diasLista.className = 'day';
      diasLista.innerHTML = dias;
      a.appendChild(diasLista);

    }
    if (dias === 24 || dias === 31) {
      diasLista.className = 'holiday day';
      diasLista.innerHTML = dias;
      a.appendChild(diasLista);

    } if (dias === 4 || dias === 11 || dias === 18) {
      diasLista.className = 'friday day';
      diasLista.innerHTML = dias;
      a.appendChild(diasLista);

    } if (dias === 25) {
      diasLista.className = 'holiday friday day';
      diasLista.innerHTML = dias;
      a.appendChild(diasLista);

    }

  }
}
criaDias();

function criaButao(string) {
  const pega = document.querySelector('.buttons-container');
  const cria = document.createElement('button');
  cria.className = 'btn-holiday';
  cria.innerText = string;
  pega.appendChild(cria);
}

criaButao('Feriados')

function clicar() {
  

let btn = document.querySelector('.btn-holiday');

let colorP = 'rgb(238,238,238)';
let colorNew = 'blue'
let holiday = document.querySelectorAll('.holiday')
btn.addEventListener('click', function () {

for (let i = 0; i < holiday.length; i +=1) {
  
  if (holiday[i].style.backgroundColor === colorNew ) {
    holiday[i].style.backgroundColor = colorP;
  } else {
    
    holiday[i].style.backgroundColor = colorNew;
  }

    }
})
}
clicar();


function criaBtn (string) {
  let pega = document.querySelector('.buttons-container' ); 
  let cria = document.createElement('button');
  cria.id = 'btn-friday'
  cria.innerText = string;
  pega.appendChild(cria)
}

criaBtn('Sexta-feira')


 let btn2 = document.querySelector('#btn-friday')

 btn2.addEventListener('click', mudaSexta)
 let guarda =[];


 function mudaSexta () {
  let sexta = 'Sexta-Feira';
  let friday = document.querySelectorAll('.friday');

  for (let i = 0; i < friday.length; i +=1 ) {
    if (friday[i].innerText === sexta) {
      friday[i].innerHTML = guarda[i]

    } else {
      guarda.push(friday[i].innerText) 
      friday[i].innerText = sexta
    }
  }
 }

function zoom () {


 let dias = document.querySelector('#days')

 dias.addEventListener('mouseover',function (event) {

  event.target.style.fontSize = '30px'


})}

zoom()

function tiraZoom () {

  let dias = document.querySelector('#days')

 dias.addEventListener('mouseout',function (event) {

  event.target.style.fontSize = '20px'
  
})}

tiraZoom()




