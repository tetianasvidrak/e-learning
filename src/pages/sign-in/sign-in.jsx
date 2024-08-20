import { useSelector } from "react-redux";

import Loader from "../../components/loader";
import SignInForm from "../../components/sign-in-form";
import VideoBackground from "../../components/video-bg";

import video from "../../assets/videos/bg-video-1.mp4";

const SignIn = () => {
  const { loading } = useSelector((state) => state.auth);
  console.log(loading);
  return (
    <main className="signin-page">
      {loading === "pending" && <Loader />}
      <SignInForm />
      <VideoBackground video={video} />
    </main>
  );
};

export default SignIn;
