"use client";
import { useStore } from "../../store";
import type { signUpObj } from "../../types";
import { useState, useEffect } from "react";
import LoadScreen from "../../miniComps/LoadScreen";
import { supabase } from "../../SupabaseClient";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const redirectPasswordURL = "http://twiinkle.xyz/update-password";

const LoginForm: React.FC = () => {
  const navigate = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [forgotPasswordBtn, setForgotPasswordBtn] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [forgotPasswordBtnClicked, setForgotPasswordBtnClicked] =
    useState<boolean>(false);

  const { login, email, setEmail, password, setPassword, setUser, user } =
    useStore();

  const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const userObj: signUpObj = await login(email, password);
    if (userObj?.error === "Invalid login credentials") {
      setLoading(false);
      toast.error("Your password is wrong");
      return;
    }
    if (userObj?.data?.user?.user_metadata.email_verified) {
      const uid = userObj.data.user.id;
      setUser(uid);
      navigate.push("/explore");
    } else {
      setLoading(false);
      setPassword("");
      setEmail("");
      setShowPassword(false);
    }
  };

  const onForgotPassword = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!email) return;

    e.preventDefault();
    setForgotPasswordBtnClicked(true);
    setPassword("");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectPasswordURL,
    });
    toast.success(`We have sent a mail to ${email} to change the password`);

    setForgotPasswordBtnClicked(false);
    if (error) {
      toast.error("There's some error going on");
      return;
    }
    setEmail("");
  };

  useEffect(() => {
    document.title = "Login to twiinkle again!";
    if (!user || user.trim() === "" || typeof user !== "string") {
      return;
    } else {
      navigate.replace("/explore");
    }
  }, [navigate, user]);
  return (
    <div className="min-h-screen">
      {loading && <LoadScreen />}
      {!loading && (
        <>
          <div className="flex justify-start items-center px-6 pt-3 pr-10">
            <h2 className="inter--font  text-4xl">Twiinkle</h2>
          </div>

          <div className="flex justify-center items-center flex-col  mt-6">
            <p className="p text-md leading-snug md:leading-none  px-3 md:text-center text-center md:px-4 md:text-2xl ">
              Already got a twiinkle account, just login to access all your
              musings, twiinkles and more
            </p>
            <div className="mt-5 font-bold">
              <h2 className="text-5xl playfair">SignIn</h2>
            </div>
          </div>

          <form
            onSubmit={(e) => onSignIn(e)}
            className="flex justify-center items-center mt-5 gap-4 flex-col"
          >
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={setEmail}
              required
              placeholder="Enter Email"
            />
            {!forgotPasswordBtn && (
              <>
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
              </>
            )}

            <div>
              {forgotPasswordBtn ? (
                <button
                  type="button"
                  disabled={forgotPasswordBtnClicked}
                  onClick={(e) => onForgotPassword(e)}
                  className="text-xl bg-primaryPink text-white py-3 rounded-md  input-w"
                >
                  {forgotPasswordBtnClicked
                    ? "Sending the mail..."
                    : "Forgot Password"}
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-xl bg-primaryPink text-white py-3 rounded-md  input-field"
                >
                  Login
                </button>
              )}
            </div>
          </form>

          <div className="flex justify-center flex-col gap-2 items-center mt-3">
            <span>
              I just{" "}
              <button
                onClick={() => setForgotPasswordBtn((prev) => !prev)}
                className="underline hover:text-primaryPink"
              >
                {!forgotPasswordBtn ? "forgot password" : "got Password"}
              </button>
            </span>
            <span>
              Don't have an account,&nbsp;
              <Link href="/signup" className="underline hover:text-primaryPink">
                Signup
              </Link>
              &nbsp;then
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginForm;
