import FAQ from "./components/faq";
import Features from "./components/features";
import LandingPage from "./components/landing";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";

export default function Home() {
  return (
    <>
    <Header />
      <LandingPage />
      <Features />
      <FAQ />
    <Footer />
    </>
  );
}
