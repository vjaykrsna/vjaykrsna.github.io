import { useEffect, useMemo, useState } from "react";

import AccentAura from "./components/layout/AccentAura.jsx";
import Hero from "./components/hero/Hero.jsx";
import HighlightsStrip from "./components/highlights/HighlightsStrip.jsx";
import PortfolioProjects from "./components/PortfolioProjects.jsx";
import ExperienceHighlights from "./components/ExperienceHighlights.jsx";
import EducationHighlights from "./components/EducationHighlights.jsx";
import FocusAreas from "./components/FocusAreas.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
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
    <div className="relative min-h-screen overflow-x-clip bg-base-900">
      <AccentAura />
      <Header sections={sections} activeSection={activeSection} />
      <Hero profileLinks={profileLinks} socialLinks={socialLinks} />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-12 md:px-8 lg:gap-16 lg:px-10 lg:pb-24 lg:pt-16">
        <main className="flex flex-1 flex-col gap-12 sm:gap-16 lg:gap-20">
          <HighlightsStrip items={snapshotHighlights} />
          {sections.map((section) => {
            const SectionComponent = sectionComponents[section.id];
            if (!SectionComponent) {
              return null;
            }

            return (
              <section
                key={section.id}
                id={section.id}
                className="space-y-7 sm:space-y-9 lg:space-y-12"
              >
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
