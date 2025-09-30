"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, ArrowRight, Train, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { routes } from "@/lib/mock-data";

export default function HeroSection() {
  const [searchOrigin, setSearchOrigin] = useState("");
  const [searchDestination, setSearchDestination] = useState("");

  const featuredRoutes = routes.slice(0, 3);

  return (
    <section className="hero-section min-h-screen relative overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/generated/hero-train-mountain.png)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-train-gold/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="locomotive-badge text-sm px-4 py-2">
                <Train className="h-4 w-4 mr-2" />
                JOURNEYS OF STEEL & STEAM
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                EXPLORE THE WORLD'S MOST{" "}
                <span className="gradient-text">ICONIC RAILWAYS</span>
              </h1>

              <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-lg">
                Discover magnificent locomotives, track epic journeys, and connect with fellow railway enthusiasts from around the globe.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg"
            >
              EXPLORE NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Column - Route Finder */}
          <div className="space-y-8">
            {/* Route Finder Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-6 flex items-center">
                  <Search className="h-5 w-5 mr-2 text-accent" />
                  Find Your Next Adventure
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-foreground/80">From</label>
                      <Input
                        placeholder="Origin station..."
                        value={searchOrigin}
                        onChange={(e) => setSearchOrigin(e.target.value)}
                        className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-foreground/80">To</label>
                      <Input
                        placeholder="Destination station..."
                        value={searchDestination}
                        onChange={(e) => setSearchDestination(e.target.value)}
                        className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-foreground/80">Journey Type</label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground">
                          <SelectValue placeholder="Select journey type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scenic">Scenic Routes</SelectItem>
                          <SelectItem value="express">Express Service</SelectItem>
                          <SelectItem value="heritage">Heritage Railways</SelectItem>
                          <SelectItem value="mountain">Mountain Routes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Search className="h-4 w-4 mr-2" />
                    Search Routes
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Routes */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-foreground/90">Popular Routes</h3>
              <div className="space-y-3">
                {featuredRoutes.map((route) => (
                  <Card key={route.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h4 className="font-medium text-primary-foreground group-hover:text-accent transition-colors">
                            {route.name}
                          </h4>
                          <div className="flex items-center text-sm text-primary-foreground/70">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{route.origin} → {route.destination}</span>
                          </div>
                        </div>
                        <div className="text-right text-sm space-y-1">
                          <div className="flex items-center text-primary-foreground/80">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{route.duration}</span>
                          </div>
                          {route.scenic && (
                            <Badge variant="secondary" className="text-xs locomotive-badge">
                              SCENIC
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}