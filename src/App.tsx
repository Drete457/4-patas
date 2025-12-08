import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductsGallery from './components/ProductsGallery';
import PriceTables from './components/PriceTables';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main id="conteudo-principal" tabIndex={-1}>
        <Hero />
        <Services />
        <ProductsGallery />
        <PriceTables />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
