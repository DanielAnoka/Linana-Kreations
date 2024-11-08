import { useState } from 'react';

const AdminDashboard = () => {
  const [categories, setCategories] = useState(['Wedding Gown', 'Evening Dress', 'Summer Dress']);
  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadedImages, setUploadedImages] = useState({});

  // Handle new category addition
  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  // Handle image upload
  const handleUploadImage = (e) => {
    e.preventDefault();
    if (image && selectedCategory) {
      setUploadedImages((prevImages) => ({
        ...prevImages,
        [selectedCategory]: [
          ...(prevImages[selectedCategory] || []),
          URL.createObjectURL(image),
        ],
      }));
      setImage(null);
      setImagePreview(null);
    }
  };

  // Handle image deselection
  const handleImageUnselect = () => {
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4 sm:p-10">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl mx-auto mt-7 border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Admin Dashboard</h2>

        {/* Category Selection */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-lg font-semibold mb-2 text-gray-700">Select Category</label>
          <select
            id="category"
            className="border border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-lg w-full p-3 transition duration-150 ease-in-out"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Add New Category */}
        <div className="mb-6">
          <label htmlFor="newCategory" className="block text-lg font-semibold mb-2 text-gray-700">Add New Category</label>
          <div className="flex space-x-3">
            <input
              type="text"
              id="newCategory"
              placeholder="New Category"
              className="border border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-lg w-full p-3 transition duration-150 ease-in-out"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button
              onClick={handleAddCategory}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-150 ease-in-out"
            >
              Add
            </button>
          </div>
        </div>

        {/* Image Upload with File Picker */}
        <div className="mb-6">
          <label htmlFor="imageUpload" className="block text-lg font-semibold mb-2 text-gray-700">Upload Image</label>
          <div className="border border-gray-300 rounded-lg p-4 text-center">
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              onChange={handleImageChange}
              disabled={!selectedCategory}
            />
            <label
              htmlFor="imageUpload"
              className="cursor-pointer text-gray-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                    onClick={handleImageUnselect} 
                  />
                  <button
                    onClick={handleImageUnselect}
                    className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 text-sm hover:bg-red-700"
                  >
                    X
                  </button>
                </div>
              ) : (
                <p className="text-lg">Click to upload an image</p>
              )}
            </label>
          </div>

          {/* Upload Button */}
          <button
            onClick={handleUploadImage}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-150 ease-in-out"
            disabled={!selectedCategory || !image}
          >
            Upload
          </button>
        </div>

        {/* Uploaded Images */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Uploaded Images in {selectedCategory || "No Category Selected"}</h3>
          <div className="grid grid-cols-2 gap-4">
            {(uploadedImages[selectedCategory] || []).map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img}
                  alt={`Uploaded in ${selectedCategory}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
