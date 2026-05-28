function App() {
  return (
    <div>
      <video
        src="/IGC.mp4"
        type="video/mp4"
        width="800"
        height="450"
        controls
        autoPlay
        muted
        loop
        poster="/IGC.mp4/ik-thumbnail.jpg?tr=so-18">

        <track
          kind="subtitles"
          src="/english.vtt"
          srcLang="en"
          label="English"
          default
        />

        <track
          kind="subtitles"
          src="/hindi.vtt"
          srcLang="hi"
          label="Hindi"
          default
        />

      </video>
    </div>
  )
}

export default App
