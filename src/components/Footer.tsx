import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MessageCircle,
  Briefcase,
  Send,
  Camera,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: <MessageCircle className="w-5 h-5 " />,
      href: "https://www.facebook.com/avsphvirtualassistanceservices",
    },
    {
      name: "LinkedIn",
      icon: <Briefcase className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/advanced-virtual-staff-ph/",
    },
    {
      name: "Twitter",
      icon: <Send className="w-5 h-5" />,
      href: "https://x.com/advancedvstaff",
    },
    {
      name: "Instagram",
      icon: <Camera className="w-5 h-5" />,
      href: "https://www.instagram.com/advancedvirtualstaff",
    },
  ];

  return (
    <footer className="bg-white text-gray-600">
      {/* <div className="container py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center md:items-start md:text-left">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.jpeg"
                alt="Advanced Virtual Staff Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span
                  className="text-lg font-bold leading-tight"
                  style={{ color: "var(--primary)" }}
                >
                  ADVANCED
                </span>
                <span
                  className="text-sm font-medium leading-tight"
                  style={{ color: "var(--secondary)" }}
                >
                  VIRTUAL STAFF
                </span>
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-gray-600">
              Your trusted partner for premium virtual staffing solutions. We
              connect businesses with exceptional talent from our top 1% pool.
            </p>
            <div className="mb-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-colors hover:bg-[var(--primary)] hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="tel:+13183929582"
                className="flex items-center gap-2 hover:text-primary transition-colors text-gray-600"
              >
                <Phone className="w-4 h-4" />
                +1 731-300-9692
              </a>
              <a
                href="mailto:info@advancedvirtualstaff.com"
                className="flex items-center gap-2 hover:text-primary transition-colors text-gray-600"
              >
                <Mail className="w-4 h-4" />
                admin@advancedvirtualstaff.com
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Copyright Bar */}
      <div className="py-4 bg-primary">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
          <p className="text-white">© {currentYear} Advanced Virtual Staff. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
