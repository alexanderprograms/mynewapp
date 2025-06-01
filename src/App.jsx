import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="font-sans px-4 md:px-8">
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
}


export default App;
