import './ErrorMessage.css';

const ErrorMessage = (props) => {
  return (
    <div className="error-message">
      <p>{props.text}</p>
    </div>
  );
};

export default ErrorMessage;
