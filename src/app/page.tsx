import HeroSection from "@/components/HeroSection";
import TrainCard from "@/components/TrainCard";
import { Button } from "@/components/ui/button";
import { locomotives } from "@/lib/mock-data";
import { ArrowRight } from "lucide-react";

export default function Index() {
  const featuredLocomotives = locomotives.filter(loc => loc.status === 'active').slice(0, 6);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Locomotives Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
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

      {/* Quick Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">150+</div>
              <div className="text-muted-foreground">Locomotives Tracked</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">2.5K+</div>
              <div className="text-muted-foreground">Routes Mapped</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">12K+</div>
              <div className="text-muted-foreground">Community Photos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">45+</div>
              <div className="text-muted-foreground">Countries Covered</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}