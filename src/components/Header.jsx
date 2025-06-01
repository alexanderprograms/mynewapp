export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">MyBrand</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#" className="text-gray-600 hover:text-black">Features</a>
          <a href="#" className="text-gray-600 hover:text-black">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-black">Contact</a>
        </nav>
      </div>
    </header>
  );
}
