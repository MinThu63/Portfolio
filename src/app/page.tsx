import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CompetitionsSection from "@/components/CompetitionsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AcademicsSection from "@/components/AcademicsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import DocumentsSection from "@/components/DocumentsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AnimateOnScroll>
          <AboutSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CompetitionsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ProjectsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <AcademicsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CertificationsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ExperienceSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <SkillsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ActivitiesSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <DocumentsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ContactSection />
        </AnimateOnScroll>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
