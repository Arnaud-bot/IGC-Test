import { useRef, useState } from "react";

function App() {
  const videoRef = useRef(null);

  const [language, setLanguage] = useState("en");
  const [videoSrc, setVideoSrc] = useState("/IGC.mp4");

  const savedTime = useRef(0);
  const shouldResume = useRef(false);

  const videos = {
    en: "/IGC.mp4",
    fr: "/IGC_fr.mp4",
    ar: "/IGC_ar.mp4",
    es: "/IGC_es.mp4",
    ru: "/IGC_ru.mp4",
  };

  const changeLanguage = (lang) => {
    const video = videoRef.current;

    if (!video || lang === language) return;

    // Sauvegarder la position actuelle
    savedTime.current = video.currentTime;

    // Sauvegarder si la vidéo était en lecture
    shouldResume.current = !video.paused;

    console.log("Saved time:", savedTime.current);

    setLanguage(lang);
    setVideoSrc(videos[lang]);
  };

  const handleLoadedData = () => {
    const video = videoRef.current;

    if (!video) return;

    // Restaurer la position
    video.currentTime = savedTime.current;

    console.log("Restored time:", video.currentTime);

    // Reprendre la lecture si elle était en cours
    if (shouldResume.current) {
      video.play().catch(() => { });
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <h2>AI Multilingual Video Player</h2>

      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      >
        <option value="en">🇺🇸 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="ar">🇦🇪 العربية</option>
        <option value="es">🇪🇸 Español</option>
        <option value="ru">🇮🇹 Italian</option>
      </select>

      <video
        key={language}
        ref={videoRef}
        src={videoSrc}
        controls
        width="900"
        preload="auto"
        onLoadedData={handleLoadedData}
      />
    </div>
  );
}

export default App;
