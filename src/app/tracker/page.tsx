"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trainSchedules, locomotives, TrainSchedule } from "@/lib/mock-data";
import { Search, MapPin, Clock, AlertTriangle, CheckCircle, Pause, Filter } from "lucide-react";

export default function TrackerPage() {
  const [selectedTab, setSelectedTab] = useState("live");
  const [searchFilter, setSearchFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredSchedules, setFilteredSchedules] = useState<TrainSchedule[]>(trainSchedules);

  useEffect(() => {
    let filtered = trainSchedules;

    if (searchFilter) {
      filtered = filtered.filter(
        schedule =>
          schedule.trainNumber.toLowerCase().includes(searchFilter.toLowerCase()) ||
          schedule.route.toLowerCase().includes(searchFilter.toLowerCase()) ||
          schedule.currentLocation.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(schedule => schedule.status === statusFilter);
    }

    setFilteredSchedules(filtered);
  }, [searchFilter, statusFilter]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'on-time':
        return <CheckCircle className="h-4 w-4" />;
      case 'delayed':
        return <AlertTriangle className="h-4 w-4" />;
      case 'cancelled':
        return <Pause className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time':
        return 'status-active';
      case 'delayed':
        return 'status-delayed';
      case 'cancelled':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getRandomPosition = () => ({
    x: Math.random() * 80 + 10,
    y: Math.random() * 60 + 20,
  });

  const trackingData = locomotives.filter(loc => loc.status === 'active').map(loc => ({
    ...loc,
    position: getRandomPosition(),
    speed: Math.floor(Math.random() * 100) + 20,
  }));

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Live Train <span className="gradient-text">Tracker</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Monitor real-time train locations, schedules, and performance across our network
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search trains, routes, or locations..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="on-time">On Time</SelectItem>
              <SelectItem value="delayed">Delayed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tracker Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="live">Live Map</TabsTrigger>
            <TabsTrigger value="schedules">Schedules</TabsTrigger>
            <TabsTrigger value="status">Status Board</TabsTrigger>
          </TabsList>

          {/* Live Map Tab */}
          <TabsContent value="live" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-accent" />
                  Live Train Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-steel-blue/10 to-primary/5 rounded-lg h-96 overflow-hidden border">
                  {/* Simulated Map Background */}
                  <div className="absolute inset-0 opacity-20">
                    {/* Route Lines */}
                    <svg className="w-full h-full">
                      <path
                        d="M50 100 L200 80 L350 120 L500 60 L650 90 L800 70"
                        stroke="hsl(var(--accent))"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="10,5"
                      />
                      <path
                        d="M100 200 L250 180 L400 220 L550 160 L700 190"
                        stroke="hsl(var(--railway-green))"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="10,5"
                      />
                    </svg>
                  </div>

                  {/* Train Positions */}
                  {trackingData.map((train) => (
                    <div
                      key={train.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{
                        left: `${train.position.x}%`,
                        top: `${train.position.y}%`,
                      }}
                    >
                      <div className="relative">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>

                        {/* Tooltip */}
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          <div className="font-semibold">{train.name}</div>
                          <div className="text-xs">Speed: {train.speed} mph</div>
                          <div className="text-xs">{train.currentLocation}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Legend */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 space-y-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                      <span>Active Trains</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-1 bg-accent mr-2"></div>
                      <span>Primary Routes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-1 bg-railway-green mr-2"></div>
                      <span>Secondary Routes</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedules Tab */}
          <TabsContent value="schedules" className="space-y-4">
            {filteredSchedules.map((schedule) => (
              <Card key={schedule.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="font-mono">
                          {schedule.trainNumber}
                        </Badge>
                        <h3 className="font-semibold text-lg">{schedule.route}</h3>
                        <Badge className={`${getStatusColor(schedule.status)} text-xs`}>
                          {getStatusIcon(schedule.status)}
                          <span className="ml-1 capitalize">
                            {schedule.status}
                            {schedule.delay && ` (${schedule.delay})`}
                          </span>
                        </Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Currently at: {schedule.currentLocation}</span>
                      </div>
                    </div>

                    <div className="text-right space-y-1">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{schedule.departure} - {schedule.arrival}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Platform {schedule.platform}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredSchedules.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No trains found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Status Board Tab */}
          <TabsContent value="status" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-railway-green">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    On Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-railway-green mb-2">
                    {trainSchedules.filter(t => t.status === 'on-time').length}
                  </div>
                  <p className="text-sm text-muted-foreground">Trains running on schedule</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-locomotive-red">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Delayed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-locomotive-red mb-2">
                    {trainSchedules.filter(t => t.status === 'delayed').length}
                  </div>
                  <p className="text-sm text-muted-foreground">Trains behind schedule</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-accent" />
                    Active
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent mb-2">
                    {locomotives.filter(l => l.status === 'active').length}
                  </div>
                  <p className="text-sm text-muted-foreground">Locomotives in service</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { time: "2 min ago", message: "Train SS-205 delayed by 15 minutes due to signal maintenance", type: "delayed" },
                  { time: "5 min ago", message: "Mountain Thunder departed Alpine Station on schedule", type: "on-time" },
                  { time: "12 min ago", message: "Desert Wind arrived at Freight Yard 7 - 3 minutes early", type: "on-time" },
                  { time: "18 min ago", message: "Silver Streak reached maximum speed of 185 mph", type: "info" },
                ].map((update, index) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-b-0">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      update.type === 'delayed' ? 'bg-locomotive-red' :
                      update.type === 'on-time' ? 'bg-railway-green' :
                      'bg-accent'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">{update.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{update.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}