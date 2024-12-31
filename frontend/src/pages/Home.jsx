import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-500">
          Current Products 🚀
        </h1>
      </div>

      {products.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-600">
            No products found 😢
          </p>
          <Link
            to="/create"
            className="text-blue-500 hover:underline font-bold"
          >
            Create a product
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
