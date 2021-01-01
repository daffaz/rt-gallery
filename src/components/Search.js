import React, { useState } from "react";

const Search = ({ keyword }) => {
  const [text, setText] = useState("");
  const submit = (e) => {
    e.preventDefault();
    keyword(text);
  };
  return (
    <div className="border-b-2 border-purple-300 mt-8 py-2 px-1">
      <form onSubmit={submit} method="POST">
        <input
          type="text"
          className="focus:outline-none tracking-wider"
          placeholder="Search photos..."
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-400 text-white uppercase text-sm tracking-wider py-2 px-4 rounded-md focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
