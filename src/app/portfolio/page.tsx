import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore weddings, receptions, pre-weddings, candid and traditional ceremony photography by Picture Rituals, Jamnagar.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="container-x pb-8 pt-32 sm:pt-40">
        <Reveal>
          <SectionHeading
            kicker="Portfolio"
            title="A curated archive of celebrations"
            description="Filter by category and tap any frame to view it full screen."
          />
        </Reveal>
      </section>

      <section className="container-x pb-20 pt-2 sm:pb-28">
        <Gallery />
      </section>
    </>
  );
}
