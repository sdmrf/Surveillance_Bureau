import "./Identification.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Spinner from "./Spinner/Spinner";

const Identification = ({isLFDLoaded, isVideoOn, vidHeight, vidWidth, canvasRef, videoRef, criminalId, handleFaceRecognition, startWebcam, closeWebcam, copyTextToClipboard }) => {
  return (
    <div className="Identification">
      {isLFDLoaded ? (
        isVideoOn ? (
          <button onClick={closeWebcam}>Close Webcam</button>
        ) : (
          <button onClick={startWebcam}>Open Webcam</button>
        )
      ) : (
        <Spinner />
      )}
      {isLFDLoaded && isVideoOn && (
        <div className="Video">
          <div className="VideoContainer">
            <video
              ref={videoRef}
              width={vidWidth}
              height={vidHeight}
              onPlay={handleFaceRecognition}
            />
            <canvas ref={canvasRef} />
          </div>
          {criminalId && (
            <div className="CriminalIdModal">
              <h1>Criminal Is Identified</h1>
              <div
                className="CriminalId"
                onClick={copyTextToClipboard(criminalId)}
              >
                {criminalId}
                <ContentCopyIcon />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Identification