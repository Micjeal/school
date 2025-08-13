// Sample data for the school website
const newsData = [
  {
    id: 1,
    title: "New Science Laboratory Opens",
    date: "2025-02-01",
    excerpt: "State-of-the-art science laboratory equipped with modern equipment opens for students.",
    content: "We are excited to announce the opening of our new science laboratory, equipped with the latest technology and equipment to enhance our students' learning experience. The lab features modern microscopes, chemical analysis equipment, and interactive digital displays.",
    img: "images/lab.jpg"
  },
  {
    id: 2,
    title: "Annual Academic Excellence Awards",
    date: "2025-01-28",
    excerpt: "Celebrating outstanding academic achievements of our students this year.",
    content: "Our annual academic excellence awards ceremony recognized the outstanding achievements of students across all grade levels. Over 150 students received awards for their exceptional performance in various subjects.",
    img: "images/awards.jpg"
  },
  {
    id: 3,
    title: "New Library Wing Construction Complete",
    date: "2025-01-25",
    excerpt: "Modern library expansion provides additional study spaces and digital resources.",
    content: "The new library wing has been completed, doubling our library space and adding 50 new study stations, computer workstations, and a dedicated digital media center for students.",
    img: "images/library.jpg"
  },
  {
    id: 4,
    title: "International Exchange Program Launch",
    date: "2025-01-20",
    excerpt: "New partnership with international schools opens exchange opportunities.",
    content: "We are proud to announce our new international exchange program, partnering with schools in Europe and Asia to provide our students with global learning opportunities.",
    img: "images/exchange.jpg"
  }
];

const eventsData = [
  {
    id: 1,
    name: "Annual Sports Day",
    date: "2025-03-15",
    description: "Join us for our most exciting event of the year! Inter-house sports competition featuring athletics, swimming, and team sports. Cheer for your house and enjoy a day filled with sportsmanship and school spirit.",
    location: "Main Sports Complex",
    time: "8:30 AM - 3:00 PM",
    image: "images/events/sports-day.jpg",
    category: "Sports"
  },
  {
    id: 2,
    name: "Science & Technology Fair 2025",
    date: "2025-03-22",
    description: "Discover the innovative projects by our young scientists and technologists. The fair will feature interactive exhibits, robotics demonstrations, and cutting-edge research projects from students across all grade levels.",
    location: "School Auditorium & Science Wing",
    time: "9:00 AM - 2:00 PM",
    image: "images/events/science-fair.jpg",
    category: "Academics"
  },
  {
    id: 3,
    name: "Global Cultural Festival",
    date: "2025-04-10",
    description: "Celebrate the rich diversity of our school community! Enjoy cultural performances, traditional music and dance, international food stalls, and exhibitions showcasing different cultures from around the world.",
    location: "School Grounds & Gymnasium",
    time: "10:00 AM - 5:00 PM",
    image: "images/events/cultural-festival.jpg",
    category: "Cultural"
  },
  {
    id: 4,
    name: "Spring Music Concert",
    date: "2025-04-18",
    description: "An evening of musical excellence featuring our school orchestra, choirs, and solo performers. The concert will showcase classical pieces, contemporary arrangements, and student compositions.",
    location: "Performing Arts Center",
    time: "6:30 PM - 8:30 PM",
    image: "images/events/music-concert.jpg",
    category: "Arts"
  },
  {
    id: 5,
    name: "College & Career Fair",
    date: "2025-05-05",
    description: "An excellent opportunity for high school students to explore future educational and career options. Representatives from top universities and various industries will be present to provide information and guidance.",
    location: "School Gymnasium",
    time: "1:00 PM - 5:00 PM",
    image: "images/events/college-fair.jpg",
    category: "Academics"
  },
  {
    id: 6,
    name: "Community Service Day",
    date: "2025-05-15",
    description: "Join us as we give back to our community! Students, parents, and staff will participate in various service projects including park clean-up, food drive, and visits to local senior centers.",
    location: "Various Community Locations",
    time: "8:00 AM - 12:00 PM",
    image: "images/events/community-service.jpg",
    category: "Service"
  },
  {
    id: 7,
    name: "Theater Production: 'Romeo & Juliet'",
    date: "2025-05-22",
    description: "Our talented drama students present Shakespeare's timeless classic with a modern twist. Don't miss this spectacular performance featuring stunning sets, beautiful costumes, and outstanding acting.",
    location: "School Theater",
    time: "7:00 PM (May 22-24)",
    image: "images/events/theater-production.jpg",
    category: "Arts"
  },
  {
    id: 8,
    name: "Graduation Ceremony 2025",
    date: "2025-06-15",
    description: "Celebrating the achievements of our graduating class of 2025. Join us as we honor their hard work and wish them success in their future endeavors. The ceremony will be followed by a reception for graduates and their families.",
    location: "Main Auditorium",
    time: "10:00 AM",
    image: "images/events/graduation.jpg",
    category: "Special"
  }
];

const programsData = [
  {
    id: 1,
    title: "Early Years Foundation",
    level: "Primary",
    description: "Nurturing young minds aged 3-6 with play-based learning and foundational skills development.",
    category: "primary"
  },
  {
    id: 2,
    title: "Primary Education",
    level: "Primary",
    description: "Comprehensive curriculum for ages 6-12 focusing on core subjects and character development.",
    category: "primary"
  },
  {
    id: 3,
    title: "Secondary Education",
    level: "Secondary",
    description: "Advanced academic program preparing students for higher education and career success.",
    category: "secondary"
  },
  {
    id: 4,
    title: "International Baccalaureate",
    level: "Secondary",
    description: "Globally recognized diploma program for students aged 16-19.",
    category: "secondary"
  },
  {
    id: 5,
    title: "STEM Program",
    level: "All Levels",
    description: "Science, Technology, Engineering, and Mathematics focused curriculum.",
    category: "special"
  },
  {
    id: 6,
    title: "Arts & Creative Studies",
    level: "All Levels",
    description: "Comprehensive arts education including visual arts, music, and drama.",
    category: "special"
  }
];

const leadershipData = [
  {
    name: "Dr. Sarah Johnson",
    position: "Principal",
    bio: "Dr. Johnson brings over 20 years of educational leadership experience to our school.",
    img: "images/principal.jpg"
  },
  {
    name: "Mr. David Chen",
    position: "Vice Principal",
    bio: "Mr. Chen oversees academic programs and curriculum development.",
    img: "images/vice-principal.jpg"
  },
  {
    name: "Ms. Emily Rodriguez",
    position: "Head of Primary",
    bio: "Ms. Rodriguez leads our primary education division with expertise in early childhood development.",
    img: "images/head-primary.jpg"
  }
];

const testimonialsData = [
  {
    name: "Maria Santos",
    role: "Parent",
    text: "The quality of education and care my child receives here is exceptional. The teachers are dedicated and the facilities are outstanding."
  },
  {
    name: "John Williams",
    role: "Alumni",
    text: "This school prepared me well for university and beyond. The values and skills I learned here continue to guide me in my career."
  },
  {
    name: "Dr. Patricia Lee",
    role: "Parent",
    text: "The holistic approach to education here develops not just academic excellence but also character and leadership skills."
  }
];