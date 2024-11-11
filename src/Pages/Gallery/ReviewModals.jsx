import React, { useState } from "react";

const ReviewModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Button to open the modal */}
      <button
        className="bg-orange-600 container mx-auto w-2/3 flex justify-center text-white py-2 px-4 rounded"
        onClick={handleShow}
      >
        Add Your Reviews
      </button>

      {/* Modal overlay and container */}
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
            <div className="px-4 py-3 bg-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Add Your Reviews</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <form>
                {/* Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-500"
                    placeholder="Mehmed Yead"
                    autoFocus
                  />
                </div>
                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-500"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </div>
                {/* Food Name */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Food Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-500"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="textarea"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Reviews
                  </label>
                  <textarea
                    id="textarea"
                    rows="3"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </form>
            </div>
            <div className="px-4 py-3 bg-gray-100 flex justify-end">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="bg-orange-600 text-white py-2 px-4 rounded"
                onClick={handleClose}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewModal;
