"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { communityPosts } from "@/lib/mock-data";
import { Heart, MessageCircle, Share2, Search, Camera, Users, Award, TrendingUp } from "lucide-react";

export default function CommunityPage() {
  const [selectedTab, setSelectedTab] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = communityPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredPhotographers = [
    { name: "Sarah Chen", posts: 247, followers: "12.5K", specialty: "Steam Locomotives", avatar: "/avatars/sarah.jpg" },
    { name: "Mike Rodriguez", posts: 189, followers: "8.3K", specialty: "Mountain Routes", avatar: "/avatars/mike.jpg" },
    { name: "Emma Thompson", posts: 156, followers: "6.7K", specialty: "Vintage Trains", avatar: "/avatars/emma.jpg" },
  ];

  const masonryColumns = 3;
  const columnItems = Array.from({ length: masonryColumns }, () => [] as any[]);

  filteredPosts.forEach((post, index) => {
    columnItems[index % masonryColumns].push(post);
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Community <span className="gradient-text">Showcase</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Share your railway adventures, connect with fellow enthusiasts, and discover amazing train photography from around the world
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="text-2xl font-bold text-accent">25.7K</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Camera className="h-8 w-8 mx-auto mb-3 text-railway-green" />
              <div className="text-2xl font-bold text-railway-green">142K</div>
              <div className="text-sm text-muted-foreground">Photos Shared</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-3 text-train-gold" />
              <div className="text-2xl font-bold text-train-gold">1.2K</div>
              <div className="text-sm text-muted-foreground">Featured Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-locomotive-red" />
              <div className="text-2xl font-bold text-locomotive-red">89%</div>
              <div className="text-sm text-muted-foreground">Active Weekly</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Photographers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-accent" />
              Featured Photographers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPhotographers.map((photographer, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={photographer.avatar} alt={photographer.name} />
                    <AvatarFallback>{photographer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{photographer.name}</h3>
                    <p className="text-sm text-muted-foreground">{photographer.specialty}</p>
                    <div className="flex space-x-4 text-xs text-muted-foreground mt-1">
                      <span>{photographer.posts} posts</span>
                      <span>{photographer.followers} followers</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Search and Photo Gallery with Tabs */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search posts, tags, or photographers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Photo Gallery with Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="mt-0">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {columnItems.map((column, columnIndex) => (
                    <div key={columnIndex} className="space-y-6">
                    {column.map((post) => (
                    <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <div className="aspect-[4/3] bg-gradient-to-br from-steel-blue/20 to-primary/10 flex items-center justify-center">
                          <div className="text-6xl text-primary/20">📸</div>
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button variant="secondary" size="sm">View Full Size</Button>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6">
                        {/* Author Info */}
                        <div className="flex items-center space-x-3 mb-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={post.avatar} alt={post.author} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{post.author}</h4>
                            <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                          </div>
                        </div>

                        {/* Post Content */}
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {post.content}
                        </p>

                        {/* Location */}
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span>{post.location}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Engagement */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 hover:text-locomotive-red transition-colors">
                              <Heart className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-accent transition-colors">
                              <MessageCircle className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </button>
                          </div>
                          <button className="hover:text-accent transition-colors">
                            <Share2 className="h-4 w-4" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                    </div>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Camera className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">No posts found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search criteria or browse by different categories
                    </p>
                    <Button className="mt-4" onClick={() => setSearchTerm("")}>
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Posts
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="trending" className="mt-0">
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold mb-2">Trending Posts Coming Soon</h3>
                <p className="text-muted-foreground">We're working on trending algorithms to show you the most popular content.</p>
              </div>
            </TabsContent>

            <TabsContent value="featured" className="mt-0">
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold mb-2">Featured Content Coming Soon</h3>
                <p className="text-muted-foreground">Our editorial team is curating the best community content for you.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Upload Call-to-Action */}
        <Card className="mt-12 bg-gradient-to-r from-accent/10 to-train-gold/10 border-accent/20">
          <CardContent className="p-8 text-center">
            <Camera className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-2xl font-bold mb-4">Share Your Railway Adventures</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our vibrant community of train enthusiasts. Upload your best railway photography,
              share your travel stories, and connect with fellow railfans from around the world.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Camera className="h-5 w-5 mr-2" />
              Upload Your Photos
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}