import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import GrainOverlay from "./components/GrainOverlay";
import Services from "./components/Services";
import Eyebrows from "./components/Eyebrows";
import Hairstyles from "./components/Hairstyles";
import Policy from "./components/Policy";
import PaymentMethods from "./components/PaymentMethods";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";

import SplashScreen from "./components/SplashScreen";
import SectionDivider from "./components/SectionDivider";

function App() {
  return (
    <div className="overflow-x-hidden">
      <SplashScreen />
      <GrainOverlay />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <SectionDivider />
        <Services />
        <Eyebrows />
        <SectionDivider />
        <Hairstyles />
        <SectionDivider />
        <Policy />
        <PaymentMethods />
        <BookingCTA />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}

export default App;
