import React from 'react';
import styles from './Videos.module.scss';
import Preview1 from '../../assets/img/Ricardo_Lopez_Rayero_Documentales_Blueprint.png';
import Preview2 from "../../assets/img/Ricardo_Lopez_Rayero_Documentales_You_were_born_rich.png";
import Preview3 from "../../assets/img/Ricardo_Lopez_Rayero_Documentales_you_can_become_a_millionaire.png";
import Preview4 from "../../assets/img/Ricardo_LOpez_Reyero_Documentales_Living_from_a_place_of_Surrender.png";
import PlayArrow from '@mui/icons-material/PlayArrow';
import { FormattedMessage } from 'react-intl';
import { AccessTime } from '@mui/icons-material';

const videos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/watch?v=qKWzM3wGido",
    previewImage: Preview1,
    descripcion: 'documentales.blueprint',
    hours: '3hrs.',
  },
  {
    id: 2,
    videoUrl: "https://youtu.be/4rPDhM-mIJI?si=zZ6mB_TO5GGbEtLn",
    previewImage: Preview2,
    descripcion: 'documentales.born',
    hours: '12hrs.',
  },
  {
    id: 3,
    videoUrl: "https://youtu.be/TXNFLgl3Y1c?si=M119hvHlziAURmm5",
    previewImage: Preview3,
    descripcion: 'documentales.millionaire',
    hours: '8hrs.',
  },
  {
    id: 4,
    videoUrl: "https://www.soundstrue.com/products/living-from-a-place-of-surrender",
    previewImage: Preview4,
    descripcion: 'documentales.living',
    hours: '2hrs.',
  },
];

const VideoGrid = () => {
  const handlePlay = (videoUrl) => {
    window.open(videoUrl, '_blank'); // Abrir en nueva pestaña
  };

  return (
    <div className={styles.videoGrid}>
      {videos.map((video) => (
        <div key={video.id} className={styles.videoContainer}>
          <div className={styles.videoContent}>
            <div className={styles.preview}>
              <img src={video.previewImage} alt={`Preview ${video.id}`} />
              <button className={styles.playButton} onClick={() => handlePlay(video.videoUrl)}>
                <PlayArrow sx={{ fontSize: '60px' }} />
              </button>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              <FormattedMessage
                id={video.descripcion}
                values={{
                  br: <br />,
                }}
              />
            </p>
            <div className={styles.time}>
              <AccessTime />
              <span>{video.hours}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;