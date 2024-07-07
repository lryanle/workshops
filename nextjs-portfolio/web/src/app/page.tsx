import AboutMe from "@/components/headers/AboutMe";
import ItemCard from "@/components/ItemCard";
import Section from "@/components/Sections";
import { Briefcase, Folder } from "lucide-react";
import Image from "next/image";
import { data } from "@/lib/data";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between px-24">
			<div className="max-w-lg bg-primary-foreground p-2 pb-0 rounded-xl w-full flex flex-col items-center justify-between gap-4">
        <AboutMe name={data.name} role={data.role} availability={data.availability as "available" | "open" | "unavailable"} location={data.location} email={data.email} image={data.image} resume={data.resume} currentCompany={data.experience[0]} />
				<Section title="Projects" icon={<Folder />}>
          {data.projects.map((project) => {
            return (
              <ItemCard
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
                key={project.title}
              />
            );
          })}
				</Section>
				<Section title="Experience" icon={<Briefcase />}>
          {data.experience.map((experience) => {
            return (
              <ItemCard
                image={experience.image}
                title={experience.title}
                description={experience.description}
                tags={experience.tags}
                href={experience.href}
                key={experience.title}
              />
            );
          })}
				</Section>
				<Section title="Education" icon={<Briefcase />}>
          {data.education.map((education) => {
            return (
              <ItemCard
                image={education.image}
                title={education.title}
                description={education.description}
                tags={education.tags}
                href={education.href}
                key={education.title}
              />
            );
          })}
				</Section>
			</div>
		</main>
	);
}
