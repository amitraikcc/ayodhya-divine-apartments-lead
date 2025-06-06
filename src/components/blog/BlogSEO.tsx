
import React from 'react';
import { blogPosts } from '@/data/blogData';

const BlogSEO = () => {
  return (
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
  );
};

export default BlogSEO;
