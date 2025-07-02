import React from 'react'
import './Video.css'

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <iframe
          width="100%"
          height="215"
          src="https://www.youtube.com/embed/_8NTIf3C8ew?si=4ij2b6qXS5vO8suX"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default VideoSection
