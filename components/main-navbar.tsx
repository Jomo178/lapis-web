import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNavbar({ items, children }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="items-center space-x-2 flex">
        <Image
          src="/images/lapis.webp"
          alt="profile picture"
          className="rounded-full"
          width={30}
          height={30}
        ></Image>
        <span className="font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      ></button>
    </div>
  );
}
