import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  link: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Design",
    date: "April 1, 2024",
    category: "Design",
    excerpt: "Exploring upcoming trends in web design and how they will shape the future of digital experiences.",
    image: "/images/student-2.png",
    link: "#"
  },
  {
    id: 2,
    title: "Building Accessible Websites",
    date: "March 28, 2024",
    category: "Development",
    excerpt: "A comprehensive guide to creating websites that are accessible to everyone.",
    image: "/images/student-3.png",
    link: "#"
  },
  {
    id: 3,
    title: "Design Systems 101",
    date: "March 25, 2024",
    category: "Design",
    excerpt: "Understanding the basics of design systems and how they improve workflow.",
    image: "/images/student-4.png",
    link: "#"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="pt-20 px-8 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="space-y-12">
          {posts.map(post => (
            <article key={post.id} className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  <a href={post.link} className="hover:text-gray-600 transition-colors">
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={post.link}
                  className="inline-block text-black font-bold hover:text-gray-600 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 