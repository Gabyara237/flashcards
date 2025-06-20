
import './App.css'
import Card from './components/Card';
import questionAnswer from './data/questionAnswer.json'
import { useState } from 'react';


function App() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  function getRandomQuestion(){
    const randomQuestion = Math.floor(Math.random() * questionAnswer.length);
      setCurrentQuestion(randomQuestion);
      setIsFlipped(false);
  }

  return (
    <>
      
      <h1 className='title'> CardioBrain Trivia By Gabriela Araujo</h1>
      <h3 className='description'> Test your knowledge with general culture questions that not only make you think, but also teach you! Each card comes with a fun fact that will make you say, “I didn't know that!”. Learn something new every time you play. isResponse</h3>
      <p>Total cards: {questionAnswer.length}</p>
      <Card 
        question={questionAnswer[currentQuestion].question} 
        answer={questionAnswer[currentQuestion].answer}
        funFact={questionAnswer[currentQuestion].funFact}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}/>
      <button onClick={getRandomQuestion}> Next Question </button>
    </>
  )
}

export default App
