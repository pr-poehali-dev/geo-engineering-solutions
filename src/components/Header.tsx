import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <span className="text-xs font-light tracking-wider text-blue-400">
              TECHNOLOGY
            </span>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-bold tracking-wide">
              ГЕОЛОГО-ИНЖИНИРИНГОВЫЙ ЦЕНТР
            </h1>
          </div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a
              href="#services"
              className="hover:text-blue-400 transition-colors"
            >
              УСЛУГИ
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              О НАС
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              КОНТАКТЫ
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
