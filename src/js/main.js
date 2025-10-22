

const word = document.querySelector(".russian-word");
const answers = document.querySelector(".answer-wrapper");
const checkBtn = document.querySelector(".check-btn")
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
const usedWords = [];
const randomArray = generateRandom(0, 25);


word.textContent = vocabulary[randomArray[0]].rus;

vocabulary[randomArray[0]].en;

vocabulary.slice(randomArray[0])
console.log(vocabulary)
console.log(vocabulary[randomArray[0]]);



const questions = Array.from(vocabulary);

console.log(questions.splice(1,3));
const markup = questions.splice(1,3)
  .map(
    word => {

              return `
                          <input type="radio" id="option1" name="myGroup" value="option1" class = "answer-radio">
                          <label for="option1">${word.en}</label><br>                          
                    `;
            }
            
  )
  .join('');

answers.insertAdjacentHTML('beforeend',markup);


// const selectedValue = document.querySelector('input[name="myGroup"]:checked').value;
//     console.log(selectedValue);

// const radioButtons = document.querySelectorAll('input[name="myGroup"]');
//     radioButtons.forEach(radio => {
//       radio.addEventListener('change', function() {
//         if (this.checked) {
//           console.log('Выбран: ' + this.value);
//         }
//       });
//     });




    
checkBtn.addEventListener('click', checkAnswer())

function checkAnswer(param) {
  if (param === vocabulary[randomArray[0]].en){
    console.log('right')
  }else{
    console.log('wrong');
    
  }
}