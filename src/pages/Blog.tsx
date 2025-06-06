
import { useState } from "react";
import { Calendar, Tag, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Sample blog posts data - you can easily add new articles here
const blogPosts = [
  {
    id: 1,
    title: "Ayodhya's Infrastructure Revolution: What Investors Need to Know",
    slug: "ayodhya-infrastructure-revolution-investors-guide",
    summary: "Discover how the massive infrastructure development in Ayodhya is creating unprecedented investment opportunities for real estate investors.",
    content: "Full article content would go here...",
    category: "Investment",
    author: "Ayana Proptech Team",
    publishDate: "2025-01-10",
    featuredImage: "/lovable-uploads/167aa7af-5a44-4ea8-a7e5-cb4893655be0.png",
    tags: ["Infrastructure", "Investment", "Ayodhya Development"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Ram Mandir Impact: Real Estate Boom in Sacred City",
    slug: "ram-mandir-real-estate-boom-ayodhya",
    summary: "Analyzing the transformative effect of Ram Mandir on Ayodhya's real estate market and future growth prospects.",
    content: "Full article content would go here...",
    category: "Real Estate",
    author: "Market Research Team",
    publishDate: "2025-01-08",
    featuredImage: "/lovable-uploads/efd14b6f-c4dc-4d8a-a455-1549c8bd9fc2.png",
    tags: ["Ram Mandir", "Real Estate", "Spiritual Tourism"],
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Government Policies Driving Ayodhya's Growth",
    slug: "government-policies-ayodhya-development",
    summary: "Comprehensive overview of state and central government initiatives that are accelerating Ayodhya's transformation.",
    content: "Full article content would go here...",
    category: "Government",
    author: "Policy Analysis Team",
    publishDate: "2025-01-05",
    featuredImage: "/lovable-uploads/6509d8fd-6eb7-4828-8ed0-5e3e5358e712.png",
    tags: ["Government Policy", "Urban Development", "Smart City"],
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "NRI Investment Guide: Ayodhya Real Estate Opportunities",
    slug: "nri-investment-guide-ayodhya-real-estate",
    summary: "Essential guide for Non-Resident Indians looking to invest in Ayodhya's booming real estate market.",
    content: "Full article content would go here...",
    category: "NRI",
    author: "Investment Advisory",
    publishDate: "2025-01-03",
    featuredImage: "/lovable-uploads/0893d1cf-499b-4378-90a8-6687e08b301c.png",
    tags: ["NRI Investment", "International Buyers", "Property Laws"],
    readTime: "8 min read"
  }
];

const categories = ["All", "Real Estate", "Investment", "Government", "NRI", "Ayodhya News"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Real Estate": "bg-blue-100 text-blue-800",
      "Investment": "bg-green-100 text-green-800",
      "Government": "bg-purple-100 text-purple-800",
      "NRI": "bg-orange-100 text-orange-800",
      "Ayodhya News": "bg-pink-100 text-pink-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-golden-50">
      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Ayodhya Divine Apartments Blog & News",
          "description": "Latest news and insights about Ayodhya real estate, investment opportunities, and development updates",
          "url": "https://ayanaprop.tech/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Ayana Proptech LLP",
            "logo": "https://ayanaprop.tech/lovable-uploads/efd14b6f-c4dc-4d8a-a455-1549c8bd9fc2.png"
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.summary,
            "image": `https://ayanaprop.tech${post.featuredImage}`,
            "datePublished": post.publishDate,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Ayana Proptech LLP"
            }
          }))
        })}
      </script>

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

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog & <span className="text-golden-600">News</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, market trends, and development news 
            about Ayodhya's real estate revolution and investment opportunities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-golden-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-golden-100 hover:text-golden-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg overflow-hidden"
            >
              {/* Featured Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-golden-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h2>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString('en-IN')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <span className="text-golden-600 font-medium">{post.readTime}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-golden-600 hover:text-golden-700 font-semibold transition-colors duration-300 group"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </CardContent>
            </Card>
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
            to="/#contact"
            className="inline-flex items-center gap-2 bg-golden-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-golden-600 transition-colors duration-300"
          >
            Contact Our Experts
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
