import { useState } from "react";
import { useProductStore } from "../store/product.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("Success:", success)
    console.log("Message:", message)
    toast(message, { type: success ? "success" : "error" });
    setNewProduct({name:"",price:"",image:""})
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ToastContainer /> {/* Ensure this is rendered */}
      <h1
        className={`text-2xl font-bold text-center mb-6 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Create New Product
      </h1>

      <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          />

          <button
            onClick={handleAddProduct}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
