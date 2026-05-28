function App() {
  return (
    <div>
      <video src="/public/IGC.mp4"
        type="video/mp4"
        width="800"
        height="450"
        controls
        autoPlay
        muted
        loop
        poster="/public/IGC.mp4/ik-thumbnail.jpg?tr=so-18">

        <track
          kind="subtitles"
          src="public/english.vtt"
          srcLang="en"
          label="English"
          default>
        </track>

        <track
          kind="subtitles"
          src="/public/hindi.vtt"
          srcLang="hi"
          label="Hindi"
          default>
        </track>


      </video>
    </div>
  )
}

export default App
