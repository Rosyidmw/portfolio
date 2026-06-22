import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "../SectionWrapper";
import { ExternalLink, Smartphone } from "lucide-react";

export function Projects({ dict, currentLang }: { dict: any; currentLang: string }) {
  return (
    <SectionWrapper id="projects" title={dict.sectionTitle}>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Project Image/Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center perspective-[1000px]">
          <div className="relative w-full max-w-[300px] aspect-9/20 rounded-4xl border-8 border-zinc-900 bg-zinc-900 shadow-2xl shadow-blue-900/20 dark:shadow-blue-500/10 transition-transform duration-500 hover:-translate-y-2 hover:rotate-y-[5deg]">
            {/* Punch hole camera for Android style */}
            <div className="absolute top-2.5 inset-x-0 w-4 h-4 rounded-full bg-black mx-auto z-20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800/80"></div>
            </div>
            
            {/* Screen Content */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
               <Image 
                 src="/mockup.png" 
                 alt="RIASEC App Interface" 
                 fill 
                 className="object-cover object-top"
                 sizes="(max-w-768px) 100vw, 320px"
                 priority
               />
               <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                 <span className="text-white font-medium flex items-center gap-2">
                   <Smartphone size={16} /> {dict.appPreview}
                 </span>
               </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{dict.badge}</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              RIASEC Interest & Talent Recommendation App
            </h3>
            
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
              {dict.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
              {dict.techStackTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Node.js', 'PostgreSQL', 'Gemini API'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-900/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="https://play.google.com/store/apps/details?id=com.rotibowif.growify"
              target="_blank"
              className="flex items-center justify-center w-full sm:w-auto gap-2 text-sm font-medium text-white bg-zinc-900 dark:text-zinc-900 dark:bg-white px-6 py-3 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              <ExternalLink size={16} />
              {dict.viewCaseStudy}
            </Link>
            <Link href={`/${currentLang}/projects`} className="flex items-center justify-center w-full sm:w-auto gap-2 text-sm font-medium px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-colors">
              {dict.viewOtherProjects}
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
