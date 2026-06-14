import { Github, Linkedin } from 'lucide-react';
import {
  CarRentalHero,
  CarRentalCatalog,
  eLearningPlatform1,
  eLearningPlatform2,
  RealEstate1,
  RealEstate2,
  TravelApp1,
  TravelApp2,
  TravelApp3,
  TravelApp4,
  CodeQuest1,
  CodeQuest2,
  CodeQuest3
} from '@/constants/images'

export const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  }
]

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Mohamed-Slaoui",
    icon: <Github size={20} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-slaoui18/",
    icon: <Linkedin size={20} />,
  },
]


const travelAppImages = [
  { src: TravelApp1.src, type: 'mobile' as const },
  { src: TravelApp2.src, type: 'mobile' as const },
  { src: TravelApp3.src, type: 'mobile' as const },
  { src: TravelApp4.src, type: 'mobile' as const },
];

export const codeQuestImages = [
  { src: CodeQuest1.src, type: 'desktop' as const },
  { src: CodeQuest2.src, type: 'desktop' as const },
  { src: CodeQuest3.src, type: 'desktop' as const },
];



export const data = [
  {
    id: 1,
    title: "Dec – 2024",
    subtitle: "Academic Project",
    projectName: "CodeQuest",
    description:
      "Collaborated with colleagues to build CodeQuest, a Java-based desktop application designed for computer science education. The platform enables professors to create and manage programming problems, while students can solve and test their code directly inside the app. CodeQuest enhances hands-on learning by helping students strengthen their problem-solving and coding skills.",
    images: codeQuestImages,
  },

  {
    id: 2,
    title: "Aug – Sep 2024",
    subtitle: "Personal Project",
    projectName: "Travel App",
    description:
      "Built a complete mobile Travel App as a personal project. Focused on UI/UX, navigation, content management, and smooth animations.",
    images: travelAppImages,
  },

  {
    id: 3,
    title: "May – June 2024",
    subtitle: "Internship at GISMA IT SOLUTIONS",
    projectName: "Real Estate Platform",
    description:
      "Full Stack Developer Internship at GISMA IT SOLUTIONS. Built a real estate platform including authentication, real-time chat, payments, and admin tools.",
    images: [
      { src: RealEstate1.src, type: 'desktop' as const },
      { src: RealEstate2.src, type: 'desktop' as const },
    ],
  },

  {
    id: 4,
    title: "Jan – Apr 2024",
    subtitle: "Academic Project",
    projectName: "E-Learning Platform",
    description:
      "End-of-Studies Academic Project: Collaborated with a colleague to build an e-learning web platform. Focused on frontend architecture and UI using React and Redux.",
    images: [
      { src: eLearningPlatform1.src, type: 'desktop' as const },
      { src: eLearningPlatform2.src, type: 'desktop' as const },
    ],
  },

  {
    id: 5,
    title: "May – Aug 2023",
    subtitle: "Internship at GISMA IT SOLUTIONS",
    projectName: "Car Rental Platform",
    description:
      "A full-stack car rental platform featuring a client interface for browsing cars, making reservations, and managing profiles, plus an admin dashboard for managing vehicles, clients, and bookings.",
    images: [
      { src: CarRentalHero.src, type: 'desktop' as const },
      { src: CarRentalCatalog.src, type: 'desktop' as const },
    ],
  },
];
