import React, { useState, useEffect } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setPlaying] = useState(false);
    const audioPath = process.env.PUBLIC_URL + '/music/gimn.mp3'; // путь к вашему аудиофайлу

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
        setPlaying(!isPlaying);
    };

    return (
        <div>
            <audio >
                <source src={audioPath} type="audio/mp3" />
                Ваш браузер не поддерживает тег audio.
            </audio>
            <button onClick={togglePlay}>{isPlaying ? 'Пауза' : 'Воспроизвести'}</button>
        </div>
    );
};

export default MusicPlayer;