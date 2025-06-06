
import React from 'react';
import { Link } from "react-router-dom";
import { Calendar, Tag, User, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
                <button onClick={onBackToList}>Blog & News</button>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className={`${getCategoryColor(post.category)} mb-4`}>
                  {post.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Article Meta */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-IN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-golden-600 font-medium">{post.readTime}</span>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-golden-600 prose-a:font-medium hover:prose-a:text-golden-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Back to Blog */}
            <div className="p-8 bg-gray-50 border-t border-gray-200">
              <button
                onClick={onBackToList}
                className="inline-flex items-center gap-2 text-golden-600 hover:text-golden-700 font-semibold transition-colors duration-300"
              >
                ← Back to All Articles
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogArticleView;
