import React from "react";
import { Clock, ArrowRight, Heart, MessageCircle } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Urban Parking: Smart Solutions for Growing Cities",
    excerpt:
      "Discover how smart parking technologies are revolutionizing the way we park in urban areas.",
    image:
      "https://images.unsplash.com/photo-1566024287286-457247b70310?auto=format&fit=crop&q=80",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    date: "Mar 15, 2024",
    readTime: "5 min read",
    likes: 124,
    comments: 18,
    category: "Technology",
  },
  {
    id: 2,
    title: "5 Tips for Finding the Perfect Parking Spot Every Time",
    excerpt:
      "Expert advice on how to secure the best parking spots in busy urban areas.",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80",
    author: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
    date: "Mar 12, 2024",
    readTime: "4 min read",
    likes: 89,
    comments: 12,
    category: "Tips & Tricks",
  },
  {
    id: 3,
    title: "Sustainable Parking: How Green Infrastructure is Changing the Game",
    excerpt:
      "Exploring eco-friendly parking solutions and their impact on urban development.",
    image:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&q=80",
    author: {
      name: "Emma Davis",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    },
    date: "Mar 10, 2024",
    readTime: "6 min read",
    likes: 156,
    comments: 23,
    category: "Sustainability",
  },
];

export default function Blog() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights about
            parking solutions and urban mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {post.author.name}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-blue-600 transition">
                      <Heart className="h-5 w-5 mr-1" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600 transition">
                      <MessageCircle className="h-5 w-5 mr-1" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 transition font-medium">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            View All Posts
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
