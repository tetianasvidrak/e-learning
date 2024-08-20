import Loader from "../../components/loader";
import SignInForm from "../../components/sign-in-form";
// import Loader from "../../components/loader";
import { useSelector } from "react-redux";

const SignIn = () => {
  const { loading } = useSelector((state) => state.auth);
  console.log(loading);
  return (
    <main className="signin-page">
      <SignInForm />
      {loading === "pending" && <Loader />}
    </main>
  );
};

export default SignIn;
