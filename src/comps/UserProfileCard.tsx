import { user_info } from "@/types";
type userProfileCard = {
  fetchedInfo: user_info;
  u_id: string;
};
const UserProfileCard: React.FC<userProfileCard> = ({ fetchedInfo, u_id }) => {
  return (
    <div className="px-3">
      <div className="flex  items-center mt-6 gap-6 md:gap-40">
        <div>
          <img
            className="w-16 h-16 md:w-24 md:h-24 rounded-[50%] md:rounded-[121px] shadow-lg"
            src={"/Childhood.jpg"}
          />
        </div>
        <div>
          <h3 className="text-2xl md:text-4xl   inter--font lsp-username fw-max">
            {fetchedInfo.user_name}
          </h3>
        </div>
      </div>
      <div className="mt-6">
        <p className=" text-md md:text-xl text-gray-300">{u_id}</p>
        <h4 className="md:text-xl inter--font mt-3 font-semibold">
          {fetchedInfo.bio}
        </h4>
      </div>

      <div className="flex justify-start items-center mt-4 md:mt-6 gap-4">
        <button
          style={{ backgroundColor: "#d82359" }}
          className="px-2 md:px-4 py-1.5 md:py-2 text-xl  text-white rounded-md shadow-lg "
        >
          Follow
        </button>

        <button className="px-2 md:px-4 py-1.5 md:py-2  text-xl shadow-lg bg-gray-400 dark:text-black rounded-md">
          About
        </button>
      </div>
    </div>
  );
};
export default UserProfileCard;
