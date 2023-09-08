import React, { useRef, useState } from 'react';
import '../css/main.css';
import Button from './Button';
import Webcam from 'react-webcam';

function Main() {
    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('NAME');
    const [error, setError] = useState('');

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
    }

    const retake = () => {
        setCapturedImage(null);
    }

    const handleFallbackClick = () => {
        setVisible(true);
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const lettersOnly = /^[A-Za-z\s]+$/;
        if (value.length > 30) {
            setError('Name should not exceed 30 characters');
        } else if (!lettersOnly.test(value)) {
            setError('Name should contain only letters');
        } else {
            setError('');
        }
        setName(value);
    }

    const save = () => {
        setShow(true);
        setVisible(false);
        console.log(error);
    }

    return (
        <>
            <div className='main'>

                <div className="landing-page">
                    <img className='position-absolute' src="./images/background.png" alt="" />
                    <div className="passport">
                        <div className="mypassport">
                            <img src="./images/brand-logo.png" alt="logo" />
                            <img src="./images/earth.png" alt="earth" />
                            <img src="./images/passport.png" alt="text" />
                        </div>
                        <div className="passport-inside">
                            <div className="passport-rectangle"></div>
                            <div className="passport-top"><div className="profile">
                                {!(show && capturedImage) ? <img src="./images/profile.png" onClick={handleFallbackClick} alt="profile" /> :
                                    <img src={capturedImage} onClick={handleFallbackClick} alt="profile" />}
                            </div>
                                <div className="information">
                                    <h6>Name</h6>
                                    {!error ? (<h5 onClick={() => setVisible(true)}>{name}</h5>) : (<h5 onClick={() => setVisible(true)}>Invalid</h5>)}
                                    <h6>I'M READY TO DISCOVER THE WORLD!</h6>
                                </div></div>
                            <div className="passport-bottom-rectangle"></div>
                            <div className="passport-bottom">
                                <h6 className="continents-text">Continents explored</h6>
                                <img className='continents' src="./images/world-map.png" alt="continents" />
                            </div>
                        </div>
                    </div>
                    <img className='position-absolute download' src="./images/download.png" alt="download" />
                </div>

                {visible ?
                    (<div className="capture-page">
                        <header>
                            <nav id='menu'>
                                <ul className='position-relative menuc'>
                                    <li className="menu-item"><Button image='./images/home.png' /></li>
                                </ul>
                            </nav>
                        </header>
                        <img className='position-absolute' src="./images/background.png" alt="" />
                        <div className="capture">
                            <div className="camera">
                                {capturedImage ? (
                                    <div>
                                        <img src={capturedImage} alt="Captured" />
                                        <img src='./images/retake.png' role='button' onClick={retake} className='buttoncap'></img>
                                        <img src='./images/close.png' role='button' onClick={() => setVisible(false)} className='buttonclose'></img></div>
                                ) : (<div>
                                    <Webcam ref={webcamRef} />
                                    <img src='./images/capture.png' role='button' onClick={capture} className='buttoncap'></img>
                                    <img src='./images/close.png' role='button' onClick={() => setVisible(false)} className='buttonclose'></img></div>
                                )}

                            </div>
                            <div className="info">
                                <input type='text' className='name' onChange={handleChange} placeholder='Enter your first name' />
                                <img src="./images/save.png" role='button' onClick={save} className='save' alt="" />
                            </div>
                        </div>
                        <img className='position-absolute download' src="./images/download.png" alt="download" />
                    </div>) : (<div></div>)}

            </div >
        </>
    )
}

export default Main;
