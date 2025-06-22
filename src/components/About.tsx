const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">
            Высокий уровень предлагаемых решений
          </h2>
        </div>

        <div className="space-y-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="border border-gray-300 p-6 flex items-center gap-6"
            >
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=200&h=120&fit=crop"
                  alt="Система очистки"
                  className="w-48 h-28 object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Система очистки</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem accusantium quos assumenda sint consequatur
                  laborum. Reiciendis inventore tenetur quo earum qui libero
                  exercitationem accusamus aspernatur.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition-colors">
            УЗНАТЬ БОЛЬШЕ
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
