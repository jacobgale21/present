import NavBar from "../nav";
import axios from "axios";
import { useState, useEffect } from "react";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/posts/getposts`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        await setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [setPosts]);
  return (
    <div>
      <NavBar />
      <header className="text-3xl font-bold text-gray-800 py-6 px-4 bg-gray-100 shadow-md">
        Posts
      </header>
      <div className="flex flex-col space-y-6 p-4 bg-gray-50 min-h-screen">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 max-w-md mx-auto"
          >
            {/* Image Section */}
            <div className="w-full bg-gray-200 flex items-center justify-center">
              <img
                src={post.imageURL}
                alt="Post"
                className="max-w-xs max-h-xs object-contain"
              />
            </div>

            {/* Post Content */}
            <div className="p-4">
              <p className="text-gray-900 font-semibold mb-2">{post.caption}</p>
              <p className="text-sm text-gray-500 mb-2">{post.receiveName} </p>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
