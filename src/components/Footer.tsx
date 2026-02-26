import { socials } from "@/data/socials";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="w-full px-10 md:px-16 pb-6 flex items-end justify-between">
      <div>
        <p className="text-[0.70rem] text-tertiary font-serif italic mb-3">
          references
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <SocialIcon
              key={social.name}
              icon={social.icon}
              url={social.url}
              name={social.name}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-[0.70rem] text-tertiary font-sans">
        <span>princeton, nj</span>
      </div>
    </footer>
  );
}
