
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/data/blogData';
import BlogArticleView from '@/components/blog/BlogArticleView';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Ayodhya Divine Apartments</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={`https://ayanaprop.tech${post.featuredImage}`} />
        <meta property="og:url" content={`https://ayanaprop.tech/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="twitter:image" content={`https://ayanaprop.tech${post.featuredImage}`} />
        <link rel="canonical" href={`https://ayanaprop.tech/blog/${post.slug}`} />
        
        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.summary,
            "image": `https://ayanaprop.tech${post.featuredImage}`,
            "datePublished": post.publishDate,
            "dateModified": post.publishDate,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Ayana Proptech LLP",
              "logo": "https://ayanaprop.tech/lovable-uploads/efd14b6f-c4dc-4d8a-a455-1549c8bd9fc2.png"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://ayanaprop.tech/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>
      <BlogArticleView 
        post={post} 
        onBackToList={() => window.history.back()} 
      />
    </>
  );
};

export default BlogPost;
