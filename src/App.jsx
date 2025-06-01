import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div><Header /></div>
        <div><Hero /></div>
        <div><Features /></div>
        <div><Contact /></div>
        <div><Footer /></div>
      </div>
    </div>
  );
}

export default App;
