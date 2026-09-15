import React from 'react';
import { HeroSlider, QuickActions } from '@/components/sections/HeroAndActions';
import { AboutSection, ServicesSection, TowingServicesHomeSection } from '@/components/sections/AboutAndServices';
import { HaulageHomeSection } from '@/components/sections/HaulageSection';
import { FeaturedVehicles, RentalFleet } from '@/components/sections/VehiclesAndRentals';
import { AutoParts, WhyChooseUs } from '@/components/sections/PartsAndWhyUs';
import { TowingAppPromo, FAQ, BlogSection } from '@/components/sections/BottomSections';
import SEO from '@/components/seo/SEO';

export default function Home() {
  return (
    <main>
      <SEO title="Santa Towing | 24/7 Towing, Haulage, Repairs & Rentals in Ghana" description="Expert 24/7 emergency towing, nationwide haulage & heavy machinery transport, professional auto repairs, vehicle sales, and premium car rentals in Ghana." canonical="/" />
      <HeroSlider />
      <QuickActions />
      <AboutSection />
      <ServicesSection />
      <TowingServicesHomeSection />
      <HaulageHomeSection />
      <TowingAppPromo />
      <FeaturedVehicles />
      <RentalFleet />
      <AutoParts />
      <WhyChooseUs />
      <BlogSection />
      <FAQ />
    </main>
  );
}
