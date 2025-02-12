import React from "react";
import NavBar from "../nav";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("http://localhost:3001/users/getuser", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsername(response.data.username);
      setFollowers(response.data.followers.length);
      setFollowing(response.data.following.length);
    };

    const getPosts = async () => {
      const postresponse = await axios.get(
        "http://localhost:3001/posts/getsent",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPosts(postresponse.data);
    };
    getPosts();
    getUser();
  }, [setUsername, setFollowers, setFollowing, setPosts]);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      {/* Profile Header */}
      <div className="bg-gray-800 py-6 px-6 shadow-md">
        <div className="flex flex-col items-center space-y-3">
          {/* Profile Picture */}
          <img
            // src={user.profilePicture || "https://via.placeholder.com/100"}

            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
          />

          {/* User Info */}
          <h1 className="text-3xl font-bold">{username}</h1>
          <p className="text-gray-400 text-sm"></p>
        </div>
      </div>

      <div className="flex justify-center space-x-12 py-6 bg-gray-800">
        <div className="text-center">
          <p className="text-2xl font-bold">{followers}</p>
          <p className="text-sm text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{following}</p>
          <p className="text-sm text-gray-400">Following</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{posts.length}</p>
          <p className="text-sm text-gray-400">Posts</p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Your Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.imageURL}
                  alt="Post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-100 font-semibold">{post.caption}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">You haven’t created any posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
