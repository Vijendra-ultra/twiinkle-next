"use client";
import { useState } from "react";
import LoadScreen from "../../miniComps/LoadScreen";
import { supabase } from "@/SupabaseClient";
import { useStore } from "@/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UserProfileInfo: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [nature, setNature] = useState<string>("Select Nature");
  const [sex, setSex] = useState<string>("Select your sex");
  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useStore();
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
      navigate.push("/login");
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("user_profile_info")
      .insert([
        { user_name: name, age: age, nick_name: nickname, user_id: user },
      ]);

    if (error) {
      setLoading(false);
      console.log(error.message);
      toast.error(
        "An error ocurred while saving your data,Please try again later"
      );
      return;
    } else {
      setLoading(false);
      toast.success("Your profile is updated.");
      navigate.push("/explore");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#ffb3c6" }} className="min-h-screen">
        <div className="flex justify-start items-center px-6 pt-3 pr-10">
          <h2 className="inter--font  text-4xl">Twiinkle</h2>
        </div>
        {!loading && (
          <>
            <div className="flex justify-center items-center flex-col  mt-6">
              <p className="p text-2xl mb-5 ">
                We want to know more about you to set up a super twiinkling
                space
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
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
              <input
                className="input-field"
                type="text"
                spellCheck={false}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
                placeholder="Your nickname "
              />
              <input
                className="input-field"
                type="text"
                value={age}
                onChange={(e) => handleUserAge(e)}
                required
                placeholder="Your age (<100)"
              />
              <select
                value={nature}
                onChange={(e) => setNature(e.target.value)}
                className="input-field pr-2"
                required
                defaultValue=""
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
                defaultValue=""
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
          </>
        )}
        {loading && <LoadScreen />}
      </div>
    </>
  );
};
export default UserProfileInfo;
