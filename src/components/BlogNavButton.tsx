
import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";

const BlogNavButton = () => {
  return (
    <Link
      to="/blog"
      className="fixed bottom-24 right-6 z-40 bg-golden-500 hover:bg-golden-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group flex items-center gap-2"
      aria-label="Visit Blog & News"
    >
      <Newspaper className="h-6 w-6" />
      <span className="hidden lg:block font-semibold">Blog & News</span>
    </Link>
  );
};

export default BlogNavButton;
