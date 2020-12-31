import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Search from "./components/Search";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, [term]);

  console.log(term);
  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <Search keyword={(key) => setTerm(key)} />
      {!isLoading && images.length === 0 && (
        <span className="text-4xl mt-20">Images not found...</span>
      )}
      {isLoading ? (
        <span className="text-6xl ">Loading...</span>
      ) : (
        <div className="my-14 flex flex-col items-center md:grid md:grid-cols-3 md:gap-4 ">
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
