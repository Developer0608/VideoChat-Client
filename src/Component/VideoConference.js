import { useEffect, useRef } from "react";

function VideoConference() {

  useEffect(() => {
    navigator.getUserMedia({
      audio: true,
      video: { width: 1920, height: 720}
    }, (stream) => {
      const video = document.getElementById('user-video');
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    }, () => {
        alert('Cannot access User Camera and Mic');
      });
  }, []);

  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">VideoChat</a>
      </div>
    </nav>
    <div className="video-chat-room">
      <video id="user-video"></video> 
    </div>
    <footer>
      <p>Azad SIngh</p>
    </footer>
     
  </>
}

export default VideoConference;