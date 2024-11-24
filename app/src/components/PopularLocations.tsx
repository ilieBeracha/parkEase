import { Star } from "lucide-react";
import parking1 from "../assets/images/exampleImgParking1.webp";
import parking2 from "../assets/images/exampleImgParking2.jpeg";
import parking3 from "../assets/images/exampleImgParking3.jpeg";

const locations = [
  {
    image: parking1,
    title: "Private Residence Parking",
    price: 5.0,
    rating: 4.9,
    reviews: 120,
  },
  {
    image: parking2,
    title: "Downtown Private Garage",
    price: 7.0,
    rating: 4.8,
    reviews: 200,
  },
  {
    image: parking3,
    title: "Suburban Private Lot",
    price: 4.0,
    rating: 4.6,
    reviews: 150,
  },
];

export default function PopularLocations() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Popular Parking Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
              <div className="relative h-48">
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {location.title}
                </h3>

                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-gray-700">{location.rating}</span>
                  <span className="text-gray-400">
                    ({location.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${location.price.toFixed(2)}/hr
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
