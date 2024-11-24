import React from "react";
import { ExternalLink } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Downtown Secure Parking",
    description: "24/7 monitored parking facility in the heart of downtown",
    image:
      "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&q=80",
    category: "Indoor",
  },
  {
    id: 2,
    title: "Airport Long-Term Parking",
    description: "Convenient airport parking with shuttle service",
    image:
      "https://images.unsplash.com/photo-1587955415504-2ccb6f0d261c?auto=format&fit=crop&q=80",
    category: "Outdoor",
  },
  {
    id: 3,
    title: "Shopping Center Parking",
    description: "Easy access parking for all your shopping needs",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80",
    category: "Indoor",
  },
  {
    id: 4,
    title: "Residential Area Parking",
    description: "Safe and secure parking in residential neighborhoods",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80",
    category: "Outdoor",
  },
  {
    id: 5,
    title: "Event Venue Parking",
    description: "Premium parking spaces for event attendees",
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80",
    category: "Indoor",
  },
  {
    id: 6,
    title: "Beach Parking",
    description: "Convenient parking spots near the beach",
    image:
      "https://images.unsplash.com/photo-1576661929310-a29e8fc38c7f?auto=format&fit=crop&q=80",
    category: "Outdoor",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Explore Our Parking Locations
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Take a virtual tour of our premium parking facilities across the city.
          Each location is carefully selected to provide you with the best
          parking experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
