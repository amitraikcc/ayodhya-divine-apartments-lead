
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { blogPosts } from "@/data/blogData";
import BlogHeader from "@/components/blog/BlogHeader";
import CategoryFilter from "@/components/blog/CategoryFilter";
import BlogCard from "@/components/blog/BlogCard";
import BlogSEO from "@/components/blog/BlogSEO";
import Footer from "@/components/Footer";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handlePostClick = (postId: number) => {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
      navigate(`/blog/${post.slug}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog & News - Ayodhya Real Estate Investment Guide | Latest Updates</title>
        <meta name="description" content="Latest news, insights and investment guides about Ayodhya real estate market. Expert analysis on studio apartments, government development and investment opportunities." />
        <meta property="og:title" content="Blog & News - Ayodhya Real Estate Investment Guide" />
        <meta property="og:description" content="Latest news and investment insights about Ayodhya real estate market." />
        <meta property="og:url" content="https://ayanaprop.tech/blog" />
        <link rel="canonical" href="https://ayanaprop.tech/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-golden-50">
        <BlogSEO />

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
                <BreadcrumbPage>Blog & News</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <BlogHeader />

          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post) => (
              <BlogCard 
                key={post.id}
                post={post}
                onPostClick={handlePostClick}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Invest in Ayodhya's Future?
            </h3>
            <p className="text-gray-600 mb-6">
              Get expert guidance on the best investment opportunities in Ayodhya's booming real estate market.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-golden-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-golden-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Our Experts
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
