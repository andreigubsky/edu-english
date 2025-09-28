const word = document.querySelector(".russian-word")
const answers = document.querySelector(".answer-wrapper")

//const answer = document.createElement();

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
const arr = [];
const vocabulary = rows
  .map(row => {
    arr.push({en: row.split(',')[0], rus: row.split(',')[1]});
    //console.log(arr)
    // return {
    //   en: row.split(',')[0],
    //   rus: row.split(',')[1]
    // }
  });


//Generation random number to use in logic
function generateRandom(max, arr){
  const arrayAnswers = [];
  const arrayNumbers = [];
  const usedNumbers=[];
  
  let randomNumber;


    for(let i=0; i<3; i++){
      randomNumber = Math.floor(Math.random()*(max-0+1)+0);
      if(arrayNumbers.includes(randomNumber)){
        continue;
      }else{
        arrayNumbers.push(randomNumber);
        arrayAnswers.push(arr[randomNumber]);
      }
     console.log(arrayNumbers);
    }    
  
  console.log(arrayAnswers)

  word.textContent = arr[randomNumber][0];
  return randomNumber;
}
generateRandom(rows.length-1, rows);


const answersArray =[];
// generate 3 wrong answers and 1 rigth answer
//
const markup = rows
  .map(
    word => `<li>
                  <a class="answer-link" href="${word.en}"${word.en}
                  </a>
            </li>`
  )
  .join('');

// Динамічне створення рощзмітки галереї

answers.append('afterbegin', markup);