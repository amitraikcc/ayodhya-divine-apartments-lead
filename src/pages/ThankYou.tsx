
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-golden-50 to-orange-50 flex items-center justify-center px-4">
      <Card className="max-w-md w-full shadow-xl border-golden-200">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              ✅ Thank you!
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've received your enquiry. Our team will contact you shortly.
            </p>
          </div>
          
          <Link to="/">
            <Button className="w-full bg-golden-500 hover:bg-golden-600 text-white font-semibold py-3 text-lg">
              Return to homepage
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;
