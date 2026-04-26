import HeroSection from '@/components/HeroSection';
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ActionsSection from "@/components/ActionsSection";
import AudienceSection from "@/components/AudienceSection";
import VisionSection from "@/components/VisionSection";
import CTASection from "@/components/CTASection";
import ServicesSection from '@/components/ServicesSection';
import CommunitySection from '@/components/CommunitySection';

export default function Home() {
  return (
    <div className="min-h-screen bg-tech-dark text-white font-sans selection:bg-tech-blue selection:text-white">
      <main>
        <HeroSection />
        <AboutSection />
        <CommunitySection />
        <MissionSection />
        <ActionsSection />
        <AudienceSection />
        <VisionSection />
        <CTASection />
      </main>
    </div>
  );
}