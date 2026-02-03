import { RecommendedSection } from "./sections/RecommendedSection/RecommendedSection";
import { NewArrivalsSection } from "./sections/NewArrivalsSection";
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
