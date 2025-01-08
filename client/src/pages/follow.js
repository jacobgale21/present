import NavBar from "../nav";
import axios from "axios";
import { useEffect, useState } from "react";

function Follow() {
  const [nonfollowing, setNonFollowing] = useState([]);
  useEffect(() => {
    const getNonFollowing = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/users/getnonfollowing",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        await setNonFollowing(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNonFollowing();
  }, [setNonFollowing]);

  const follow = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/users/follow/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <header className="text-3xl font-bold py-6 px-4 bg-gray-800 shadow-md">
        Follow
      </header>
      <div className="p-4 flex flex-col items-center space-y-6">
        {nonfollowing?.map((user) => (
          <div
            key={user._id}
            className="flex items-center w-60 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-400"
          >
            {/* User Info */}
            <div className="flex-1">
              <p className="text-lg font-semibold">{user.username}</p>
            </div>

            {/* Follow Button */}
            <button
              onClick={() => follow(user._id)}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg"
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Follow;
