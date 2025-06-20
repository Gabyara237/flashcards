

function Card(props) {
    const {question, answer, funFact, isFlipped, setIsFlipped} = props;
     
  return (
    <div className="container-card" onClick={() => setIsFlipped(!isFlipped)}>
    {isFlipped ? (
        <div>
        <p><strong>{answer}</strong></p>
        <p className="fun-fact">💡 {funFact}</p>
        </div>
    ) : (
        <p>{question}</p>
    )}
    </div>
  );
}

export default Card;
