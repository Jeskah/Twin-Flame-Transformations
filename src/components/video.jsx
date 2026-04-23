export function Video() {
  return (
    <video width="320" height="240" controls preload="none">
      <source src="/Confetti.webm" type="video/webm" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  )
}