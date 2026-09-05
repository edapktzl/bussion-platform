export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-black">
          Bussion
        </h2>

        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-black">
            Platform
          </a>

          <a href="#" className="text-gray-700 hover:text-black">
            Kullanım alanları
          </a>

          <a href="#" className="text-gray-700 hover:text-black">
            Hakkımızda
          </a>

          <a href="#" className="text-gray-700 hover:text-black">
            İletişim
          </a>
        </div>

      </div>
    </nav>
  );
}
