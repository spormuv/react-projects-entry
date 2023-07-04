import { questions } from '../data/questions';

const Game = ({ question, onClickVariant, step }) => {
  const progressPercent = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${progressPercent}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, ind) => (
          <li key={variant} onClick={() => onClickVariant(ind)}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
