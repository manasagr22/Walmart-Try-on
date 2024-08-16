import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Webcam from 'react-webcam';
import img1 from '../../assets/SampleTryNow.png';
import './TryItNowCard.css';
import Spinner from '../Spinner/Spinner';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function TryItNowCard({ product, cartItems, setCartItems, url, onClose }) {
  const [step, setStep] = useState(1);
  const [useWebcam, setUseWebcam] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [state, setState] = useState("Next");
  const [spinnerActive, setSpinnerActive] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = (shouldZoom) => {
    setIsZoomed(shouldZoom);
  };

  const handleNextStep = () => {
    setState("Processing");
    setSpinnerActive(true);
    setTimeout(() => {
      setStep(2);
      setSpinnerActive(false);
      setState("Next");
    }, 10000);
  };

  const handleUseCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => setUseWebcam(true))
      .catch((error) => {
        console.error("Permission denied or error occurred:", error);
      });
  };

  const handleCapture = (webcamRef) => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setUseWebcam(false); // Turn off webcam after capture
    setIsNextDisabled(false);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setIsNextDisabled(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddToCart = () => {
    // Add the product to cart
    setCartItems([...cartItems, product]);

    // Close the popup
    onClose();
  };

  const webcamRef = React.useRef(null);

  useEffect(() => {
    if (capturedImage || uploadedImage) {
      setIsNextDisabled(false);
    } else {
      setIsNextDisabled(true);
    }
  }, [capturedImage, uploadedImage]);

  return (
    <div className="popup-container">
      <div className="popup-content">
        <button onClick={onClose} className="close-button">
          ✕
        </button>
        {step === 1 ? (
          <div className="step-one">
            <h2 className="popup-heading">Upload your image</h2>
            <div className="upload-area">
              <input
                type="file"
                accept="image/*"
                className="file-input"
                onChange={handleUpload}
              />
              <span>or</span>
              <Button
                variant="contained"
                component="label"
                className="camera-button"
                onClick={handleUseCamera}
              >
                Use Laptop Camera
              </Button>
              <div className="vanishing-line" />
            </div>
            <div className="image-preview-area">
              {uploadedImage && <img src={uploadedImage} alt="Uploaded Preview" />}
              {capturedImage && <img src={capturedImage} alt="Captured Preview" />}
            </div>
            {useWebcam && (
              <div className="webcam-container">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleCapture(webcamRef)}
                  className="capture-button"
                >
                  Capture Photo
                </Button>
              </div>
            )}
            {!useWebcam && (
              <div className="next-step">
                {isNextDisabled && (
                  <span className="warning-text">No image present</span>
                )}
                {spinnerActive ? <Spinner /> : undefined}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextStep}
                  className="next-button"
                  disabled={isNextDisabled}
                >
                  {state}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="step-two">
            <h2 className="popup-heading">Here's Your Look</h2>
            <div className="centered-image-preview">
              {capturedImage ? (
                <img src={capturedImage} alt="Captured Look" className="enlarged-image" />
              ) : (
                <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                  <img src={url} alt="User" className="enlarged-image" />
                </ControlledZoom>
              )}
            </div>
            <div className="actions">
              <Button variant="contained" color="primary" className="proceed-button" onClick={() => {
                setStep(1);
              }}>
                Back
              </Button>
              <div className="buy-now">
                <span>Like your look? Buy it now!</span>
                <Button variant="contained" color="success" className="buy-button" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
