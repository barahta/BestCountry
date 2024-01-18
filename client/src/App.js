import logo from './logo.svg';
import './App.css';
import MusicPlayer from "./Audio";
import React, { useState, useEffect } from 'react';
// import React, {useEffect, useState} from "@types/react";

function App() {
    const [isPlaying, setPlaying] = useState(false);
    const audioPath = process.env.PUBLIC_URL + '/music/gimn.mp3'; // путь к вашему аудиофайлу
    document.title = "TestBrain";
    useEffect(() => {
     const audio = new Audio(audioPath);

     if (isPlaying) {
         audio.play();
     } else {
         audio.pause();
     }

     return () => {
         // Очистка ресурсов, например, остановка аудио при размонтировании компонента
         audio.pause();
         audio.currentTime = 0;
     };
    }, [isPlaying, audioPath]);

    const togglePlay = () => {
const btn = document.getElementById('btn')
        btn.className = '';
        btn.innerHTML = '';
        const content = document.getElementById('content')
        console.log(content)
        const time = 3000
            content.innerHTML = arr[0]
            setTimeout(()=>{
                content.innerHTML = arr[1]
                setTimeout(()=>{
                    content.innerHTML = arr[2]
                    setTimeout(()=>{
                        content.innerHTML = arr[3]
                        setTimeout(()=>{

                            setPlaying(!isPlaying);
                            content.innerHTML = ''
                         const gimn = document.querySelector('.bestblock_square')
                            gimn.style.display = 'flex';
                            // <div className="bestblock_space_btn" onClick=${{togglePlay}}>${{isPlaying ? 'STOP' : 'START'}}</div>

                        },time)
                    },time)
                },time)
            },time)


    };
    const arr = ['Concentrate and get ready', 'Something special awaits you', 'It\'s very important', 'Stand up from your workplace and take a deep breath']
useEffect(()=>{

},[])


  return (
      <div className="App">
          <div className="bestblock">
              <img src="img/logomain.svg" className="imagelogo"></img>
              <div className="bestblock_space">

                  <div className="bestblock_space_text" id="content">Training your brain<br />
                      Turn up the volume<br />
                      press start and follow the instructions</div><br />
                  <div className="bestblock_space_btn" id="btn"  onClick={togglePlay}>{isPlaying ? '' : 'START'}</div>

                  {/*<div className="bestblock_space_text">Concentrate and get ready</div>*/}
                  {/*<div className="bestblock_space_text">Something special awaits you</div>*/}
                  {/*<div className="bestblock_space_text">It's very important</div>*/}
                  {/*<div className="bestblock_space_text">Stand up from your workplace and take a deep breath</div>*/}
                 <div>
                      <audio >
                          <source src={audioPath} type="audio/mp3" />
                          Ваш браузер не поддерживает тег audio.
                      </audio>

                  </div>
              </div>
          </div>
          <div className="bestblock_square"></div>
      </div>
  );
}

export default App;
