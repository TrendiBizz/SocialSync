"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaCalendarAlt,
  FaPlus,
  FaUser,
  FaEnvelope,
  FaChartBar,
  FaAd,
  FaHeadphones,
  FaCog,
  FaChevronUp,
  FaUserCircle
} from "react-icons/fa";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ href, icon, label, active }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center py-3 text-center text-xs",
        active ? "text-red-500" : "text-gray-600 hover:text-gray-800"
      )}
    >
      <div className="text-xl mb-1">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-14 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-2 mb-2">
        <Link href="/">
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1z M12,21c-5,0-9-4-9-9s4-9,9-9s9,4,9,9 S17,21,12,21z M15.5,8C16.3,8,17,7.3,17,6.5S16.3,5,15.5,5S14,5.7,14,6.5S14.7,8,15.5,8z M8.5,8C9.3,8,10,7.3,10,6.5 S9.3,5,8.5,5S7,5.7,7,6.5S7.7,8,8.5,8z M12,18c-3.3,0-6-2.7-6-6h12C18,15.3,15.3,18,12,18z" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col flex-grow">
        <NavItem
          href="/"
          icon={<FaHome />}
          label="Home"
          active={pathname === "/"}
        />
        <NavItem
          href="/plan"
          icon={<FaCalendarAlt />}
          label="Plan"
          active={pathname === "/plan"}
        />
        <NavItem
          href="/create"
          icon={<FaPlus />}
          label="Create"
          active={pathname === "/create"}
        />
        <NavItem
          href="/ai-assistant"
          icon={<FaUser />}
          label="Claude"
          active={pathname === "/ai-assistant"}
        />
        <NavItem
          href="/engage"
          icon={<FaEnvelope />}
          label="Engage"
          active={pathname === "/engage"}
        />
        <NavItem
          href="/analytics"
          icon={<FaChartBar />}
          label="Analytics"
          active={pathname === "/analytics"}
        />
        <NavItem
          href="/ads"
          icon={<FaAd />}
          label="Ads"
          active={pathname === "/ads"}
        />
        <NavItem
          href="/listening"
          icon={<FaHeadphones />}
          label="Listening"
          active={pathname === "/listening"}
        />
        <NavItem
          href="/automation"
          icon={<FaCog />}
          label="DM Automation"
          active={pathname.startsWith("/automation")}
        />
      </div>

      <div className="mt-auto mb-3">
        <NavItem
          href="#"
          icon={<FaChevronUp />}
          label=""
        />
        <div className="flex justify-center mt-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <FaUserCircle className="text-gray-400 text-2xl" />
          </div>
        </div>
      </div>
    </aside>
  );
}
