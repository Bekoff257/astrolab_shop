import "../style/Video.css"
const Vidoes = () => {
  return (
    <div className="videos">
        <div className="container">
            <div className="video_content">
                <h1>Videos</h1>
                    <iframe width="944" height="531" allowFullScreen={true} src="https://www.youtube.com/embed/XHTrLYShBRQ" title="Introducing iPhone 15 | WOW | Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
  )
}

export default Vidoes