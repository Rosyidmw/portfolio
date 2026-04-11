import { Mail, Phone, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Hero({ dict }: { dict: any }) {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">
            {dict.greeting} <span className="text-blue-600 dark:text-blue-500">Rosyid Mukti Wibowo</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-zinc-600 dark:text-zinc-400 mb-6">
            {dict.role}
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-10">
            {dict.summary}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a 
              href="https://drive.google.com/file/d/1npDKnXrh30-XoDixdTuf6ac5ePDol9yY/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              <FileText size={18} />
              {dict.downloadCv}
            </a>
            <Link 
              href="mailto:rosyidmktwbw@gmail.com"
              className="flex items-center gap-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-5 py-2.5 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              <Mail size={18} />
              {dict.contact}
            </Link>
            <Link 
              href="https://www.linkedin.com/in/rosyidmktwbw/"
              target="_blank"
              className="flex items-center justify-center p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </Link>
            <Link 
              href="https://github.com/Rosyidmw"
              target="_blank"
              className="flex items-center justify-center p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
