"use client";
import { useStore } from "../../store";

import type React from "react";
import SignUpFormInputs from "../../miniComps/SignUpFormInputs";
import type { signUpObj } from "../../types";
import { useEffect, useState } from "react";
import LoadScreen from "../../miniComps/LoadScreen";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [verifyMsg, setVerifyMsg] = useState<boolean>(false);
  const [signUpBtnClicked, setSignUpBtnClicked] = useState<boolean>(false);
  const { email, password, signUp, errorMsg, setErrorMsg, user, setPassword } =
    useStore();

  const navigate = useRouter();

  const onSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignUpBtnClicked(true);
    const signUpObj: signUpObj = await signUp(email, password);

    if (signUpObj.error) {
      // navigate("/signUp");
      setErrorMsg(signUpObj?.error);
    }
    if (signUpObj.data.session === null) {
      setVerifyMsg(true);
    }
  };

  // useEffect(() => {
  //   if (user !== "") navigate.push("/explore");
  //   return;
  // }, [user]);

  useEffect(() => {
    document.title = "Signup to continue twiinkling";
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <div className={`flex justify-start items-center px-6 pt-3 pr-10 `}>
          <h2 className="inter--font  text-4xl">Twiinkle</h2>
        </div>

        {!errorMsg && !verifyMsg && (
          <>
            <div className="flex justify-center items-center flex-col  mt-6">
              <p className="p md:text-2xl text-center ">
                New to twiinkle, signup and start writing your thoughts,
                twiinkles and more.
              </p>
              <div className="mt-5 font-bold">
                <h2 className="text-5xl playfair">SignUp</h2>
              </div>
            </div>
            <form
              onSubmit={(e) => onSignUpSubmit(e)}
              className="flex justify-center items-center flex-col gap-3 mt-5"
            >
              <SignUpFormInputs />{" "}
              <div className="flex flex-col">
                <input
                  className="input-field"
                  type={!showPassword ? "password" : "text"}
                  value={password}
                  onChange={setPassword}
                  required
                  placeholder="Enter Password"
                />
                <label className="px-1 flex items-center mt-3 ">
                  <input
                    type="checkbox"
                    onChange={() => setShowPassword((prev) => !prev)}
                  />
                  <span className="text-md">Show Password</span>
                </label>
              </div>
              <div>
                <button
                  disabled={signUpBtnClicked}
                  type="submit"
                  style={{
                    backgroundColor: signUpBtnClicked ? " rgb(210 108 65)" : "",
                  }}
                  className={`text-xl bg-primaryPink   text-white py-3 rounded-md  input-field`}
                >
                  Signup
                </button>
              </div>
            </form>
            <div className="flex mt-2 justify-center items-center">
              Already got an account,&nbsp;
              <Link href="/login" className="underline hover:text-primaryPink">
                login
              </Link>
              &nbsp;then
            </div>
          </>
        )}
        {}
        {errorMsg && (
          <div className="flex justify-center items-center flex-col mt-12 gap-6">
            <div className="text-3xl md:text-5xl text-red-700">
              An error ocurred
            </div>
            <div className="text-2xl">{errorMsg}</div>
            <div className="flex justify-center items-center gap-2 flex-col">
              {" "}
              <span className="text-md md:text-xl text-center">
                Please click the below link to do the signUp/login again
              </span>
              <button
                className="hero-btn bg-green-500 text-white"
                onClick={() => setErrorMsg("")}
              >
                <Link className="text-xl md:text-2xl" href="/signUp">
                  Try again
                </Link>
              </button>
            </div>
          </div>
        )}
        {verifyMsg && (
          <div className="flex z-10 px-5 md:px-0  justify-center items-center flex-col mt-12 gap-6 z-1">
            <div
              style={{ maxWidth: "500px", minWidth: "250px" }}
              className="  border-2 border-black px-2 md:px-6 py-5 z-10 bg-yellow-300 rounded-md"
            >
              <p className="p font-bold text-center">
                We have sent you a mail to confirm your email. Go there to
                confirm your identity.
              </p>
              <div className=" md:px-5 mt-3">
                <p className="text-center text-md">
                  This could be start of something very cool! We can't wait to
                  have you in. Once the email address is confirmed, you can
                  start twiinkling!
                </p>
                <p className="text-center mt-3">
                  This tab is no longer required, you can close it if you want
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default SignupForm;
