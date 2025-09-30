export interface Locomotive {
  id: string;
  name: string;
  type: string;
  maxSpeed: number;
  manufacturer: string;
  yearBuilt: number;
  powerOutput: string;
  length: string;
  weight: string;
  imageUrl: string;
  description: string;
  status: 'active' | 'maintenance' | 'retired';
  currentLocation?: string;
}

export interface Route {
  id: string;
  name: string;
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  scenic: boolean;
  difficulty: 'easy' | 'moderate' | 'challenging';
  description: string;
  imageUrl: string;
  landmarks: string[];
}

export interface TrainSchedule {
  id: string;
  trainNumber: string;
  route: string;
  departure: string;
  arrival: string;
  currentLocation: string;
  status: 'on-time' | 'delayed' | 'cancelled';
  delay?: string;
  platform: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  title: string;
  content: string;
  imageUrl: string;
  location: string;
  timestamp: string;
  likes: number;
  comments: number;
  tags: string[];
}

// Mock Locomotives Data
export const locomotives: Locomotive[] = [
  {
    id: 'loc-001',
    name: 'Mountain Thunder',
    type: 'Steam Engine',
    maxSpeed: 80,
    manufacturer: 'Baldwin Locomotive Works',
    yearBuilt: 1925,
    powerOutput: '2,400 HP',
    length: '95 ft',
    weight: '200 tons',
    imageUrl: '/images/steam-locomotive.jpg',
    description: 'A magnificent steam locomotive renowned for its power and reliability on mountain routes.',
    status: 'active',
    currentLocation: 'Alpine Station'
  },
  {
    id: 'loc-002',
    name: 'Silver Streak',
    type: 'Electric Express',
    maxSpeed: 200,
    manufacturer: 'Siemens',
    yearBuilt: 2018,
    powerOutput: '9,280 HP',
    length: '200 ft',
    weight: '385 tons',
    imageUrl: '/images/electric-train.jpg',
    description: 'Ultra-modern electric train designed for high-speed passenger service.',
    status: 'active',
    currentLocation: 'Central Terminal'
  },
  {
    id: 'loc-003',
    name: 'Desert Wind',
    type: 'Diesel Freight',
    maxSpeed: 70,
    manufacturer: 'EMD',
    yearBuilt: 2010,
    powerOutput: '4,400 HP',
    length: '73 ft',
    weight: '210 tons',
    imageUrl: '/images/diesel-freight.jpg',
    description: 'Heavy-duty diesel locomotive perfect for long-haul freight operations.',
    status: 'active',
    currentLocation: 'Freight Yard 7'
  },
  {
    id: 'loc-004',
    name: 'City Express',
    type: 'Modern Electric',
    maxSpeed: 160,
    manufacturer: 'Alstom',
    yearBuilt: 2020,
    powerOutput: '6,400 HP',
    length: '106 ft',
    weight: '68 tons',
    imageUrl: '/images/modern-electric.jpg',
    description: 'Sleek urban transit solution with advanced passenger amenities.',
    status: 'active',
    currentLocation: 'Metro Hub'
  },
  {
    id: 'loc-005',
    name: 'Heritage Pride',
    type: 'Vintage Steam',
    maxSpeed: 45,
    manufacturer: 'American Locomotive Company',
    yearBuilt: 1952,
    powerOutput: '1,800 HP',
    length: '85 ft',
    weight: '165 tons',
    imageUrl: '/images/vintage-steam.jpg',
    description: 'Beautifully restored vintage steam engine for heritage railway experiences.',
    status: 'maintenance',
    currentLocation: 'Restoration Shop'
  },
  {
    id: 'loc-006',
    name: 'Alpine Explorer',
    type: 'Mountain Railway',
    maxSpeed: 25,
    manufacturer: 'Stadler',
    yearBuilt: 2015,
    powerOutput: '2,100 HP',
    length: '52 ft',
    weight: '48 tons',
    imageUrl: '/images/mountain-railway.jpg',
    description: 'Specialized locomotive designed for steep mountain gradients and scenic routes.',
    status: 'active',
    currentLocation: 'Mountain Base'
  }
];

// Mock Routes Data
export const routes: Route[] = [
  {
    id: 'route-001',
    name: 'Alpine Express',
    origin: 'Valley Station',
    destination: 'Summit Peak',
    distance: '147 miles',
    duration: '3h 45m',
    scenic: true,
    difficulty: 'challenging',
    description: 'Breathtaking mountain journey through pristine alpine landscapes.',
    imageUrl: '/images/alpine-route.jpg',
    landmarks: ['Crystal Lake', 'Eagle Pass', 'Glacier View Point']
  },
  {
    id: 'route-002',
    name: 'Desert Express',
    origin: 'Sunrise City',
    destination: 'Oasis Town',
    distance: '89 miles',
    duration: '2h 15m',
    scenic: true,
    difficulty: 'easy',
    description: 'Stunning desert vistas and unique geological formations.',
    imageUrl: '/images/desert-route.jpg',
    landmarks: ['Red Rock Canyon', 'Cactus Gardens', 'Mirage Springs']
  },
  {
    id: 'route-003',
    name: 'Coastal Runner',
    origin: 'Harbor Point',
    destination: 'Lighthouse Bay',
    distance: '112 miles',
    duration: '2h 50m',
    scenic: true,
    difficulty: 'moderate',
    description: 'Spectacular ocean views along rugged coastline.',
    imageUrl: '/images/coastal-route.jpg',
    landmarks: ['Whale Watch Point', 'Seal Cove', 'Storm Cliff']
  }
];

// Mock Train Schedules
export const trainSchedules: TrainSchedule[] = [
  {
    id: 'sch-001',
    trainNumber: 'MT-101',
    route: 'Alpine Express',
    departure: '08:15',
    arrival: '12:00',
    currentLocation: 'Crystal Lake',
    status: 'on-time',
    platform: 'Platform 3'
  },
  {
    id: 'sch-002',
    trainNumber: 'SS-205',
    route: 'Metro Line',
    departure: '09:30',
    arrival: '10:45',
    currentLocation: 'Downtown',
    status: 'delayed',
    delay: '15 min',
    platform: 'Platform 1'
  },
  {
    id: 'sch-003',
    trainNumber: 'DW-403',
    route: 'Desert Express',
    departure: '14:20',
    arrival: '16:35',
    currentLocation: 'Red Rock Station',
    status: 'on-time',
    platform: 'Platform 5'
  }
];

// Mock Community Posts
export const communityPosts: CommunityPost[] = [
  {
    id: 'post-001',
    author: 'RailwayPhotogrpher',
    avatar: '/avatars/photographer.jpg',
    title: 'Golden Hour at Steam Valley',
    content: 'Captured this magnificent steam locomotive during the perfect golden hour lighting. The way the steam mingles with the mountain mist creates pure magic!',
    imageUrl: '/images/community/golden-steam.jpg',
    location: 'Steam Valley Station',
    timestamp: '2 hours ago',
    likes: 247,
    comments: 18,
    tags: ['steam', 'photography', 'golden-hour']
  },
  {
    id: 'post-002',
    author: 'TrainSpotter2024',
    avatar: '/avatars/spotter.jpg',
    title: 'Rare Heritage Locomotive Spotted!',
    content: 'Just witnessed the Heritage Pride making a special run through downtown. This 1952 beauty is absolutely stunning after its restoration!',
    imageUrl: '/images/community/heritage-run.jpg',
    location: 'Central Station',
    timestamp: '5 hours ago',
    likes: 189,
    comments: 24,
    tags: ['heritage', 'vintage', 'restoration']
  },
  {
    id: 'post-003',
    author: 'MountainRailFan',
    avatar: '/avatars/mountain-fan.jpg',
    title: 'Alpine Route Adventure',
    content: 'Completed the full Alpine Express journey today. The views from Eagle Pass are absolutely incredible - definitely worth the 4-hour trip!',
    imageUrl: '/images/community/alpine-adventure.jpg',
    location: 'Eagle Pass',
    timestamp: '1 day ago',
    likes: 156,
    comments: 12,
    tags: ['alpine', 'scenic', 'adventure']
  }
];