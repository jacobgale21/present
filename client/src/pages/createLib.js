import NavBar from "../nav";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CreateLib() {
  const [following, setFollowing] = useState([]);
  useEffect(() => {
    const getFollowing = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/users/getfollowing",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        await setFollowing(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFollowing();
  }, [setFollowing]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <header className="text-3xl font-bold py-6 px-4 bg-gray-800 shadow-md">
        Create Library with User
      </header>
      <div className="p-4 space-y-6">
        {following?.map((user) => (
          <Link
            to={`/libraries/${user._id}`}
            key={user._id}
            className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-200"
          >
            {/* User Info */}
            <div>
              <p className="text-lg font-semibold">{user.username}</p>
              <p className="text-sm text-gray-400">Tap to send post</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CreateLib;
