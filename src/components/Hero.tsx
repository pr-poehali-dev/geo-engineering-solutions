import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Геолого-инжиниринговый
            <span className="block text-blue-400">центр</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Профессиональные услуги в области геологических изысканий,
            инженерного проектирования и технического консультирования
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Наши услуги
            </button>
            <button className="border border-gray-400 hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Связаться с нами
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <Icon
              name="Layers"
              size={48}
              className="text-blue-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Геологические изыскания
            </h3>
            <p className="text-gray-400">
              Комплексные исследования грунтов и подземных структур
            </p>
          </div>
          <div className="text-center">
            <Icon
              name="Settings"
              size={48}
              className="text-blue-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Инженерное проектирование
            </h3>
            <p className="text-gray-400">
              Разработка технических решений для строительства
            </p>
          </div>
          <div className="text-center">
            <Icon
              name="Users"
              size={48}
              className="text-blue-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Консультирование</h3>
            <p className="text-gray-400">
              Экспертная поддержка на всех этапах проекта
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
