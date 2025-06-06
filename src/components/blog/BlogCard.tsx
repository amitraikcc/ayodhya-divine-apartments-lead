
import React from 'react';
import { Calendar, Tag, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BlogPost } from '@/data/blogData';

interface BlogCardProps {
  post: BlogPost;
  onPostClick: (postId: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onPostClick }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      "Real Estate": "bg-blue-100 text-blue-800 border-blue-200",
      "Investment": "bg-green-100 text-green-800 border-green-200",
      "Government": "bg-purple-100 text-purple-800 border-purple-200",
      "NRI": "bg-orange-100 text-orange-800 border-orange-200",
      "Ayodhya News": "bg-pink-100 text-pink-800 border-pink-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg overflow-hidden cursor-pointer"
      onClick={() => onPostClick(post.id)}
    >
      {/* Featured Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <Badge className={`${getCategoryColor(post.category)} shadow-md`}>
            {post.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="pb-3">
        <h2 className="text-xl font-bold text-gray-900 group-hover:text-golden-600 transition-colors duration-300 line-clamp-2 leading-tight">
          {post.title}
        </h2>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
          {post.summary}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{new Date(post.publishDate).toLocaleDateString('en-IN')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span className="text-golden-600 font-medium">{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs py-1 px-2">
              <Tag className="h-2 w-2 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>

        {/* Read More Link */}
        <div className="inline-flex items-center gap-2 text-golden-600 hover:text-golden-700 font-semibold transition-colors duration-300 group text-sm">
          Read Full Article
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
