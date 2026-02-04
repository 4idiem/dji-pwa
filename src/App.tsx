import { RecommendedSection } from "./sections/RecommendedSection/RecommendedSection";
import { AdvantagesSection } from "./sections/AdvantagesSection";
import { NewArrivalsSection } from "./sections/NewArrivalsSection";
import { SalesSection } from "./sections/SalesSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { CtaBannerSection } from "./sections/CtaBannerSection";
import { ServicesSection } from "./sections/ServicesSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { CatalogSection } from "./sections/CatalogSection";
import { HeroSlider } from "./sections/HeroSlider";
import { Header } from "./sections/Header";
import { Footer } from "./sections/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ flex: 1 }}>
        <HeroSlider />
        <RecommendedSection />
        <NewArrivalsSection />
        <CatalogSection />
        <FeaturesSection />
        <AdvantagesSection />
        <ServicesSection />
        <CtaBannerSection />
        <SalesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
