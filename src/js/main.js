const word = document.querySelector(".russian-word")
const answers = document.querySelector(".answer-wrapper")

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

const vocabulary = rows.map(row => {
  return {rus: row.split(',')[1], en: row.split(',')[0]}
  });


//Generation random number to use in logic
function generateRandom(max, arr){
  const arrayNumbers = [];
  const usedNumbers=[];
  
  let randomNumber;

    for(let i=0; i<3; i++){
      randomNumber = Math.floor(Math.random()*(max-0+1)+0);
      if(arrayNumbers.includes(randomNumber)){
        continue;
      }else{
        arrayNumbers.push(randomNumber);
      }
    }    
  return randomNumber;
}
//generateRandom(rows.length-1, vocabulary);

word.textContent = vocabulary[generateRandom(rows.length-1, vocabulary)].rus;
const answersArray =[];

// generate 3 wrong answers and 1 rigth answer
//

for(let i =0; i<3; i++){
  answersArray.push(generateRandom(rows.length-1, vocabulary));
  console.log("answersArray: "+answersArray[i]);
}
console.log(answersArray)



const markup = rows
  .map(
    word => `<li>
                  <a class="answer-link" href="${word.en}"${word.en}
                  </a>
            </li>`
  )
  .join('');

// Динамічне створення рощзмітки галереї

//answers.append('afterbegin', markup);