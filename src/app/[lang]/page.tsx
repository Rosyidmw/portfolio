import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { getDictionary } from "@/dictionaries";

export default async function Home(
  props: { params: Promise<{ lang: string }> }
) {
  const params = await props.params;
  const lang = (params.lang as "en" | "id") || "en";
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict.hero} />
      <Experience dict={dict.experience} />
      <Projects dict={dict.featuredProject} currentLang={lang} />
      <Skills dict={dict.skills} />
    </>
  );
}
