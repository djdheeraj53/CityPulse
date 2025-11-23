export const EVENT_LIST = [
    { "id": 1, "name": "Sunburn Music Festival", "city": "Goa", "date": "2025-12-24", "category": "Music" },
    { "id": 2, "name": "India Comic Con", "city": "Delhi", "date": "2025-11-15", "category": "Entertainment" },
    { "id": 3, "name": "T20 Cricket Finals", "city": "Mumbai", "date": "2025-10-04", "category": "Sports" },
    { "id": 4, "name": "Bollywood Night Party", "city": "Pune", "date": "2025-12-10", "category": "Music" },
    { "id": 5, "name": "Stand-up Comedy by Zakir Khan", "city": "Bangalore", "date": "2025-09-18", "category": "Comedy" },
    { "id": 6, "name": "Yoga Wellness Retreat", "city": "Rishikesh", "date": "2025-08-12", "category": "Health" },
    { "id": 7, "name": "Art & Craft Exhibition", "city": "Kolkata", "date": "2025-07-05", "category": "Art" },
    { "id": 8, "name": "Startup Tech Summit", "city": "Hyderabad", "date": "2025-06-19", "category": "Technology" },
    { "id": 9, "name": "Food Fest Carnival", "city": "Chennai", "date": "2025-11-11", "category": "Food" },
    { "id": 10, "name": "Marathon 10K Run", "city": "Mumbai", "date": "2025-01-19", "category": "Sports" }
];

export const EVENT_DETAILS = {
  1: {
    id: 1,
    name: "Sunburn Music Festival",
    city: "Goa",
    date: "2025-12-24",
    category: "Music",
    description:
      "India’s biggest electronic dance music festival featuring top international DJs, dance stages, and fireworks.",
    image: "https://picsum.photos/400/300?random=1",
    _embedded: {
      venues: [
        {
          name: "Goa Beach Arena",
          address: "Candolim Beach, Goa",
          location: { latitude: "15.5180", longitude: "73.7680" }
        }
      ]
    }
  },

  2: {
    id: 2,
    name: "India Comic Con",
    city: "Delhi",
    date: "2025-11-15",
    category: "Entertainment",
    description:
      "India’s biggest pop-culture celebration including cosplay, gaming, comics, merchandise, and celebrity guests.",
    image: "https://picsum.photos/400/300?random=2",
    _embedded: {
      venues: [
        {
          name: "Pragati Maidan",
          address: "Mathura Road, Delhi",
          location: { latitude: "28.6189", longitude: "77.2405" }
        }
      ]
    }
  },

  3: {
    id: 3,
    name: "T20 Cricket Finals",
    city: "Mumbai",
    date: "2025-10-04",
    category: "Sports",
    description:
      "Exciting final match of the T20 Championship featuring top teams and thrilling cricket action.",
    image: "https://picsum.photos/400/300?random=3",
    _embedded: {
      venues: [
        {
          name: "Wankhede Stadium",
          address: "Marine Drive, Mumbai",
          location: { latitude: "18.9388", longitude: "72.8258" }
        }
      ]
    }
  },

  4: {
    id: 4,
    name: "Bollywood Night Party",
    city: "Pune",
    date: "2025-12-10",
    category: "Music",
    description:
      "A glamorous night filled with Bollywood hits, dance floors, celebrity DJs, and themed décor.",
    image: "https://picsum.photos/400/300?random=4",
    _embedded: {
      venues: [
        {
          name: "Phoenix Marketcity",
          address: "Viman Nagar, Pune",
          location: { latitude: "18.5679", longitude: "73.9143" }
        }
      ]
    }
  },

  5: {
    id: 5,
    name: "Stand-up Comedy by Zakir Khan",
    city: "Bangalore",
    date: "2025-09-18",
    category: "Comedy",
    description:
      "Laugh-out-loud stand-up comedy performance by Zakir Khan featuring new stories and relatable humor.",
    image: "https://picsum.photos/400/300?random=5",
    _embedded: {
      venues: [
        {
          name: "Indiranagar Club Arena",
          address: "Indiranagar, Bangalore",
          location: { latitude: "12.9716", longitude: "77.5946" }
        }
      ]
    }
  },

  6: {
    id: 6,
    name: "Yoga Wellness Retreat",
    city: "Rishikesh",
    date: "2025-08-12",
    category: "Health",
    description:
      "A calming wellness retreat with yoga sessions, meditation, detox meals, and Ganga-side relaxation.",
    image: "https://picsum.photos/400/300?random=6",
    _embedded: {
      venues: [
        {
          name: "Parmarth Niketan",
          address: "Near Ganga Ghat, Rishikesh",
          location: { latitude: "30.1210", longitude: "78.3210" }
        }
      ]
    }
  },

  7: {
    id: 7,
    name: "Art & Craft Exhibition",
    city: "Kolkata",
    date: "2025-07-05",
    category: "Art",
    description:
      "Exhibition showcasing traditional and modern Indian art, handicrafts, pottery, and local creations.",
    image: "https://picsum.photos/400/300?random=7",
    _embedded: {
      venues: [
        {
          name: "Science City Convention Hall",
          address: "Science City Road, Kolkata",
          location: { latitude: "22.5390", longitude: "88.3953" }
        }
      ]
    }
  },

  8: {
    id: 8,
    name: "Startup Tech Summit",
    city: "Hyderabad",
    date: "2025-06-19",
    category: "Technology",
    description:
      "Annual tech summit bringing together startup founders, investors, innovators, and tech leaders.",
    image: "https://picsum.photos/400/300?random=8",
    _embedded: {
      venues: [
        {
          name: "HITEC Convention Center",
          address: "Madhapur, Hyderabad",
          location: { latitude: "17.4483", longitude: "78.3908" }
        }
      ]
    }
  },

  9: {
    id: 9,
    name: "Food Fest Carnival",
    city: "Chennai",
    date: "2025-11-11",
    category: "Food",
    description:
      "A grand carnival offering multi-cuisine food stalls, live cooking shows, and tasty street food.",
    image: "https://picsum.photos/400/300?random=9",
    _embedded: {
      venues: [
        {
          name: "Marina Beach Food Plaza",
          address: "Marina Beach, Chennai",
          location: { latitude: "13.0499", longitude: "80.2824" }
        }
      ]
    }
  },

  10: {
    id: 10,
    name: "Marathon 10K Run",
    city: "Mumbai",
    date: "2025-01-19",
    category: "Sports",
    description:
      "A community 10K marathon for fitness enthusiasts across all age groups with medals and goodies.",
    image: "https://picsum.photos/400/300?random=10",
    _embedded: {
      venues: [
        {
          name: "BKC Running Track",
          address: "Bandra Kurla Complex, Mumbai",
          location: { latitude: "19.0600", longitude: "72.8570" }
        }
      ]
    }
  }
};


export const LOGIN_USERS = [
  { username: 'User1', password: 'Password', name: 'ABC' },
  { username: 'User2', password: 'Password', name: 'DEF' },
];