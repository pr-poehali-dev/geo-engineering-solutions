import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            О нашем центре
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы объединяем многолетний опыт в геологии и современные инженерные
            технологии для решения самых сложных задач в области строительства и
            горнодобывающей промышленности
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Наши ключевые направления
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Геологоразведка
                  </h4>
                  <p className="text-gray-600">
                    Бурение, отбор проб, лабораторные исследования
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon
                  name="Building2"
                  size={24}
                  className="text-blue-600 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Строительная геология
                  </h4>
                  <p className="text-gray-600">
                    Оценка грунтовых условий для фундаментов и сооружений
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon
                  name="Activity"
                  size={24}
                  className="text-blue-600 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Мониторинг
                  </h4>
                  <p className="text-gray-600">
                    Наблюдение за геологическими процессами и деформациями
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Наши преимущества
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
                <span className="text-gray-700">15+ лет опыта работы</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
                <span className="text-gray-700">Современное оборудование</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
                <span className="text-gray-700">
                  Лицензированные специалисты
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
                <span className="text-gray-700">Полный цикл услуг</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
                <span className="text-gray-700">
                  Соблюдение всех стандартов
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
