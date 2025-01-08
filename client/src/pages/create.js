import React, { useState } from "react";
import axios from "axios";
import NavBar from "../nav";
import { useParams } from "react-router-dom";
function Create() {
  const [imageURL, setImageURL] = useState("");
  const [caption, setCaption] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/posts/${id}`,
        { imageURL, caption, date },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data, "Post created");
      setCaption("");
      setDate("");
      setImageURL("");
    } catch (err) {
      console.log("Error Posting", err.message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
        {/* Header */}
        <header className="text-4xl font-bold text-white mb-8">
          Create a Post
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg"
        >
          {/* Image URL */}
          <div className="mb-6">
            <label
              htmlFor="imageURL"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="imageURL"
              placeholder="Enter image URL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Date */}
          <div className="mb-6">
            <label
              htmlFor="date"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Caption */}
          <div className="mb-6">
            <label
              htmlFor="caption"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Caption
            </label>
            <textarea
              id="caption"
              placeholder="Enter description"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
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
    </div>
  );
}

export default Create;
