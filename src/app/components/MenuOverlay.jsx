import Link from "next/link";
import { Button } from "./ui";

export default function MenuOverlay({ links, onClose }) {
  return (
    <div className="border-t border-oma-line bg-oma-bg px-7 py-6 md:hidden">
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              onClick={onClose}
              className="block py-1 text-base font-medium text-oma-text2 transition-colors duration-150 hover:text-oma-text"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button variant="primary" href="/contact" onClick={onClose} className="w-full">
          Book consultation
        </Button>
      </div>
    </div>
  );
}
