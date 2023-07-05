export const Success = ({ count, setIsSuccess }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>
        {count > 1 && 'All'} {count} user{count > 1 && 's'} invited
      </p>
      <button className="send-invite-btn" onClick={() => setIsSuccess(false)}>
        Back
      </button>
    </div>
  );
};
