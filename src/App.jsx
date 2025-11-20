import React, { useState, useEffect } from 'react';
import { Moon, Calendar, CheckCircle, Bell, TrendingUp, Heart, Menu, X } from 'lucide-react';

export default function YashelTrackerLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: 'Учёт пропущенных намазов',
      description: 'Отслеживайте все пропущенные намазы с точными датами и причинами'
    },
    {
      icon: Moon,
      title: 'Трекинг постов',
      description: 'Ведите учёт пропущенных дней поста и планируйте их восполнение'
    },
    {
      icon: Bell,
      title: 'Умные напоминания',
      description: 'Получайте уведомления о времени намаза и планах восполнения'
    },
    {
      icon: TrendingUp,
      title: 'Статистика прогресса',
      description: 'Визуализация вашего пути к восполнению пропущенных ибадатов'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Пользователей' },
    { number: '300+', label: 'Подписчиков телеграмм канала' },
    { number: '4.9', label: 'Ещё какие-то цифры' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Islamic Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23059669' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-2 rounded-xl">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Яшел Трекер
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition">Возможности</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition">Как работает</a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition">Отзывы</a>
            </nav>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <a 
              href="https://t.me/yashel_tracker_bot" 
              className="hidden md:block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Начать использовать
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col px-4 py-4 space-y-3">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition py-2">Возможности</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition py-2">Как работает</a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition py-2">Отзывы</a>
              <a href="https://t.me/yashel_tracker_bot" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full text-center">
                Начать использовать
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold">
              ☪️ Telegram бот для мусульман
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Восполняйте намазы
              </span>
              <br />
              <span className="text-gray-900">с лёгкостью</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Умный Telegram-бот для учёта и восполнения пропущенных намазов и постов. 
              Следите за прогрессом и укрепляйте свою связь с Всевышним.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/yashel_tracker_bot" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Moon className="w-5 h-5 mr-2" />
                Открыть бота
              </a>
              <a 
                href="#how-it-works" 
                className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              >
                Узнать больше
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Возможности бота
            </h2>
            <p className="text-xl text-gray-600">
              Всё необходимое для учёта и восполнения ибадатов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    activeFeature === idx ? 'ring-4 ring-emerald-500' : ''
                  }`}
                  onMouseEnter={() => setActiveFeature(idx)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-4 rounded-xl">
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600">
              Три простых шага к организованному восполнению
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Запустите бота', desc: 'Откройте бота в Telegram и начните использовать' },
              { step: '02', title: 'Добавьте данные', desc: 'Укажите количество пропущенных намазов и постов' },
              { step: '03', title: 'Отслеживайте прогресс', desc: 'Восполняйте и отмечайте выполненные ибадаты' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl font-bold text-emerald-200 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Что говорят пользователи
            </h2>
            <p className="text-xl text-emerald-100">
              Истории людей, которые используют Яшел Трекер
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Елена', text: 'Я невероятно благодарна Всевышнему , что посредством Вашего канала Он открыл тему намаза для меня и многих других с другой стороны, глубже и более осознанно. Пусть Аллах запишет за Вами все благодеяния, которые будут совершены по причине этого. Аминь.' },
              { name: 'Исмагиль', text: 'Такие емкие и ценные слова от хазрата🔥\nСпасибо за ваш труд!' },
              { name: 'Семья', text: 'Спасибо! Мы пропущенные намазы восполняли в Мекке и Медине. С тех пор не пропускаем.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-emerald-200 font-semibold">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 shadow-2xl">
            <Moon className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
            <h2 className="text-4xl font-bold mb-4">
              Начните восполнять намазы уже сегодня
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Присоединяйтесь к тысячам мусульман, которые используют Яшел Трекер
            </p>
            <a 
              href="https://t.me/yashel_tracker_bot" 
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Открыть бота в Telegram →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-2 rounded-xl">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Яшел Трекер</span>
          </div>
          <p className="text-gray-400 mb-4">
            Telegram бот для учёта и восполнения пропущенных намазов и постов
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Яшел Трекер. Сделано с ❤️ для мусульманской уммы
          </p>
        </div>
      </footer>
    </div>
  );
}