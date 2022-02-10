import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { socket } from "../Utils/webSocket";

function Login() {

  const [name, setName] = useState('');
  let history = useHistory();

  const onNameChangeHandler = (e) => {
      e.preventDefault();
      setName(e.target.value);
  }

  const onStartCallHandler = (e) => {
    console.log('I am in StartCallHandler')
    localStorage.setItem('name', name);
    console.log(name);
    setName('');

    history.push('/video-conference');
  }

  const onJoinCallHandler = (e) => {
    localStorage.setItem('name', name);
    setName('');
  }

  return <>
    <div className="login">

      <h1 className="login__title">VIDEO CHAT </h1><br></br>
      <div className="login__group">
        <input className="login__group__input" id="name" type="name" value={name} onChange={onNameChangeHandler}/>
        <label className="login__group__label">Name </label>
      </div>

      <button className="login__button1" type="button" disabled={name === ""} onClick={onStartCallHandler}>START CALL</button>
      <button className="login__button2" type="button" disabled={name === ""} onClick={onJoinCallHandler}>JOIN CALL</button>
    </div>
    <div className="video-chat-room">
        <video id="user-video"></video>
    </div>
  </>
}

export default Login; 