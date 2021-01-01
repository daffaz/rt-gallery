import React from "react";

const Card = (props) => {
  const tags = props.image.tags.split(", ");

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg mt-5 md:mt-0 md:h-full">
      <img
        src={props.image.webformatURL}
        className="w-full"
        alt={props.image.user}
      />
      <div className="px-6 py-3 text-purple-500 font-bold text-xl">
        Photo by {props.image.user}
      </div>
      <div className="flex flex-col">
        <ul className="px-6 py-3">
          <li className="mb-1">
            <strong className="text-gray-600">Views: </strong>
            <span className="text-gray-700">{props.image.views}</span>
          </li>
          <li className="mb-1">
            <strong className="text-gray-600">Downloads: </strong>
            <span className="text-gray-700">{props.image.downloads}</span>
          </li>
          <li className="mb-1">
            <strong className="text-gray-600">Likes: </strong>
            <span className="text-gray-700">{props.image.likes}</span>
          </li>
        </ul>
        <div className="pt-4 pb-6 px-6 flex flex-grow-0 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-gray-600 py-1 px-3 text-sm bg-gray-200 font-bold mr-1 mt-3 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
