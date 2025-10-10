import { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import productBox from "@/assets/product-box.png";
import productTin from "@/assets/product-tin.png";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-yellow-bright">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col relative overflow-hidden bg-pink-vibrant">
        <div className="px-4 pt-2">
          <img 
            src={logo} 
            alt="The Whole Truth" 
            className="w-24 h-auto mx-auto mb-2 drop-shadow-2xl"
          />
        </div>
        
        <div 
          className={`flex flex-col transition-all duration-1000 px-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-left z-10 max-w-4xl mb-8">
            <h1 className="text-lg md:text-2xl font-bold text-foreground leading-relaxed">
              gifts without the guilt.
              <br /><br />
              show your love with mithai that's good for your loved ones.
              <br /><br />
              the TWT protein bars that you love so much. in bite sized mithai like chunks.
              <br /><br />
              high in protein. no added sugar. no fillers. no preservatives. no false claims. and no half truths.
              <br /><br />
              because mithai should be eaten hakk se.
              <br /><br />
              available in a special edition tin box. can only be gifted, not bought.
              <br /><br />
              <span className="text-yellow-bright">soch nayi, pyar wahi.</span>
            </h1>
          </div>
        </div>

        {/* Product Images with Yellow Background */}
        <div className="bg-yellow-bright py-12 px-4">
          <div className="flex flex-col gap-8 w-full">
            <div 
              className="w-full transition-all duration-1000 hover:scale-105 animate-float"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                animationDelay: '0s'
              }}
            >
              <img 
                src={productBox} 
                alt="Guilt Free Diwali Product Box" 
                className="w-full h-auto"
              />
            </div>
            <div 
              className="w-full transition-all duration-1000 hover:scale-105 animate-float"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                animationDelay: '0.5s'
              }}
            >
              <img 
                src={productTin} 
                alt="Guilt Free Diwali Product Tin" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-rich/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-deep/20 rounded-full blur-3xl"></div>
      </section>

      {/* Text on Background Section */}
      <section className="min-h-screen flex items-center justify-center gradient-text relative overflow-hidden py-20 px-4">
        <div className="max-w-4xl z-10">
          <div className="space-y-6 text-lg md:text-xl text-background/90 font-medium leading-relaxed">
            <p>Exchanging diwali gifts is a tale as old as time & mithai is always a part of the exchange.</p>
            
            <p>With an increasing number of people conscious about their health, mithai just doesn't feel right to gift, especially to people who you know are trying to take care of themselves.</p>
            
            <p>Because most mithai usually ends up as the cause for a week spent in a spiral of self loathing, starvation & sugar deprivation.</p>
            
            <p className="font-bold text-xl md:text-2xl">But what if we could gift people "mithai" that's good for them?</p>
            
            <p className="font-bold text-xl md:text-2xl">Mithai without the guilt?</p>
            
            <p>TWT has cemented itself as the go to brand for healthy, high protein foods.</p>
            
            <p>It would be amazing to launch a "Guilt Free Diwali ki Mithai" with an assortment of bite sized protein bars in a limited edition Diwali edition tin. If "guilt free" is not the right positioning, high protein can be one too.</p>
            
            <p>If you make this as a limited edition box which you can't buy for yourself but you can only gift to others (and do a take on the "regifting" phenomenon), it might be a great way to get newer people to try TWT (since people who're aware of TWT will send it to newer people) and get a whole new audience to taste TWT.</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-48 h-48 bg-pink-vibrant/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-red-bold/10 rounded-full blur-3xl"></div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-pink-vibrant">
            GET IN TOUCH
          </h2>

          <div className="flex justify-center gap-8">
            <a 
              href="mailto:hello@thewholetruthfoods.com" 
              className="flex items-center gap-2 text-lg hover:text-pink-vibrant transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
            <a 
              href="tel:+911234567890" 
              className="flex items-center gap-2 text-lg hover:text-pink-vibrant transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-yellow-bright py-8 text-center">
        <p className="text-sm">
          © 2025 The Whole Truth Foods. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
