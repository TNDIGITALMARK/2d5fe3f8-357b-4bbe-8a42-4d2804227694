import HeroSection from "@/components/HeroSection";
import TrainCard from "@/components/TrainCard";
import { Button } from "@/components/ui/button";
import { locomotives } from "@/lib/mock-data";
import { ArrowRight, Train, Route, Camera, Globe } from "lucide-react";

export default function Index() {
  const featuredLocomotives = locomotives.filter(loc => loc.status === 'active').slice(0, 6);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Locomotives Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/generated/locomotives-section-bg.png)',
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Featured <span className="gradient-text">Locomotives</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover our collection of magnificent trains, from vintage steam engines to cutting-edge electric locomotives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredLocomotives.map((locomotive) => (
              <TrainCard
                key={locomotive.id}
                locomotive={locomotive}
              />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="hover:bg-accent hover:text-accent-foreground">
              View All Locomotives
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Gallery Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Community <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stunning photography from our passionate community of railway enthusiasts around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group cursor-pointer overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/generated/community-modern-train.png"
                  alt="Modern Electric Train"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">Modern Express</h3>
                <p className="text-xs text-muted-foreground">High-speed urban transit</p>
              </div>
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/generated/community-vintage-steam.png"
                  alt="Vintage Steam Locomotive"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">Steam Heritage</h3>
                <p className="text-xs text-muted-foreground">1940s locomotive</p>
              </div>
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/generated/community-mountain-scenic.png"
                  alt="Mountain Railway"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">Alpine Express</h3>
                <p className="text-xs text-muted-foreground">Scenic mountain route</p>
              </div>
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/generated/community-freight-industrial.png"
                  alt="Freight Locomotive"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">Industrial Power</h3>
                <p className="text-xs text-muted-foreground">Heavy freight transport</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="hover:bg-accent hover:text-accent-foreground">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4 group">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Train className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-muted-foreground">Locomotives Tracked</div>
              </div>
            </div>
            <div className="space-y-4 group">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Route className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">2.5K+</div>
                <div className="text-muted-foreground">Routes Mapped</div>
              </div>
            </div>
            <div className="space-y-4 group">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Camera className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">12K+</div>
                <div className="text-muted-foreground">Community Photos</div>
              </div>
            </div>
            <div className="space-y-4 group">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">45+</div>
                <div className="text-muted-foreground">Countries Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/generated/cta-railway-adventure.png)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-primary-foreground mb-6">
              Start Your Railway <span className="gradient-text">Adventure</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join thousands of railway enthusiasts tracking locomotives, sharing experiences, and discovering the world's most incredible train journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4">
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4">
                Explore Routes
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}