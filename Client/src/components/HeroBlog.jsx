import React from "react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "10 Strategies to Master Digital Marketing",
    description:
      "Learn the top 10 strategies that will help you dominate the world of digital marketing in 2024.",
    image: "https://nbsl.org.uk/images/bullets/Digital-Marketing.jpg",
    url: "/blog/digital-marketing-strategies",
  },
  {
    id: 2,
    title: "The Growth Hacker's Playbook",
    description:
      "Discover how growth hacking can take your business to the next level with innovative tactics.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485462864i/31625067.jpg",
    url: "/blog/growth-hackers-playbook",
  },
  {
    id: 3,
    title: "SEO Best Practices for 2025",
    description:
      "Stay ahead of the competition by implementing these SEO best practices and techniques.",
    image:
      "https://www.ovrdrv.com/wp-content/uploads/2024/11/OVRDRV-FutureofSEO-2025Trends-Blog@2x.png",
    url: "/blog/seo-best-practices",
  },
  {
    id: 4,
    title: "Social Media Marketing: A Comprehensive Guide",
    description:
      "Learn the secrets to successful social media campaigns that drive engagement and conversions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGOr_yWyT9PF9TQlpvNAkfycRIuIjYBZiFA&s",
    url: "/blog/social-media-marketing-guide",
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  const handleBlogClick = (url) => {
    navigate(url); // Navigate to the blog's specific URL
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Digital Marketing & Growth Blogs
        </h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleBlogClick(blog.url)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  {blog.title}
                </h2>
                <p className="text-gray-600">{blog.description}</p>
                <button className="text-blue-500 hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={() => navigate("/blogs")}
          >
            Explore More Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
