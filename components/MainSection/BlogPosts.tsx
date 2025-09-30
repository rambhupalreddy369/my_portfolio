"use client";
import * as React from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to manage state and side effects in functional components.",
      date: "2024-01-15",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Best practices for creating robust and scalable REST APIs using Node.js and Express.",
      date: "2024-01-10",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      excerpt:
        "Explore modern CSS features like Grid, Flexbox, and custom properties to create stunning layouts.",
      date: "2024-01-05",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Blog Posts
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          I write about web development, programming, and technology trends.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">
                {post.title}
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span>{post.readTime}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                {post.excerpt}
              </p>
              <Button variant="link" className="p-0 mt-4">
                Read More →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
