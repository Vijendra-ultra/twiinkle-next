"use client";
import { toast } from "react-toastify";
import { supabase } from "../SupabaseClient";
import { useRouter } from "next/navigation";
import { useStore } from "../store";

const Footer: React.FC = () => {
  const { setUser } = useStore();
  const navigate = useRouter();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out.Please try again later.");
    } else {
      toast.success("We miss you here. Comeback soon!");
      navigate.push("/login");
      setUser("");
    }
  };
  return (
    <div className="pt-6 sm:px-12 text-black bg-footerColor footer">
      <div className="md:pl-0 pl-3">
        <h2 className="inter--font text-4xl">Twiinkle</h2>
      </div>
      <div className="flex md:flex-row flex-col md:gap-12 md:mt-8 mt-3 pl-3 md:pl-0">
        <div className="pt-3 inter--font pl-1 flex flex-col gap-1  md:items-center footer-link">
          <h3 className="text-2xl font-bold">Important</h3>
          <div className="flex md:mt-3 gap-1.5  flex-col">
            <span>
              <button onClick={handleLogout}>Logout?</button>
            </span>
            <span>About</span>
            <span className="footer-link">Need Help</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="pt-3 inter--font pl-1 flex flex-col gap-1 md:items-center footer-link">
          <h3 className="text-2xl font-bold">Contribute</h3>
          <div className="flex gap-1.5  md:mt-3 flex-col">
            <span>I found bug</span>
            <span>Contribute</span>
            <span>Improve</span>
            <span className="footer-link">Suggestions</span>
          </div>
        </div>
        <div className="pt-3 inter--font  pl-1 flex flex-col gap-1 md:items-center footer-link">
          <h3 className="text-2xl font-bold">Related ..</h3>
          <div className="flex md:mt-3 gap-1.5 flex-col">
            <span>Share</span>
            <span>Why twiinkle</span>
            <span className="footer-link">Fund us</span>
            <span className="footer-link">IDK</span>
          </div>
        </div>
        <div className="pt-3 md:mb-0 mb-5 pl-1 inter--font flex flex-col gap-1 footer-link">
          <h3 className="text-2xl font-bold">YetToDecide</h3>
          <div className="flex md:mt-3 gap-1.5  flex-col">
            <span>Go random</span>
            <span>Fund X2</span>
            <span className="footer-link">BreakMe</span>
          </div>
        </div>
      </div>
      <div className="sm:justify-self-end md:px-0 px-3 md:pb-0 pb-4 sm:items-center">
        <h6 className="bg-lightPink pl-0.5 py-1 md:py-1.5 text-center md:p font-bold sm:font-normal text-sm">
          Created by a chaotic person with some extra ❤️
        </h6>
      </div>
    </div>
  );
};
export default Footer;
