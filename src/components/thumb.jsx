import React, { useState, useEffect } from 'react';


const ImageBox = () => {
  const [image, setImage] = useState(null);

  // Simulating a data fetch from an API or database
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example API call to fetch image data (replace with your actual API)
        const response = await axios.get('https://api.example.com/getImage'); // Replace with your actual API endpoint
        setImage(response.data.image); // Assuming the response contains the image URL
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" items-start h-10 bg-amber-200">
      <div className="w-37 h-37 bg-white p-4 shadow-lg rounded-lg border-2 border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Image Box</h2>

        {image ? (
          <img
            src={image} // Render the image
            alt="Fetched from API"
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <p className="text-red-500">Loading image...</p>
        )}
      </div>
    </div>
  );
};

export default ImageBox;
