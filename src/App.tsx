import { RecommendedSection } from "./sections/RecommendedSection/RecommendedSection";
import { Footer } from "./sections/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main style={{ padding: 16, flex: 1 }}>
        <RecommendedSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
