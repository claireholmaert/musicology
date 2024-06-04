// layout
import Hero from "./components/Hero";

// components
import Header from "./components/layout/Header";
import Pricing from "./components/Pricing";
import Simon from "./components/Simon";
import Stats from "./components/Stats";
import Tour from "./components/Tour";

function App() {

  return (
    <div className="">
      <Header />
      <Hero />
      <Tour />
      <Pricing />
      <Stats />
      <Simon />
    </div>
  )
}

export default App
