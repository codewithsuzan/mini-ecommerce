import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { useProductStore } from "../store/product.js";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    alert(success ? `Success: ${message}` : `Error: ${message}`);
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    setIsModalOpen(false);
    alert(success ? "Product updated successfully!" : `Error: ${message}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:translate-y-[-5px]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-66 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-xl font-semibold text-gray-700 mb-4">
          ${product.price}
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FaEdit className="mr-2" />
            Edit
          </button>
          <button
            onClick={() => handleDeleteProduct(product._id)}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            <FaTrashAlt className="mr-2" />
            Delete
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Update Product</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                placeholder="Price"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    image: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
