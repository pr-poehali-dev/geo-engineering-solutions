import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">СВЯЗАТЬСЯ С НАМИ</h2>
        </div>

        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Имя"
                className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Почта"
                className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Тип проекта"
                className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Сообщение"
                rows={4}
                className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
              />
            </div>
            <div className="text-center pt-8">
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
              >
                ОТПРАВИТЬ
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
