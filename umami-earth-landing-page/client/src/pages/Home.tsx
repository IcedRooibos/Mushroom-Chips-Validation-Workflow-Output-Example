/* Design Philosophy: Organic Modernism - diagonal flow, natural textures, Lora serif headlines, asymmetric 60/40 layouts */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Leaf, Sparkles, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Diagonal composition with product anchored bottom-right */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden texture-grain"
        style={{
          background: `linear-gradient(135deg, rgba(245, 239, 230, 0.95) 0%, rgba(245, 239, 230, 0.85) 100%), url('https://cdn.leonardo.ai/users/51dcdd34-6ce6-434b-a409-fdafd9b35e17/generations/9f7b6868-bc3e-4ba8-940a-63f10ca01067/Default_CONTEXT_Website_hero_section_background_for_UMAMI_EART_0.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left side - Headline and CTA (60% - 3 cols) */}
            <div className="lg:col-span-3 space-y-8">
              <div
                className={`space-y-6 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="inline-block">
                  <span className="text-sm font-medium tracking-wider uppercase text-[oklch(0.45_0.08_150)] bg-[oklch(0.45_0.08_150)]/10 px-4 py-2 rounded-full">
                    Nature's Crunch. Your Wellness.
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[oklch(0.35_0.04_45)] leading-tight">
                  Healthy Snacks That Don't Taste Like Cardboard
                </h1>

                <p className="text-xl md:text-2xl text-[oklch(0.45_0.04_50)] font-serif leading-relaxed max-w-2xl">
                  Rich umami flavor meets genuine nutrition. UMAMI EARTH
                  mushroom chips deliver 5g protein and 20% Vitamin D in every
                  crispy bite.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-[oklch(0.55_0.05_50)] hover:bg-[oklch(0.50_0.05_50)] text-[oklch(0.98_0.01_85)] text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Shop Now - HKD 55
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[oklch(0.55_0.05_50)] text-[oklch(0.55_0.05_50)] hover:bg-[oklch(0.55_0.05_50)] hover:text-[oklch(0.98_0.01_85)] text-lg px-8 py-6 rounded-xl transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-6 pt-6 text-sm text-[oklch(0.50_0.03_50)]">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[oklch(0.45_0.08_150)]" />
                    <span>Free Shipping Over HKD 200</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[oklch(0.45_0.08_150)]" />
                    <span>Satisfaction Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[oklch(0.45_0.08_150)]" />
                    <span>Taiwan Family Farms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Product image (40% - 2 cols) */}
            <div
              className={`lg:col-span-2 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative">
                <img
                  src="https://cdn.leonardo.ai/users/51dcdd34-6ce6-434b-a409-fdafd9b35e17/generations/1f106895-4147-68b0-bfc3-883635d542f1/segments/1:1:1/athome_product_shoot_1f106895-4147-68b0-bfc3-883635d542f1_0_0.png"
                  alt="UMAMI EARTH Sea Salt Mushroom Chips"
                  className="w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[oklch(0.45_0.08_150)] text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
                  <p className="text-sm font-bold">20% Vitamin D</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[oklch(0.55_0.05_50)] rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[oklch(0.55_0.05_50)] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Asymmetric layout with texture */}
      <section
        className="py-24 texture-grain"
        style={{
          background: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://cdn.leonardo.ai/users/51dcdd34-6ce6-434b-a409-fdafd9b35e17/generations/7369305d-1c1b-4633-ae19-64411518c4ee/Default_Subtle_organic_texture_background_for_website_section_0.jpg')`,
        }}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.35_0.04_45)] mb-6">
              The Snack That Works As Hard As You Do
            </h2>
            <p className="text-xl text-[oklch(0.50_0.03_50)] font-serif">
              Power through your afternoon with satisfying crunch, sustained
              energy, and zero guilt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "5g Protein",
                description: "Plant-based protein for sustained energy",
                color: "oklch(0.55_0.05_50)",
              },
              {
                icon: Leaf,
                title: "20% Vitamin D",
                description: "Rare in plant-based snacks",
                color: "oklch(0.45_0.08_150)",
              },
              {
                icon: Heart,
                title: "110 Calories",
                description: "Lower than traditional chips",
                color: "oklch(0.55_0.05_50)",
              },
              {
                icon: Check,
                title: "High Fiber",
                description: "4g per serving for digestive health",
                color: "oklch(0.45_0.08_150)",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-8 bg-white/80 backdrop-blur-sm border-[oklch(0.85_0.01_75)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <benefit.icon
                  className="w-12 h-12 mb-4"
                  style={{ color: benefit.color }}
                />
                <h3 className="text-2xl font-bold text-[oklch(0.35_0.04_45)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[oklch(0.50_0.03_50)]">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Three Flavors Section - Diagonal product showcase */}
      <section className="py-24 bg-[oklch(0.98_0.01_85)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Product image (40%) */}
            <div className="order-2 lg:order-1">
              <img
                src="https://cdn.leonardo.ai/users/51dcdd34-6ce6-434b-a409-fdafd9b35e17/generations/92d857be-d7ba-4ac5-8dd7-9362eaf35ee5/Default_Professional_product_photography_for_UMAMI_EARTH_mushr_0.jpg"
                alt="Three UMAMI EARTH Flavors"
                className="w-full drop-shadow-2xl"
              />
            </div>

            {/* Right - Content (60%) */}
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.35_0.04_45)]">
                Three Bold Flavors. One Delicious Mission.
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border-l-4 border-[oklch(0.55_0.05_50)] hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-[oklch(0.35_0.04_45)] mb-2">
                    Sea Salt
                  </h3>
                  <p className="text-[oklch(0.50_0.03_50)]">
                    Pure umami flavor with subtle sea salt. Just 3 ingredients.
                    The authentic introduction to mushroom chips.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border-l-4 border-[oklch(0.45_0.08_150)] hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-[oklch(0.35_0.04_45)] mb-2">
                    Seaweed & Sesame
                  </h3>
                  <p className="text-[oklch(0.50_0.03_50)]">
                    Bold Asian fusion with roasted seaweed and toasted sesame.
                    Double umami power.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border-l-4 border-[oklch(0.55_0.05_50)] hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-[oklch(0.35_0.04_45)] mb-2">
                    Truffle & Herb
                  </h3>
                  <p className="text-[oklch(0.50_0.03_50)]">
                    Sophisticated earthy truffle with Mediterranean herbs.
                    Gourmet indulgence.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-[oklch(0.55_0.05_50)] hover:bg-[oklch(0.50_0.05_50)] text-[oklch(0.98_0.01_85)] text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try All Three Flavors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Story Section - Atmospheric with forest image */}
      <section
        className="py-32 relative overflow-hidden"
        style={{
          background: `linear-gradient(to right, rgba(245, 239, 230, 0.98) 0%, rgba(245, 239, 230, 0.85) 50%, rgba(245, 239, 230, 0.70) 100%), url('https://cdn.leonardo.ai/users/51dcdd34-6ce6-434b-a409-fdafd9b35e17/generations/80209efd-c0a9-4017-8fe8-740f645fe1b4/Default_CONTEXT_Background_image_for_UMAMI_EARTH_Sourcing_Stor_0.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-medium tracking-wider uppercase text-[oklch(0.45_0.08_150)] bg-[oklch(0.45_0.08_150)]/10 px-4 py-2 rounded-full">
                  From Nature to Nourishment
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.35_0.04_45)] leading-tight">
                Sourced from Taiwan Family Farms
              </h2>

              <p className="text-xl text-[oklch(0.45_0.04_50)] font-serif leading-relaxed">
                Our shiitake mushrooms are log-grown by family farmers in Taiwan
                using sustainable practices passed down through generations.
                Then we craft them into the crispiest, most flavorful chips
                you've ever tasted.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[oklch(0.45_0.08_150)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[oklch(0.35_0.04_45)] mb-1">
                      Traditional Log-Growing
                    </h4>
                    <p className="text-[oklch(0.50_0.03_50)]">
                      Premium shiitake cultivated using time-honored methods for
                      superior flavor
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[oklch(0.45_0.08_150)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[oklch(0.35_0.04_45)] mb-1">
                      Sustainable Practices
                    </h4>
                    <p className="text-[oklch(0.50_0.03_50)]">
                      Environmentally responsible farming that respects the land
                      and community
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[oklch(0.45_0.08_150)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[oklch(0.35_0.04_45)] mb-1">
                      Transparent Sourcing
                    </h4>
                    <p className="text-[oklch(0.50_0.03_50)]">
                      Know exactly where your food comes from and how it's made
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[oklch(0.55_0.05_50)] text-[oklch(0.55_0.05_50)] hover:bg-[oklch(0.55_0.05_50)] hover:text-[oklch(0.98_0.01_85)] text-lg px-8 py-6 rounded-xl transition-all duration-300"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.35_0.04_45)] mb-6">
              Hong Kong's Health-Conscious Professionals Are Obsessed
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Finally, a healthy snack I actually crave! The Sea Salt flavor is my go-to afternoon pick-me-up.",
                author: "Sarah L.",
                location: "Central",
                rating: 5,
              },
              {
                quote:
                  "The truffle flavor is restaurant-quality. I keep these in my desk and my gym bag.",
                author: "Michael T.",
                location: "Admiralty",
                rating: 5,
              },
              {
                quote:
                  "I love that I can pronounce every ingredient. And they actually taste amazing!",
                author: "Jenny W.",
                location: "Causeway Bay",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-[oklch(0.98_0.01_85)] border-[oklch(0.85_0.01_75)]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[oklch(0.70_0.15_70)]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[oklch(0.40_0.04_50)] font-serif text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[oklch(0.85_0.01_75)] pt-4">
                  <p className="font-bold text-[oklch(0.35_0.04_45)]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[oklch(0.50_0.03_50)]">
                    {testimonial.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-[oklch(0.55_0.05_50)] text-[oklch(0.98_0.01_85)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_oklch(0.60_0.06_50),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_oklch(0.50_0.05_50),transparent_50%)]"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Crunch Without Compromise?
            </h2>

            <p className="text-xl md:text-2xl font-serif opacity-90">
              Join hundreds of Hong Kong professionals who've discovered the
              perfect balance of health and flavor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-white text-[oklch(0.55_0.05_50)] hover:bg-[oklch(0.98_0.01_85)] text-lg px-12 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Shop Now - HKD 55
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[oklch(0.55_0.05_50)] text-lg px-12 py-6 rounded-xl transition-all duration-300"
              >
                Try Sample Pack
              </Button>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Free Shipping Over HKD 200</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Delivery in 2-3 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.35_0.04_45)] text-[oklch(0.85_0.01_75)] py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[oklch(0.98_0.01_85)] mb-4">
                UMAMI EARTH
              </h3>
              <p className="text-[oklch(0.75_0.02_70)] font-serif mb-4">
                Nature's Crunch. Your Wellness.
              </p>
              <p className="text-sm text-[oklch(0.65_0.02_65)]">
                Premium mushroom chips sourced from Taiwan family farms,
                crafted for Hong Kong's health-conscious professionals.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[oklch(0.98_0.01_85)] mb-4">
                Shop
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[oklch(0.98_0.01_85)] transition-colors"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[oklch(0.98_0.01_85)] transition-colors"
                  >
                    Sample Pack
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[oklch(0.98_0.01_85)] transition-colors"
                  >
                    Subscription
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[oklch(0.98_0.01_85)] mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[oklch(0.98_0.01_85)] transition-colors"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[oklch(0.98_0.01_85)] transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[oklch(0.98_0.01_85)] transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[oklch(0.45_0.04_50)] mt-12 pt-8 text-center text-sm text-[oklch(0.65_0.02_65)]">
            <p>© 2026 UMAMI EARTH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
