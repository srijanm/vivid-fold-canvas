import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";
import productImage from "@/assets/product.png";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
        <div 
          className={`text-center z-10 px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img 
            src={logo} 
            alt="The Whole Truth" 
            className="w-48 h-auto mx-auto mb-12 drop-shadow-2xl"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
            GUILT FREE
            <br />
            <span className="text-blue-deep">LIVING</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-foreground/90 max-w-2xl mx-auto">
            Real food. No added sugar. No artificial sweeteners.
            <br />
            Just the whole truth.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-rich/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-deep/20 rounded-full blur-3xl"></div>
      </section>

      {/* Image Reveal Section */}
      <section className="min-h-screen flex items-center justify-center bg-background py-20 px-4">
        <div 
          className="max-w-5xl w-full transition-all duration-1000 hover:scale-105"
        >
          <img 
            src={productImage} 
            alt="Guilt Free Diwali Product" 
            className="w-full h-auto rounded-3xl shadow-2xl decorative-border"
          />
        </div>
      </section>

      {/* Text on Background Section */}
      <section className="min-h-screen flex items-center justify-center gradient-text relative overflow-hidden py-20 px-4">
        <div className="max-w-4xl text-center z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-background mb-8">
            NO HALF-TRUTHS
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-background/90 font-medium">
            <p>NO ADDED SUGAR</p>
            <p>NO ADDED FLAVOUR</p>
            <p>NO ARTIFICIAL SWEETENERS</p>
            <p>NO SOY OR GLUTEN</p>
            <p>NO FALSE CLAIMS</p>
          </div>
          <div className="mt-12">
            <p className="text-3xl md:text-4xl font-bold text-yellow-bright">
              SOCH NAYI, PYAR WAHI
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-48 h-48 bg-pink-vibrant/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-red-bold/10 rounded-full blur-3xl"></div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center bg-background py-20 px-4">
        <div className="max-w-2xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-pink-vibrant">
            GET IN TOUCH
          </h2>
          <p className="text-center text-xl mb-12 text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
          
          <form className="space-y-6">
            <div>
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="h-14 text-lg border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="h-14 text-lg border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                className="min-h-32 text-lg border-2 border-primary/20 focus:border-primary resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              SEND MESSAGE
            </Button>
          </form>

          <div className="mt-12 flex justify-center gap-8">
            <a 
              href="mailto:hello@thewholetruthfoods.com" 
              className="flex items-center gap-2 text-lg hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
            <a 
              href="tel:+911234567890" 
              className="flex items-center gap-2 text-lg hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 text-center">
        <p className="text-sm">
          © 2025 The Whole Truth Foods. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
