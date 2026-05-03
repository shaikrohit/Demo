import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import MenuSection from './components/MenuSection';
import TopDishes from './components/TopDishes';
import BookingForm from './components/BookingForm';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import './index.css';

function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--primary-blue)] selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <TopDishes />
        <MenuSection />
        <BookingForm />
        <Gallery />
        <Reviews />
        <Location />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
