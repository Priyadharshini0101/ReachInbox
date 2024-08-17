import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { googleIcon, logoIcon } from "../assets";
import { Helmet } from "react-helmet";

function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  }, []);

  const googleSignIn = () => {
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/home`;
  };

  return (
     <>
      <Helmet>
        <title>{'ReachInbox - Sign Up'}</title>
        <meta name="description" content={``}></meta>
      </Helmet>
    <div className="flex flex-col items-center h-screen justify-between">
      <img src={logoIcon} className="p-10"></img>

      <div className="flex flex-col py-[25px] justify-between border-[#707172] rounded-lg border-[1px] px-12 gap-[50px]   ">
        <div className="flex flex-col gap-[25px] items-center">
          <h1 className="text-[20px] text-white font-semibold">
            Create a new account
          </h1>
          <button
            className="text-[16px] rounded-md border-[1px] border-[#CCCCCC] py-2.5 px-24 flex items-center justify-center gap-[10px] cursor-pointer  hover:bg-[#ffffffbf] "
            onClick={() => googleSignIn()}
          >
            <img src={googleIcon}></img>Sign Up with Google
          </button>
        </div>
        <div className="flex flex-col items-center gap-[25px]">
          <button className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] hover:scale-110 px-6 py-3 text-white font-semibold cursor-pointer rounded-md">
            Create an Account
          </button>
          <p className="text-[#909296] ">
            Already have an account?{" "}
            <a className="text-[#C1C2C5] cursor-pointer hover:text-[#ffffff]">
              Sign In
            </a>
          </p>
        </div>
      </div>

      <h1 className="text-[#5C5F66] text-[12px] p-2">
        © 2023 Reactindox. All rights reserved.
      </h1>
    </div>
    </>
  );
}

export default Login;
