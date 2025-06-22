import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Наши эксперты ответят на все вопросы и
            предложат оптимальное решение
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Phone" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
            <p className="text-gray-300">+7 (495) 123-45-67</p>
            <p className="text-gray-300">+7 (800) 456-78-90</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">info@geo-center.ru</p>
            <p className="text-gray-300">projects@geo-center.ru</p>
          </div>

          <div className="text-center md:col-span-2 lg:col-span-1">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MapPin" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Адрес</h3>
            <p className="text-gray-300">г. Москва, ул. Геологическая, 15</p>
            <p className="text-gray-300">БЦ "Технопарк", офис 420</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
            Заказать консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
