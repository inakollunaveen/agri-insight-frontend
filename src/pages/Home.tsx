import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sprout, Leaf, Target } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-primary/10 p-6 rounded-full">
              <Sprout className="h-16 w-16 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Smart Crop Advisory
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered farming guidance for modern agriculture
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 mb-12">
            <Card className="p-6 text-center bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Smart Recommendations</h3>
              <p className="text-muted-foreground">AI-driven crop suggestions based on your soil and climate</p>
            </Card>
            
            <Card className="p-6 text-center bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Precision Farming</h3>
              <p className="text-muted-foreground">Detailed planning and monitoring for maximum yield</p>
            </Card>
            
            <Card className="p-6 text-center bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <Sprout className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Growth Tracking</h3>
              <p className="text-muted-foreground">Monitor your crops and get timely guidance</p>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-xl">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;