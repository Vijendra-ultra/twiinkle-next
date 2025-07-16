"use client";
import { useState } from "react";
import LoadScreen from "../../miniComps/LoadScreen";
import { supabase } from "@/SupabaseClient";
import { useStore } from "@/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUserInfoStore } from "@/userInfoStore";

const UserProfileInfo: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [nature, setNature] = useState<string>("Select Nature");
  const [sex, setSex] = useState<string>("Select your sex");

  const { user } = useStore();
  const { profileInfoIsThere } = useUserInfoStore();
  const navigate = useRouter();
  const handleUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    if (isNaN(num)) {
      setAge("");
      return;
    }
    if (num > 100) {
      setAge("");
      return;
    }
    if (num === 0) {
      setAge("");
      return;
    }
    setAge(num);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user && user === "") {
      navigate.replace("/login");
      return;
    }

    const { error } = await supabase.from("user_profile_info").insert([
      {
        user_name: name.trim(),
        age: age.trim(),
        nick_name: nickname.trim(),
        user_id: user,
      },
    ]);

    if (error) {
      console.log(error.message);
      toast.error(
        "An error ocurred while saving your data,Please try again later"
      );
      return;
    } else {
      toast.success("Your profile is updated.");
      navigate.push("/explore");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#ffb3c6" }} className="min-h-screen ">
        <div className="flex justify-start items-center px-6 pt-3 pr-10">
          <h2 className="inter--font  text-4xl">Twiinkle</h2>
        </div>
        <div className="px-4">
          {profileInfoIsThere && (
            <div className=" flex-col  mt-6">
              <p className="p text-xl md:text-2xl mb-5 text-center">
                We know you already, so no worries!
              </p>
            </div>
          )}
          <div className=" flex-col  mt-6">
            <p className="p text-xl md:text-2xl mb-5 text-center">
              We want to know more about you to set up a super twiinkling space
            </p>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="flex justify-center items-center flex-col gap-3 mt-5"
          >
            <input
              className="input-field"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.trim())}
              required
              placeholder="Your name"
            />
            <input
              className="input-field"
              type="text"
              spellCheck={false}
              value={nickname}
              onChange={(e) => setNickname(e.target.value.trim())}
              required
              placeholder="Your nickname "
            />
            <input
              className="input-field"
              type="text"
              value={age}
              onChange={(e) => handleUserAge(e)}
              required
              placeholder="Your age "
            />
            <select
              value={nature}
              onChange={(e) => setNature(e.target.value)}
              className="input-field pr-2"
              required
            >
              <option value="" disabled className="pr-2">
                Select your nature
              </option>
              <option value="introvert">Introvert</option>
              <option value="extrovert">Extrovert</option>
              <option value="ambivert">Ambivert</option>
            </select>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="input-field pr-2"
              required
            >
              <option value="" disabled className="pr-2">
                Select your sex
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="unknown">Don't like to say</option>
            </select>

            <div>
              <button
                type="submit"
                className="text-xl bg-primaryPink text-white py-3 rounded-md  input-w"
              >
                Let's go
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default UserProfileInfo;
