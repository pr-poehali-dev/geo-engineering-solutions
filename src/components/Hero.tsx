const Hero = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <img
            src="https://cdn.poehali.dev/files/cfbe5c73-bb3d-4cd4-85a3-98521d867366.png"
            alt="Геологическое оборудование"
            className="w-96 h-auto mx-auto mb-8"
          />
          <button className="bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition-colors">
            СВЯЗАТЬСЯ С КОМАНДОЙ
          </button>
        </div>

        <div className="bg-black text-white py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              ПРОЕКТИРОВАНИЕ ГОРНОДОБЫВАЮЩИХ И<br />
              НЕФТЕГАЗОВЫХ ОБЪЕКТОВ
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="border border-gray-600 p-6">
                <div className="text-3xl font-bold mb-2">37+</div>
                <div className="text-sm">
                  РЕАЛИЗОВАННЫХ
                  <br />
                  ПРОЕКТОВ
                </div>
              </div>
              <div className="border border-gray-600 p-6">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm">ЛЕТ НА РЫНКЕ</div>
              </div>
              <div className="border border-gray-600 p-6">
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-sm">
                  СНИЖЕНИЕ ВРЕДНЫХ
                  <br />
                  ВЫБРОСОВ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
