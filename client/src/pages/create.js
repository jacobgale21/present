import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [imageURL, setImageURL] = useState("");
  const [caption, setCaption] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/posts/",
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <header className="text-4xl font-bold text-blue-500 mb-8">
        Create a Post
      </header>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="imageURL"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image URL
          </label>
          <input
            type="url"
            id="imageURL"
            placeholder="Enter image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="caption"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Caption
          </label>
          <textarea
            id="caption"
            placeholder="Enter description"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="3"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
