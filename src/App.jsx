import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <Header />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <Hero />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <Features />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

