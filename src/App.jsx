import { useEffect, useMemo, useState } from "react";

import AccentAura from "./components/layout/AccentAura.jsx";
import Hero from "./components/hero/Hero.jsx";
import HighlightsStrip from "./components/highlights/HighlightsStrip.jsx";
import PortfolioProjects from "./components/PortfolioProjects.jsx";
import ExperienceHighlights from "./components/ExperienceHighlights.jsx";
import EducationHighlights from "./components/EducationHighlights.jsx";
import FocusAreas from "./components/FocusAreas.jsx";
import Footer from "./components/layout/Footer.jsx";
import SectionHeading from "./components/common/SectionHeading.jsx";
import { profileLinks, socialLinks } from "./data/profile.js";
import { sections } from "./data/sections.js";
import { snapshotHighlights } from "./data/highlights.js";
import { projects } from "./data/projects.js";
import { experience } from "./data/experience.js";
import { education } from "./data/education.js";
import { focusAreas } from "./data/focusAreas.js";

const sectionComponents = {
  projects: PortfolioProjects,
  experience: ExperienceHighlights,
  education: EducationHighlights,
  focus: FocusAreas,
};

const sectionData = {
  projects,
  experience,
  education,
  focus: focusAreas,
};

export default function App() {
  const sectionIds = useMemo(() => sections.map((section) => section.id), []);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (inView.length > 0) {
          const closest = inView[0].target.id;
          setActiveSection((prev) => (prev === closest ? prev : closest));
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -30% 0px",
      },
    );

    const targets = ["top", ...sectionIds]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-base-900">
      <AccentAura />
      <Hero
        profileLinks={profileLinks}
        socialLinks={socialLinks}
        sections={sections}
        activeSection={activeSection}
      />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-8 lg:px-10">
        <main className="flex flex-1 flex-col gap-28">
          <HighlightsStrip items={snapshotHighlights} />
          {sections.map((section) => {
            const SectionComponent = sectionComponents[section.id];
            if (!SectionComponent) {
              return null;
            }

            return (
              <section key={section.id} id={section.id} className="space-y-12">
                <SectionHeading {...section} />
                {section.id === "projects" && (
                  <SectionComponent projects={projects} />
                )}
                {section.id === "experience" && (
                  <SectionComponent items={experience} />
                )}
                {section.id === "education" && (
                  <SectionComponent items={education} />
                )}
                {section.id === "focus" && (
                  <SectionComponent areas={focusAreas} />
                )}
              </section>
            );
          })}
        </main>
        <Footer socialLinks={socialLinks} />
      </div>
    </div>
  );
}
