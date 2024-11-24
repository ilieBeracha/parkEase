import { Clock, CreditCard, Map, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "Rent private parking spaces by the hour, day, or week. Enjoy complete flexibility for your schedule.",
  },
  {
    icon: Shield,
    title: "Secure Parking",
    description:
      "All private parking spaces are verified and monitored, ensuring your vehicle's safety while you are away.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description:
      "A simple and secure payment process with multiple options, making it easy to rent from private owners.",
  },
  {
    icon: Map,
    title: "Prime Locations",
    description:
      "Find privately rented parking spots in the most convenient locations across the city.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose ParkEase?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-md transition group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
