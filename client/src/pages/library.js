import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../nav";

function Library() {
  const [libraries, setLibraries] = useState([]);
  const [title, setTitle] = useState("");
  const [clicked, setClicked] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getLibraries = async () => {
      const response = await axios.get(
        `http://localhost:3001/library/get/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setLibraries(response.data);
    };
    getLibraries();
  }, [setLibraries]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/library/post/${id}`,
        { title },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTitle("");
      setClicked(false);
      console.log(clicked);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />

      {/* Header */}
      <header className="text-3xl font-bold py-6 px-4 bg-gray-800 shadow-md flex items-center justify-between">
        <span>Photo Libraries</span>
        <button
          onClick={() => {
            setClicked(true);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg"
        >
          Create Library
        </button>
      </header>

      {/* Content */}
      <div className="p-6">
        {clicked ? (
          <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg"
            >
              <header className="text-2xl font-bold text-white mb-8">
                Create Library
              </header>
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block text-gray-300 text-md font-bold mb-2"
                >
                  Title
                </label>
                <input
                  id="tit"
                  le
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            {libraries.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {libraries.map((library) => (
                  <div
                    key={library._id}
                    className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:bg-gray-700 transition duration-200"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-w-1 aspect-h-1 bg-gray-700">
                      <img
                        // src={library.thumbnail || "https://via.placeholder.com/150"}
                        alt={library.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* library Info */}
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2">
                        {library.title}
                      </h2>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg">
                        View library
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center">
                No photo Libraries available.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default Library;
