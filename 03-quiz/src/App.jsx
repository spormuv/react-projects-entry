import { useState } from 'react';
import Game from './components/Game';
import Result from './components/Result';
import { questions } from './data/questions';

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = index => {
    setStep(step + 1);
    index === question.correct && setCorrect(correct + 1);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result {...{ correct, setStep, setCorrect }} />
      )}
    </div>
  );
}

export default App;
