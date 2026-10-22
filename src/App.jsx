import { useCallback, useEffect, useMemo, useState } from "react";

import Header from "./components/layout/Header.jsx";
import AccentAura from "./components/layout/AccentAura.jsx";
import Hero from "./components/hero/Hero.jsx";
import PortfolioProjects from "./components/PortfolioProjects.jsx";
import Timeline from "./components/common/Timeline.jsx";
import FocusAreas from "./components/FocusAreas.jsx";
import Footer from "./components/layout/Footer.jsx";
import SectionHeading from "./components/common/SectionHeading.jsx";
import ResumeView from "./components/resume/ResumeView.jsx";
import { profileLinks, socialLinks } from "./data/profile.js";
import { sections } from "./data/sections.js";
import { projects } from "./data/projects.js";
import { experience } from "./data/experience.js";
import { education } from "./data/education.js";
import { focusAreas } from "./data/focusAreas.js";

const sectionComponents = {
  projects: PortfolioProjects,
  experience: Timeline,
  education: Timeline,
  focus: FocusAreas,
};

export default function App() {
  const sectionIds = useMemo(() => sections.map((section) => section.id), []);
  const [activeSection, setActiveSection] = useState("top");
  const [showResume, setShowResume] = useState(() => {
    return typeof window !== "undefined" && window.location.hash === "#resume";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setShowResume(window.location.hash === "#resume");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleBackToPortfolio = useCallback(() => {
    window.history.replaceState(null, "", window.location.pathname);
    setShowResume(false);
  }, []);

  useEffect(() => {
    if (showResume) return;

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection("top");
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        if (sectionIds.length > 0) {
          setActiveSection(sectionIds[sectionIds.length - 1]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 120) {
          setActiveSection("top");
          return;
        }

        const inView = entries
          .filter((entry) => entry.isIntersecting && entry.target.id !== "top")
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (inView.length > 0) {
          const closest = inView[0].target.id;
          setActiveSection((prev) => (prev === closest ? prev : closest));
        }
      },
      {
        threshold: [0.15, 0.4, 0.7],
        rootMargin: "-20% 0px -50% 0px",
      },
    );

    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    targets.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      targets.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds, showResume]);

  if (showResume) {
    return <ResumeView onBack={handleBackToPortfolio} />;
  }

  return (
    <div className="relative min-h-screen bg-base-950 text-base-100 font-sans overflow-x-clip">
      <AccentAura />

      {/* Fixed Floating Navigation Bar */}
      <Header sections={sections} activeSection={activeSection} />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-16 pb-20 sm:px-6 sm:pt-20 lg:px-8">
        <Hero profileLinks={profileLinks} socialLinks={socialLinks} />

        <main className="mt-16 flex flex-1 flex-col gap-24 sm:gap-28">
          {sections.map((section) => {
            const SectionComponent = sectionComponents[section.id];
            if (!SectionComponent) {
              return null;
            }

            return (
              <section
                key={section.id}
                id={section.id}
                className="space-y-8 sm:space-y-10 scroll-mt-28"
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
