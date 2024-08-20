// eslint-disable-next-line react/prop-types
const VideoBackground = ({ video }) => {
  return (
    <div className="video">
      <video className="video__content" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        {/* <source src="assets/videos/login-video.webm" type="video/webm" /> */}
        Your browser is not supported!
      </video>
    </div>
  );
};

export default VideoBackground;
