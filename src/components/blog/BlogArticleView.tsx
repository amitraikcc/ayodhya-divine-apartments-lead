import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Calendar, Tag, User, Clock, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BlogPost } from '@/data/blogData';

interface BlogArticleViewProps {
  post: BlogPost;
  onBackToList: () => void;
}

const BlogArticleView: React.FC<BlogArticleViewProps> = ({ post, onBackToList }) => {
  const navigate = useNavigate();

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

  const handleBackToList = () => {
    navigate('/blog');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-golden-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/blog">Blog & News</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <Badge className={`${getCategoryColor(post.category)} mb-4 shadow-lg`}>
                  {post.category}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Article Meta */}
            <div className="p-8 bg-gray-50 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-golden-600" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-IN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-golden-600" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-golden-600" />
                  <span className="text-golden-700 font-semibold">{post.readTime}</span>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs hover:bg-golden-50 transition-colors">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>

            {/* Article Footer */}
            <div className="p-8 bg-gradient-to-r from-golden-50 to-orange-50 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <button
                  onClick={handleBackToList}
                  className="inline-flex items-center gap-2 text-golden-600 hover:text-golden-700 font-semibold transition-colors duration-300 group"
                >
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to All Articles
                </button>
                
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Share this article:</span>
                  <div className="flex gap-2 mt-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-blue-200 transition-colors">
                      Facebook
                    </button>
                    <button className="px-3 py-1 bg-blue-400 text-white rounded-full text-xs hover:bg-blue-500 transition-colors">
                      Twitter
                    </button>
                    <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs hover:bg-green-200 transition-colors">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogArticleView;
