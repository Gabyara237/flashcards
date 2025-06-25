
import './App.css'
import Card from './components/Card';
import questionAnswer from './data/questionAnswer.json'
import { useState } from 'react';


function App() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [styleResult, setStyleResult] = useState('');
  const [correct, setCorrect] = useState(0);

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit =(e, answer) =>{
    e.preventDefault();
    if (answer.toLowerCase().includes(value.toLocaleLowerCase())){
      setResult("Well done! Correct answer!");
      setStyleResult("correct");
      setCorrect((prev)=> prev +1);
    }else{
      setResult("Sorry, wrong answer!")
      setStyleResult("incorrect");
    }

    setValue('');
  }

  function getRandomQuestion(){
    const randomQuestion = Math.floor(Math.random() * questionAnswer.length);
      setCurrentQuestion(randomQuestion);
      setIsFlipped(false);
  }

  function getPreviousQuestion(){
    const previous = Math.max(currentQuestion - 1, 0);
    setCurrentQuestion(previous);
    setIsFlipped(false); 
    
  }

  function getNextQuestion() {
  const next = Math.min(currentQuestion + 1, questionAnswer.length - 1);
  setCurrentQuestion(next);
  setIsFlipped(false); 
}


  return (
    <>
      <h1 className='title'> CardioBrain Trivia By Gabriela Araujo</h1>
      <h3 className='description'> Test your knowledge with general culture questions that not only make you think, but also teach you! Each card comes with a fun fact that will make you say, “I didn't know that!”. Learn something new every time you play. isResponse</h3>
      <p>Total cards: {questionAnswer.length}</p>
      <p>Total correct Answer: {correct} </p>
      <Card 
        question={questionAnswer[currentQuestion].question} 
        answer={questionAnswer[currentQuestion].answer}
        funFact={questionAnswer[currentQuestion].funFact}
        image={questionAnswer[currentQuestion].image}
        category = {questionAnswer[currentQuestion].category}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}/>
      <form onSubmit={(e) => handleSubmit(e,questionAnswer[currentQuestion].answer)}>
        <label>
          Enter your answer: 
          <input type='text' value={value} onChange={handleChange}></input>
        </label>
        <button className="button-form" type='submit'>Submit</button>
      </form> 
      {result && (<p className={styleResult} id="result">{result}</p>)} 
      <div className='navigation'> 
        <div className='navigation-arrows'>
          <button onClick={getPreviousQuestion} disabled={currentQuestion===0} className='arrows'>{"<-"} </button>
          <button onClick={getNextQuestion} disabled={currentQuestion===questionAnswer.length - 1}className='arrows'>{"->"}</button>
        </div>
        <button onClick={getRandomQuestion}> Next random card </button>
      </div>
    </>
  )
}

export default App
