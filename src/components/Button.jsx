import '../App.css';

function Button(props) {
    debugger;
    let isNew = props.sound.date > new Date().getTime() - (1000 * 60 * 60 * 24 * 3);
    return (
        <div className="button-container">
            <a onClick={(event) => {
                event.preventDefault();
                let sound = new Audio(`https://raw.githubusercontent.com/Sparkot89/lucybell-oocsounds/main/public/audios/${props.sound.id}.mp3`);
                sound.play();
            }}
                onKeyDown={(event) => {
                    event.preventDefault();
                }}
                href="/" className={isNew ? "button newAudio" : "button"} >
                <p>
                    {props.sound.name}
                </p>
            </a>
        </div>
    );
}

export default Button;
