"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Locomotive } from "@/lib/mock-data";
import { MapPin, Calendar, Gauge, Wrench } from "lucide-react";
import Image from "next/image";

interface TrainCardProps {
  locomotive: Locomotive;
  onClick?: () => void;
}

export default function TrainCard({ locomotive, onClick }: TrainCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default client-side behavior
      console.log('Clicked locomotive:', locomotive.name);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'maintenance':
        return 'bg-amber-500 text-white';
      case 'retired':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <MapPin className="h-3 w-3" />;
      case 'maintenance':
        return <Wrench className="h-3 w-3" />;
      default:
        return <Calendar className="h-3 w-3" />;
    }
  };

  return (
    <Card className="train-card cursor-pointer overflow-hidden group" onClick={handleClick}>
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <div className="w-full h-full bg-gradient-to-br from-steel-blue to-primary flex items-center justify-center">
          <div className="text-6xl text-white/20">{locomotive.type === 'Steam Engine' ? '🚂' : locomotive.type.includes('Electric') ? '🚄' : '🚞'}</div>
        </div>
        <div className="absolute top-3 left-3 z-20">
          <Badge className={`${getStatusColor(locomotive.status)} text-xs font-medium`}>
            {getStatusIcon(locomotive.status)}
            <span className="ml-1 capitalize">{locomotive.status}</span>
          </Badge>
        </div>
        <div className="absolute top-3 right-3 z-20">
          <Badge variant="secondary" className="locomotive-badge text-xs">
            {locomotive.type}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
          {locomotive.name}
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{locomotive.yearBuilt} • {locomotive.manufacturer}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {locomotive.description}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center">
              <Gauge className="h-4 w-4 mr-2 text-accent" />
              <span className="font-medium">{locomotive.maxSpeed} mph</span>
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium text-foreground">Power:</span> {locomotive.powerOutput}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-muted-foreground">
              <span className="font-medium text-foreground">Length:</span> {locomotive.length}
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium text-foreground">Weight:</span> {locomotive.weight}
            </div>
          </div>
        </div>

        {locomotive.currentLocation && (
          <div className="flex items-center text-sm text-muted-foreground pt-2 border-t">
            <MapPin className="h-4 w-4 mr-2 text-railway-green" />
            <span>Currently at: <span className="font-medium text-foreground">{locomotive.currentLocation}</span></span>
          </div>
        )}

        <Button variant="outline" className="w-full mt-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}