import { useState } from "react";
// import { FaShareAlt, FaDownload } from 'react-icons/fa';
import { portfolioItems } from "../Data/Data"


const Lookbook = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const [loading, setLoading] = useState(false);

  const filteredPortfolio =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="py-16 bg-gray-100">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Portfolio</h2>

          {/* Filter Buttons */}
          <div className="mb-8 flex justify-center gap-4">
            {["all", "wedding", "evening", "casual"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-6 py-2 ${
                  activeFilter === filter
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                {loading ? (
                  <div className="h-96 w-full bg-gray-200 animate-pulse" />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-96 w-full object-cover transition duration-300 hover:scale-105"
                    onLoad={() => setLoading(false)}
                    onError={() => setLoading(false)}
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;
