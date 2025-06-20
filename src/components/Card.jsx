import React, { useState } from 'react';


function Card(props) {
    const {question, answer} = props;
     
    const [isAnswer, setIsAnswer] = useState(false);

  return (
    <div className="container-card" onClick={() => setIsAnswer(!isAnswer)}>
      {isAnswer? answer : question}  
      
    </div>
  );
}

export default Card;
