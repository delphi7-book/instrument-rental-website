import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      title: 'Аренда инструментов',
      description: 'Более 500 видов профессиональных инструментов для любых задач',
      icon: 'Wrench',
      features: ['Почасовая и посуточная аренда', 'Доставка и самовывоз', 'Техническая поддержка'],
      price: 'от 200₽/день'
    },
    {
      title: 'Доставка и установка',
      description: 'Быстрая доставка по Москве и области с установкой на объекте',
      icon: 'Truck',
      features: ['Доставка в течение 2 часов', 'Установка и настройка', 'Инструктаж по использованию'],
      price: 'Бесплатно по Москве'
    },
    {
      title: 'Техническое обслуживание',
      description: 'Полное техническое обслуживание арендованного оборудования',
      icon: 'Settings',
      features: ['Регулярная диагностика', 'Замена расходников', 'Экстренный ремонт'],
      price: 'Включено в стоимость'
    },
    {
      title: 'Консультации специалистов',
      description: 'Помощь в выборе инструментов и решении технических задач',
      icon: 'Users',
      features: ['Подбор оборудования', 'Техническая консультация', 'Обучение персонала'],
      price: 'Бесплатно'
    }
  ];

  const additionalServices = [
    {
      title: 'Аренда строительной техники',
      description: 'Крупногабаритное оборудование для строительства',
      items: ['Экскаваторы', 'Бульдозеры', 'Автокраны', 'Бетономешалки']
    },
    {
      title: 'Садовая техника',
      description: 'Оборудование для ухода за территорией',
      items: ['Газонокосилки', 'Триммеры', 'Культиваторы', 'Воздуходувки']
    },
    {
      title: 'Измерительные приборы',
      description: 'Точные измерительные инструменты',
      items: ['Лазерные уровни', 'Дальномеры', 'Нивелиры', 'Теодолиты']
    },
    {
      title: 'Генераторы и компрессоры',
      description: 'Энергетическое оборудование',
      items: ['Бензогенераторы', 'Дизельгенераторы', 'Компрессоры', 'Сварочные аппараты']
    }
  ];

  const packages = [
    {
      name: 'Базовый',
      description: 'Для небольших работ',
      price: '2,500₽/день',
      features: [
        'До 3 инструментов',
        'Доставка по Москве',
        'Базовая поддержка',
        'Страховка включена'
      ],
      popular: false
    },
    {
      name: 'Профессиональный',
      description: 'Для средних проектов',
      price: '5,000₽/день',
      features: [
        'До 7 инструментов',
        'Приоритетная доставка',
        'Техническая поддержка 24/7',
        'Замена при поломке',
        'Скидка 10% при аренде от 7 дней'
      ],
      popular: true
    },
    {
      name: 'Корпоративный',
      description: 'Для крупных проектов',
      price: 'По договору',
      features: [
        'Неограниченное количество',
        'Персональный менеджер',
        'Выездное обслуживание',
        'Индивидуальные условия',
        'Отсрочка платежа',
        'Скидка до 30%'
      ],
      popular: false
    }
  ];

  const workProcess = [
    {
      step: 1,
      title: 'Выбор инструмента',
      description: 'Выберите нужный инструмент в каталоге или получите консультацию специалиста'
    },
    {
      step: 2,
      title: 'Оформление заказа',
      description: 'Укажите период аренды, адрес доставки и способ оплаты'
    },
    {
      step: 3,
      title: 'Доставка',
      description: 'Доставляем инструмент в указанное время с инструктажем по использованию'
    },
    {
      step: 4,
      title: 'Использование',
      description: 'Работайте с инструментом, при необходимости обращайтесь в поддержку'
    },
    {
      step: 5,
      title: 'Возврат',
      description: 'Забираем инструмент по окончании аренды и возвращаем залог'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Wrench" className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ToolRental</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</Link>
              <Link to="/catalog" className="text-gray-600 hover:text-blue-600 transition-colors">Каталог</Link>
              <Link to="/services" className="text-blue-600 font-medium">Услуги</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</Link>
            </nav>
            <Button asChild>
              <Link to="/login">
                <Icon name="User" className="h-4 w-4 mr-2" />
                Войти
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Полный спектр услуг по аренде профессиональных инструментов 
            с доставкой, установкой и технической поддержкой
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Основные услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем комплексные решения для всех ваших потребностей в инструментах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Icon name={service.icon as any} className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-blue-600">
                      {service.price}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Категории оборудования</h2>
            <p className="text-gray-600">Широкий выбор инструментов для любых задач</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {item}</li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/catalog">
                      Посмотреть каталог
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Тарифные планы</h2>
            <p className="text-gray-600">Выберите подходящий план для ваших потребностей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="text-3xl font-bold text-blue-600 mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link to="/contact">
                      Выбрать план
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как это работает</h2>
            <p className="text-gray-600">Простой процесс аренды в 5 шагов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {workProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full">
                    <Icon name="ArrowRight" className="h-6 w-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Дополнительные услуги</h2>
            <p className="text-gray-600">Расширенные возможности для профессионалов</p>
          </div>

          <Tabs defaultValue="corporate" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="corporate">Корпоративным клиентам</TabsTrigger>
              <TabsTrigger value="training">Обучение</TabsTrigger>
              <TabsTrigger value="maintenance">Обслуживание</TabsTrigger>
              <TabsTrigger value="consulting">Консалтинг</TabsTrigger>
            </TabsList>

            <TabsContent value="corporate" className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Услуги для бизнеса</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Персональный менеджер
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Отсрочка платежа до 30 дней
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Скидки от 15% до 30%
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Приоритетная поддержка
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" 
                        alt="Корпоративные услуги" 
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="training" className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Обучение и инструктаж</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Обучение работе с инструментами
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Техника безопасности
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Сертификация персонала
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Выездные семинары
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop" 
                        alt="Обучение" 
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Техническое обслуживание</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Плановое ТО инструментов
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Экстренный ремонт
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Замена расходников
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Диагностика неисправностей
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop" 
                        alt="Техническое обслуживание" 
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consulting" className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Консультационные услуги</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Подбор оптимального оборудования
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Планирование проектов
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Оптимизация затрат
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          Техническая экспертиза
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" 
                        alt="Консалтинг" 
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Свяжитесь с нами для получения персонального предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/catalog">
                <Icon name="Search" className="h-5 w-5 mr-2" />
                Выбрать инструмент
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Получить консультацию
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;