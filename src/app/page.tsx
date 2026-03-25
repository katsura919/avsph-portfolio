import CTABookACall from "@/components/CTABookACall";
import PortfolioCapabilities from "@/components/portfolio/PortfolioCapabilities";
import PortfolioFeatured from "@/components/portfolio/PortfolioFeatured";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioProcess from "@/components/portfolio/PortfolioProcess";
import PortfolioStats from "@/components/portfolio/PortfolioStats";

export default function PortfolioPage() {
  return (
    <main className="bg-[var(--background)]">
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioFeatured />
      <PortfolioGallery />
      <PortfolioCapabilities />
      <PortfolioProcess />

      <section className="section bg-white">
        <div className="container">
          <CTABookACall
            title="Ready to launch your next high-converting page?"
            subtitle="Let's map the page, assign the right VA, and build a system that turns every visitor into revenue."
          />
        </div>
      </section>
    </main>
  );
}
