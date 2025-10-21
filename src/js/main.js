

const word = document.querySelector(".russian-word");
const answers = document.querySelector(".answer-wrapper");
const csvData = `avoid,избегать
encourage,поощрять
opinion,мнение
excite,возбуждать
instead,вместо
swamped ,утонувший
sustainable,устойчивый
reveal,раскрывать
participate,участвовать
conducted,проведенный
attendees,учасники
intend,намереваться
impediment,препятствие
reduce,уменьшать
accountability,подотчетность
overall,общий
valuable,ценный
occurre,происходить
arrangement,распоряжение
vulnerability ,уязвимости
assessment,оценка 
implements,реализует
estimate,оценивать
possibility,возможность
involve,вовлекать
`;
const rows = csvData.split('\n');

//Generate vocabulary array
const vocabulary = rows.map(row => {
  console.log({rus: row.split(',')[1], en: row.split(',')[0]})
  return {rus: row.split(',')[1], en: row.split(',')[0]}
  });


//Generation random number to use in logic
function generateRandom(min,max){
  const arrayNumbers = [];
  for(let i = min; i <=max; i++){
    arrayNumbers.push(i)
  }
    for(let i=arrayNumbers.length-1; i>0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [arrayNumbers[i], arrayNumbers[j]] = [arrayNumbers[j], arrayNumbers[i]]
    } 
    //log(arrayNumbers)
   
  return arrayNumbers;
}

const randomNumber = generateRandom(0,26);
console.log(randomNumber)

word.textContent = vocabulary[generateRandom(0, 25)[0]].rus;

function log(message){
  const body = document.querySelector('body')
  const div = document.createElement("div")
  div.classList.add('log')
  div.textContent = message
  body.appendChild(div)
}


// const markup = vocabulary
//   .map(
//     word => {
//       console.log(word)
//             //   `<li>
//             //       <a class="answer-link" href="">${word}</a>
//             // </li>`
//             }
            
//   )
//   .join('');

// // Динамічне створення розмітки галереї

// answers.append( markup);