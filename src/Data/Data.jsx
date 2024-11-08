import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

export const navItems = [
  { href: "/lookbook", label: "Lookbook" },
  { href: "/contact", label: "Contact" },
];


export const socialLinks = [
  {
    href: "https://www.instagram.com",
    icon: <AiFillInstagram size={24} />,
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com",
    icon: <FaTiktok size={24} />,
    label: "TikTok",
  },
];


export const portfolioItems = [
    {
      id: 1,
      category: "wedding",
      image: "/api/placeholder/400/600",
      title: "Wedding Gown",
    },
    {
      id: 2,
      category: "evening",
      image: "/api/placeholder/400/600",
      title: "Evening Dress",
    },
    {
      id: 3,
      category: "casual",
      image: "/api/placeholder/400/600",
      title: "Summer Dress",
    },
  ];