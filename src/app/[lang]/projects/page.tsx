import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";

interface ProjectItem {
  id: "plantcare" | "dicovent" | "asclepius" | "storyapp" | "tolistapps" | "posedetection";
  title: string;
  techStack: string[];
  link?: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "plantcare",
    title: "PlantCare",
    techStack: ["Android Native", "Firebase", "Retrofit", "XML"],
    link: "https://github.com/PlantCare-Bangkit/PlantCare-App",
  },
  {
    id: "dicovent",
    title: "Dicovent",
    techStack: ["Android Native", "Retrofit", "Room", "SharedPreferences", "XML"],
    link: "https://github.com/Rosyidmw/Dicovent",
  },
  {
    id: "asclepius",
    title: "Asclepius",
    techStack: ["Android Native", "TFLite", "XML"],
    link: "https://github.com/Rosyidmw/Asclepius-Submission",
  },
  {
    id: "storyapp",
    title: "StoryApp",
    techStack: ["Android Native", "GMaps API", "Retrofit", "XML"],
    link: "https://github.com/Rosyidmw/StorySubmission",
  },
  {
    id: "tolistapps",
    title: "ToListApps",
    techStack: ["Firebase", "Flutter", "Supabase"],
    link: "https://github.com/ToListApps/ToList",
  },
  {
    id: "posedetection",
    title: "PoseDetection",
    techStack: ["Jetpack Compose", "TFLite"],
    link: "https://github.com/Rosyidmw/PoseDetectionJetpackCompose",
  }
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const p = await params;
  return {
    title: p.lang === 'id' ? "Proyek Lainnya | Rosyid Mukti Wibowo" : "Other Projects | Rosyid Mukti Wibowo",
    description: "A collection of other mobile development projects by Rosyid Mukti Wibowo.",
  };
}

export default async function ProjectsPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = (params.lang as "en" | "id") || "en";
  const dict = await getDictionary(lang);
  const t = dict.otherProjects;

  return (
    <div className="flex-1 w-full flex flex-col pt-16">
      <div className="container mx-auto px-6 max-w-6xl pt-12 pb-6">
        <Link 
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {t.backHome}
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">
          {t.titlePre} <span className="text-blue-600 dark:text-blue-500">{t.titleHighlight}</span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mx-auto mb-16">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 text-sm flex-1">
                {t.projects[project.id]}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50/50 text-blue-700 border border-blue-100 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-900/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                {project.link ? (
                  <Link 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    {t.viewProject} <ExternalLink size={14} />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 dark:text-zinc-600 cursor-not-allowed">
                    {t.privateProject} <ExternalLink size={14} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
