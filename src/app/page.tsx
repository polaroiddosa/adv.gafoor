import Hero from "@/components/Hero";
import VisionGrid from "@/components/VisionGrid";
import AboutSection from "@/components/AboutSection";
import NewsUpdates from "@/components/NewsUpdates";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <AboutSection />
      <VisionGrid limit={3} />
      <NewsUpdates limit={4} />
    </div>
  );
}
