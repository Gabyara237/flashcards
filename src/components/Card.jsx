

function Card(props) {
    const {question, answer, funFact,image, category, isFlipped, setIsFlipped} = props;
     
  return (
    <div className="container-card" id={category} onClick={() => setIsFlipped(!isFlipped)}>
    {isFlipped ? (
        <div>
           
            <img src={image} className="image"></img>
            <p><strong>{answer}</strong></p>
            <p className="fun-fact">💡 {funFact}</p>
        </div>
    ) : (
        <div className="question">
            <p className="tag">{category}</p>
            <p>{question}</p>
        </div>
    )}
    </div>
  );
}

export default Card;
