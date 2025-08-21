


const Navbar = () => {

    return (
      <header className="bg-slate-800 text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://new.smartcad.sk/wp-content/uploads/2023/10/smartcad-logo-v-krivkach_-biele-638x100.png" 
              alt="smartCad Logo" 
              className="h-10" />
            
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <a href="#riesenia" className="hover:text-teal-400 transition-colors">Riešenia</a>
            <a href="#produkty" className="hover:text-teal-400 transition-colors">Produkty</a>
            <a href="#skolenia" className="hover:text-teal-400 transition-colors">Školenia</a>
            <a href="#o-nas" className="hover:text-teal-400 transition-colors">O nás</a>
            <a href="#blog" className="hover:text-teal-400 transition-colors">Blog</a>
            <a href="#kontakt" className="hover:text-teal-400 transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center space-x-4">
            
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
              E-shop
            </button>
          </div>
        </div>
      </header>



    );
}


export default Navbar;