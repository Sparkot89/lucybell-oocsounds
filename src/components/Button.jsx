import '../App.css';

function Button(props) {
  return (
    <div className="button-container">
        <a onClick={(event)=>{
            event.preventDefault();
            let sound = new Audio(`https://raw.githubusercontent.com/Sparkot89/lucybell-oocsounds/main/public/audios/${props.sound.id}.mp3`);
            sound.play();
        }} 
        onKeyDown={(event)=>{
            event.preventDefault();
        }}
        href="/" className="button">
            <p>
                {props.sound.name}
            </p>
        </a>
    </div>
  );
}

export default Button;
