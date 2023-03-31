import "./HomePage.styles.scss";
import qr from './qr.png';
import '../fonts/Nandos/NandosHandAlt.ttf';

const HomePage = () => {
    return (
        <div className="Body" style={{ fontFamily: 'Nandos Hand Alt' }}>
            <h1 className="Header">Sawubona 👋 Welcome to Nando's Service Desk<br/><br/>Your CS Engineer Today is: </h1>
                <img className="QRcode" src={qr} alt="logo"/><br/>
                <p className="QR">If you haven’t already, please log a ticket by scanning the QR Code to open the Information & Support Hub</p>
            </div>
    )
}

export default HomePage