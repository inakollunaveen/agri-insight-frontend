import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  Sprout, 
  Leaf, 
  Target, 
  TrendingUp, 
  Users, 
  Shield, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
  Send,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import heroImage from "../assets/hero-farmland.jpg";
import farmerPortrait from "../assets/farmer-portrait.jpg";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {/* Navigation */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border/40 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Sprout className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-primary">AgriPlus AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild variant="ghost" className="text-primary hover:text-primary-hover">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary-hover text-primary-foreground">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border/40 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="block text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="flex space-x-4 pt-4 border-t border-border/40">
                <Button asChild variant="ghost" className="text-primary hover:text-primary-hover">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Grow Smarter with AI
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
                Personalized crop advice, plans, and market insights for farmers
              </p>
            </div>
            
            <div className="pt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link to="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Smart Farming Made Simple
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to make informed farming decisions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/60 hover:border-accent/50">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">AI Crop Recommendation</h3>
                <p className="text-muted-foreground">Smart crop suggestions based on your soil, climate, and local conditions</p>
              </Card>
              
              <Card className="p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/60 hover:border-accent/50">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">Crop Plans & Schedules</h3>
                <p className="text-muted-foreground">Detailed planting, care, and harvesting schedules for maximum yield</p>
              </Card>
              
              <Card className="p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/60 hover:border-accent/50">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">Local Market & Vendor Details</h3>
                <p className="text-muted-foreground">Real-time market prices and trusted local vendor connections</p>
              </Card>
              
              <Card className="p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/60 hover:border-accent/50">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">Government Schemes & Loans</h3>
                <p className="text-muted-foreground">Access to government schemes, subsidies, and agricultural loan programs</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  About AgriPlus
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is simple: helping farmers make better decisions using AI technology. 
                  We combine traditional farming wisdom with modern artificial intelligence to provide 
                  personalized guidance that increases crop yields and farmer prosperity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Farmer-First Approach</h3>
                    <p className="text-muted-foreground">Built by farmers, for farmers - understanding real field challenges</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Data-Driven Insights</h3>
                    <p className="text-muted-foreground">AI-powered recommendations based on local climate, soil, and market data</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Complete Support</h3>
                    <p className="text-muted-foreground">From planning to harvest, with access to schemes and financial support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={farmerPortrait} 
                  alt="Happy farmer with fresh crops" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2">10,000+</h3>
                <p className="text-sm font-medium">Happy Farmers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions? We're here to help you grow smarter
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 bg-card border-border/60">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Send us a message</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <Input placeholder="Your name" className="bg-background border-border" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input type="email" placeholder="your.email@example.com" className="bg-background border-border" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us how we can help you..." 
                        rows={5}
                        className="bg-background border-border resize-none"
                      />
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="p-6 bg-card border-border/60">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Helpline</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-sm text-muted-foreground">24/7 Support Available</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border/60">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">support@agriplus.ai</p>
                      <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border/60">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-muted-foreground">Hyderabad, Telangana</p>
                      <p className="text-sm text-muted-foreground">Serving farmers across India</p>
                    </div>
                  </div>
                </Card>

                {/* Social Media */}
                <div className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg transition-colors group"
                    >
                      <Facebook className="h-6 w-6 text-primary group-hover:text-accent-foreground" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg transition-colors group"
                    >
                      <MessageSquare className="h-6 w-6 text-primary group-hover:text-accent-foreground" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg transition-colors group"
                    >
                      <Twitter className="h-6 w-6 text-primary group-hover:text-accent-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border/40 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xl font-bold text-primary">AgriPlus</span>
              </div>
              <p className="text-muted-foreground">
                Empowering farmers with AI-driven insights for sustainable and profitable farming.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-card-foreground">Quick Links</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  About
                </button>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-semibold text-card-foreground">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-semibold text-card-foreground">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg transition-colors group"
                >
                  <Facebook className="h-5 w-5 text-primary group-hover:text-accent-foreground" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg transition-colors group"
                >
                  <MessageSquare className="h-5 w-5 text-primary group-hover:text-accent-foreground" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg transition-colors group"
                >
                  <Twitter className="h-5 w-5 text-primary group-hover:text-accent-foreground" />
                </a>
              </div>
              <div className="space-y-2 pt-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">support@agriplus.ai</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/40 mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 AgriPlus. All rights reserved. Built with ❤️ for farmers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;