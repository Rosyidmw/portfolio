import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer({ dict }: { dict: any }) {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 mt-16">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg tracking-tight">Rosyid Mukti Wibowo</span>
          <span className="text-zinc-600 dark:text-zinc-400 text-sm">{dict.role || "Mobile Developer"}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="https://github.com/Rosyidmw" target="_blank" className="p-2 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/rosyidmktwbw/" target="_blank" className="p-2 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:rosyidmktwbw@gmail.com" className="p-2 text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
