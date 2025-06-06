
import { useState } from "react";
import { Calendar, Tag, User, ArrowRight, Clock, ExternalLink } from "lucide-react";
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
    title: "Why Ayodhya Real Estate Prices Could Jump 5X: Studio Apartment Guide 2025",
    slug: "ayodhya-real-estate-prices-5x-jump-studio-apartment-guide-2025",
    summary: "Ayodhya real estate is experiencing unprecedented growth, with a remarkable compound annual growth rate (CAGR) of 19% that experts project could reach 25% by 2035. Discover why studio apartments could be the next big investment opportunity.",
    content: `
      <div class="prose max-w-none">
        <p class="lead">Ayodhya real estate is experiencing unprecedented growth, with a remarkable compound annual growth rate (CAGR) of 19% that experts project could reach 25% by 2035. Land values in prime locations like the Sarayu riverfront and Ram Mandir corridor have already appreciated more than 4.5 times between 2020 and 2025.</p>
        
        <p>This explosive growth isn't happening by chance. The Uttar Pradesh government is investing ₹85,000 crores in redeveloping Ayodhya, transforming it into a major economic and tourism hub.</p>
        
        <p>The real estate news today from Ayodhya points to significant celebrity interest as well, with Amitabh Bachchan purchasing a 25,000 sq ft land parcel for nearly ₹40 crore. News Ayodhya residents are celebrating centers around the city's infrastructure boom, including the new Maharishi Valmiki International Airport (built at ₹1,462.97 crore) and the modernized Ayodhya Dham railway station (upgraded at ₹430 crores).</p>

        <h2>Ayodhya's Cultural Revival and Its Impact on Real Estate</h2>
        
        <p>The consecration of the Ram Mandir in January 2024 marked a pivotal moment in Ayodhya's cultural renaissance. This historic event has fundamentally altered the city's economic landscape, particularly in the real estate sector.</p>
        
        <h3>Ram Mandir inauguration and spiritual tourism</h3>
        <p>The Ram Mandir's inauguration has sparked unprecedented interest in Ayodhya's property market. What was once primarily agricultural land has rapidly transformed into prime real estate territory. Local real estate developers report that land parcels within a 5-kilometer radius of the temple have seen the most dramatic price appreciation, sometimes doubling in value within months after the inauguration.</p>
        
        <h3>Rise in hospitality and pilgrimage infrastructure</h3>
        <p>Hospitality infrastructure is expanding at a breakneck pace to accommodate the influx of devotees and tourists. Major hotel chains are scrambling to establish a foothold in the holy city, recognizing the long-term potential of this emerging market.</p>

        <h2>Massive Infrastructure Push Fueling Property Demand</h2>
        
        <h3>Ayodhya International Airport and connectivity boost</h3>
        <p>The Maharishi Valmiki International Airport, inaugurated on December 30, 2023, by Prime Minister Narendra Modi, represents a game-changer for Ayodhya property accessibility. Located just 8 km from the Ram Temple, this ₹1450 crore investment has transformed Ayodhya into an international destination.</p>
        
        <h3>Government's ₹85,000 crore investment plan</h3>
        <p>The government's ambitious Master Plan 2031, allocating ₹85,000 crore to transform the city into an economic and tourism hub, encompasses comprehensive development. The plan reserves 1,100 acres for residential, commercial, and retail development, creating prime opportunities for investors.</p>

        <h2>Why Studio Apartments Are Gaining Popularity in Ayodhya</h2>
        
        <p>Studio apartments are emerging as the hottest property segment in Ayodhya's booming real estate landscape. The stark reality: only 590 hotel rooms are currently available against a projected 10 crore+ annual pilgrims. This creates unprecedented investment potential.</p>
        
        <h3>High rental yield potential near temple zones</h3>
        <p>The rental economics are particularly compelling. Basic accommodations near Ayodhya already command ₹1,500-₹3,000 per night, while homestay options can generate approximately ₹45,000 monthly. Premium studio apartments near Shri Ram Mandir could potentially yield ₹60,000-₹90,000 in monthly rentals.</p>

        <h2>Can Ayodhya Property Prices Really Jump 5X?</h2>
        
        <p>Examining the data reveals both promising signals and cautionary flags. Land in the Faizabad Road area jumped from ₹400-700 per sq. ft. in 2019 to ₹1,500-3,000 per sq. ft. by October 2023, while properties within city limits surged from ₹1,000-2,000 per sq. ft. to ₹4,000-6,000 per sq. ft.</p>

        <h2>A Balanced Perspective on Ayodhya's Real Estate Future</h2>
        
        <p>Ayodhya stands at a pivotal crossroads in its development journey. The data certainly supports the possibility of a 5X price jump over the next decade, especially for strategically located properties near the Ram Mandir or along the Sarayu riverfront.</p>
        
        <p>Studio apartments represent the sweet spot in Ayodhya's property landscape. Their affordability, combined with exceptional rental yield potential, makes them particularly attractive for those seeking entry into this booming market.</p>
        
        <div class="bg-golden-50 p-6 rounded-lg border border-golden-200 mt-8">
          <h3 class="text-lg font-semibold text-golden-800 mb-2">Investment Opportunity</h3>
          <p class="text-golden-700">Interested in exploring these lucrative investment opportunities? Contact our experts to learn more about current projects and potential returns in this rapidly evolving market.</p>
          <a href="/#contact" class="inline-flex items-center gap-2 mt-4 bg-golden-500 text-white px-4 py-2 rounded-lg hover:bg-golden-600 transition-colors">
            Contact Us <ExternalLink class="h-4 w-4" />
          </a>
        </div>
      </div>
    `,
    category: "Investment",
    author: "Ayana Proptech Research Team",
    publishDate: "2025-01-15",
    featuredImage: "/lovable-uploads/ea9f19a4-7f3f-42c3-8bdc-b08bd5906066.png",
    tags: ["Real Estate Growth", "Investment Analysis", "Studio Apartments", "Market Trends"],
    readTime: "12 min read"
  },
  {
    id: 2,
    title: "Ram Mandir Impact: Real Estate Boom in Sacred City",
    slug: "ram-mandir-real-estate-boom-ayodhya",
    summary: "Analyzing the transformative effect of Ram Mandir on Ayodhya's real estate market and future growth prospects following the historic inauguration.",
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
    summary: "Comprehensive overview of state and central government initiatives that are accelerating Ayodhya's transformation into a modern pilgrimage destination.",
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
    summary: "Essential guide for Non-Resident Indians looking to invest in Ayodhya's booming real estate market with special focus on legal and financial considerations.",
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
  const [selectedPost, setSelectedPost] = useState(null);
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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

  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

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
                  <button onClick={() => setSelectedPost(null)}>Blog & News</button>
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
                  onClick={() => setSelectedPost(null)}
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
  }

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
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-golden-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-golden-100 hover:text-golden-700 shadow-md hover:shadow-lg"
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
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedPost(post.id)}
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
            className="inline-flex items-center gap-2 bg-golden-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-golden-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
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
