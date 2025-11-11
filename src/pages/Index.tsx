import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  { id: 'business-cards', name: 'Визитки', icon: 'CreditCard' },
  { id: 'posters', name: 'Плакаты', icon: 'Image' },
  { id: 'printing', name: 'Виды печати', icon: 'Printer' },
  { id: 'notebooks', name: 'Блокноты', icon: 'BookOpen' },
  { id: 'photobooks', name: 'Фотокниги', icon: 'Camera' },
  { id: 'certificates', name: 'Сертификаты', icon: 'Award' },
  { id: 'postpress', name: 'Послепечатная обработка', icon: 'Scissors' },
  { id: 'materials', name: 'Материалы и бумага', icon: 'Package' },
  { id: 'branding', name: 'Брендирование', icon: 'Sparkles' },
  { id: 'design', name: 'Дизайн', icon: 'Palette' },
];

const portfolioItems = [
  {
    id: 1,
    title: 'Визитки премиум класса',
    category: 'business-cards',
    image: 'https://cdn.poehali.dev/projects/357171d5-f6a5-4cd0-9742-dac81906240c/files/891450db-d537-4b2d-a477-fcf6f4b09c64.jpg',
  },
  {
    id: 2,
    title: 'Корпоративные плакаты',
    category: 'posters',
    image: 'https://cdn.poehali.dev/projects/357171d5-f6a5-4cd0-9742-dac81906240c/files/7b1b7c13-bb8f-450b-97e6-395aaad4effd.jpg',
  },
  {
    id: 3,
    title: 'Фотокниги и блокноты',
    category: 'photobooks',
    image: 'https://cdn.poehali.dev/projects/357171d5-f6a5-4cd0-9742-dac81906240c/files/72b17413-592e-48b0-9436-689e288463e5.jpg',
  },
  {
    id: 4,
    title: 'Офсетная печать каталогов',
    category: 'printing',
    image: 'https://cdn.poehali.dev/projects/357171d5-f6a5-4cd0-9742-dac81906240c/files/7b1b7c13-bb8f-450b-97e6-395aaad4effd.jpg',
  },
  {
    id: 5,
    title: 'Подарочные сертификаты',
    category: 'certificates',
    image: 'https://cdn.poehali.dev/projects/357171d5-f6a5-4cd0-9742-dac81906240c/files/891450db-d537-4b2d-a477-fcf6f4b09c64.jpg',
  },
  {
    id: 6,
    title: 'Премиум блокноты',
    category: 'notebooks',
    image: 'https://cdn.poehali.dev/projects/357171d5-f6a5-4cd0-9742-dac81906240c/files/72b17413-592e-48b0-9436-689e288463e5.jpg',
  },
];

export default function Index() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Printer" size={28} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">ПринтМастер</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Портфолио
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
              <Button className="ml-4">Получить консультацию</Button>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-4">
                <a
                  href="#services"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a
                  href="#portfolio"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Портфолио
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О нас
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <Button>Получить консультацию</Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-white to-secondary py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Печать от 50 штук
                <br />
                за 24 часа
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Визитки, листовки, каталоги и брошюры с доставкой по Новосибирску. Бесплатная проверка макетов перед печатью.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base">
                  Заказать печать
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/357171d5-f6a5-4cd0-9742-dac81906240c/files/7b1b7c13-bb8f-450b-97e6-395aaad4effd.jpg"
                alt="Современное печатное оборудование"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр полиграфических услуг для вашего бизнеса
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{service.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Примеры выполненных проектов высокого качества
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('all')}
                className="text-sm"
              >
                Все работы
              </Button>
              {services.slice(0, 6).map((service) => (
                <Button
                  key={service.id}
                  variant={activeFilter === service.id ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(service.id)}
                  className="text-sm"
                >
                  {service.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {services.find((s) => s.id === item.category)?.name}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Работаем с вашими задачами</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Нужно срочно? Печатаем за сутки</h3>
                    <p className="text-muted-foreground">Заказы от 50 штук выполняем за 24 часа без наценки за срочность</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Нет дизайна? Поможем бесплатно</h3>
                    <p className="text-muted-foreground">Адаптируем ваш макет под печать или создадим простой дизайн — без доплат</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Не уверены в тираже? Начните с минимума</h3>
                    <p className="text-muted-foreground">Напечатаем пробную партию от 50 экземпляров, чтобы оценить результат</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Бесплатная доставка по Новосибирску</h3>
                    <p className="text-muted-foreground">Привезём заказ в удобное для вас время в пределах города</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/357171d5-f6a5-4cd0-9742-dac81906240c/files/72b17413-592e-48b0-9436-689e288463e5.jpg"
                alt="О типографии"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Готовы обсудить ваш проект? Мы всегда рады помочь
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (800) 123-45-67</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">info@printmaster.ru</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Новосибирск, ул. Красный проспект, д. 47</p>
              </Card>
            </div>

            <Card className="p-8 mt-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Printer" size={28} className="text-primary" />
                <span className="text-xl font-bold">ПринтМастер</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональная типография с 15-летним опытом работы
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Визитки
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Плакаты
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Фотокниги
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Брендирование
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-primary transition-colors">
                    Портфолио
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (800) 123-45-67</li>
                <li>info@printmaster.ru</li>
                <li>г. Новосибирск, ул. Красный проспект, д. 47</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ПринтМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}