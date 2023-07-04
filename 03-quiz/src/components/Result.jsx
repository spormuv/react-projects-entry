import { questions } from '../data/questions';

const Result = ({ correct, setStep, setCorrect }) => {
  const resetQuiz = () => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <div className="result">
      {!!correct && (
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      )}
      <h2>
        You got {correct} out of {questions.length}
      </h2>
      {!correct && (
        <p style={{ fontSize: '20px' }}>
          Do not worry!
          <br />
          Success usually comes to those who are too busy looking for it!
        </p>
      )}
      <button onClick={resetQuiz}>Try again</button>
    </div>
  );
};

export default Result;
