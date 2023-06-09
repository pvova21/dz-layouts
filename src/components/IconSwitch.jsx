import '../IconSwitch.css';

export default function IconSwitch (props) {
    const {icon, onSwitch} = props;

    return (
        <div className='btn_wrapper'>
        <button className='btn' onClick={onSwitch}>
            <span className='material-icons'>{icon}</span>
        </button>
        </div>
    )
}