import '../App.css';

function Button(props) {
  return (
    <div className="button-container">
        <a href={props.sound.uri} className="button">
            <p>
                {props.sound.name}
            </p>
        </a>
    </div>
  );
}

export default Button;
