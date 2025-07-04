"use client";
import { useStore } from "../store";

const NavBar: React.FC = () => {
  const { user } = useStore();

  return (
    <div className="flex justify-start items-center px-4 md:px-6 pt-3 pr-10">
      <h2 className="inter--font text-3xl md:text-4xl">Twiinkle</h2>
      <div className="ml-auto flex items-center justify-center gap-5">
        <button className="text-2xl ">
          {/* <Link to="/create">Explore</Link> */}
        </button>
        {!user && (
          <button className="text-2xl ">
            {/* <Link to="/signUp">Login</Link> */}
          </button>
        )}
      </div>
    </div>
  );
};
export default NavBar;
