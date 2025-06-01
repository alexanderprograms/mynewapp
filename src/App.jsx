import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow p-6">
        <p className="text-lg">Welcome to my site!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

