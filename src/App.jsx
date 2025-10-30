import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-slate-900 bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
