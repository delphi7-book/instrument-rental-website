import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Delivery = () => {
  const deliveryZones = [
    { zone: 'В пределах МКАД', time: '2-4 часа', price: 'Бесплатно', minOrder: '0₽' },
    { zone: 'До 10 км за МКАД', time: '3-5 часов', price: '500₽', minOrder: '3,000₽' },
    { zone: 'До 30 км за МКАД', time: '4-6 часов', price: '1,000₽', minOrder: '5,000₽' },
    { zone: 'До 50 км за МКАД', time: '5-8 часов', price: '1,500₽', minOrder: '7,000₽' },
    { zone: 'Московская область', time: '1-2 дня', price: 'По договору', minOrder: '10,000₽' }
  ];

  const timeSlots = [
    { time: '08:00 - 10:00', available: true, popular: false },
    { time: '10:00 - 12:00', available: true, popular: true },
    { time: '12:00 - 14:00', available: true, popular: true },
    { time: '14:00 - 16:00', available: true, popular: false },
    { time: '16:00 - 18:00', available: true, popular: true },
    { time: '18:00 - 20:00', available: true, popular: false },
    { time: '20:00 - 22:00', available: false, popular: false }
  ];

  const deliveryFeatures = [
    {
      title: 'Быстрая доставка',
      description: 'Доставляем инструменты в течение 2-4 часов после подтверждения заказа',
      icon: 'Zap'
    },
    {
      title: 'Установка и настройка',
      description: 'Наши специалисты установят и настроят оборудование на вашем объекте',
      icon: 'Settings'
    },
    {
      title: 'Инструктаж',
      description: 'Проведем краткий инструктаж по безопасному использованию инструментов',
      icon: 'GraduationCap'
    },
    {
      title: 'Обратный вывоз',
      description: 'Заберем инструменты по окончании аренды в удобное для вас время',
      icon: 'RotateCcw'
    }
  ];

  const deliverySteps = [
    {
      step: 1,
      title: 'Подтверждение заказа',
      description: 'После оформления заказа мы свяжемся с вами для подтверждения деталей'
    },
    {
      step: 2,
      title: 'Подготовка инструментов',
      description: 'Проверяем техническое состояние и комплектность всех инструментов'
    },
    {
      step: 3,
      title: 'Отправка курьера',
      description: 'Курьер выезжает к вам с инструментами и необходимой документацией'
    },
    {
      step: 4,
      title: 'Доставка и установка',
      description: 'Доставляем, устанавливаем и проводим инструктаж по использованию'
    }
  ];

  const specialServices = [
    {
      title: 'Экспресс-доставка',
      description: 'Доставка в течение 1 часа',
      price: '+500₽',
      conditions: 'Только в пределах МКАД, при наличии инструмента на складе'
    },
    {
      title: 'Доставка в выходные',
      description: 'Доставка в субботу и воскресенье',
      price: '+300₽',
      conditions: 'С 9:00 до 20:00'
    },
    {
      title: 'Ночная доставка',
      description: 'Доставка с 22:00 до 08:00',
      price: '+1,000₽',
      conditions: 'Только для корпоративных клиентов'
    },
    {
      title: 'Доставка на высоту',
      description: 'Подъем инструментов выше 3 этажа',
      price: '+200₽ за этаж',
      conditions: 'При отсутствии грузового лифта'
    }
  ];

  const cities = [
    { name: 'Москва', available: true, time: '2-4 часа', note: 'Основной регион обслуживания' },
    { name: 'Санкт-Петербург', available: true, time: '4-6 часов', note: 'Собственный склад' },
    { name: 'Екатеринбург', available: true, time: '1 день', note: 'Партнерская сеть' },
    { name: 'Новосибирск', available: true, time: '1-2 дня', note: 'Партнерская сеть' },
    { name: 'Казань', available: true, time: '1 день', note: 'Партнерская сеть' },
    { name: 'Нижний Новгород', available: false, time: 'Скоро', note: 'Планируется открытие' }
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
              <Link to="/delivery" className="text-blue-600 font-medium">Доставка</Link>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Доставка инструментов</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Быстрая и надежная доставка профессиональных инструментов 
            по Москве и области с установкой и инструктажем
          </p>
        </div>
      </section>

      {/* Delivery Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Что включает наша доставка</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем полный сервис от доставки до установки оборудования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Icon name={feature.icon as any} className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="zones" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="zones">Зоны доставки</TabsTrigger>
              <TabsTrigger value="schedule">Расписание</TabsTrigger>
              <TabsTrigger value="process">Процесс</TabsTrigger>
              <TabsTrigger value="special">Спецуслуги</TabsTrigger>
            </TabsList>

            <TabsContent value="zones" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Зоны доставки и тарифы</CardTitle>
                  <CardDescription>
                    Стоимость и время доставки в зависимости от расстояния
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Зона доставки</TableHead>
                        <TableHead>Время доставки</TableHead>
                        <TableHead>Стоимость</TableHead>
                        <TableHead>Минимальный заказ</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {deliveryZones.map((zone, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{zone.zone}</TableCell>
                          <TableCell>{zone.time}</TableCell>
                          <TableCell>
                            <Badge variant={zone.price === 'Бесплатно' ? 'default' : 'secondary'}>
                              {zone.price}
                            </Badge>
                          </TableCell>
                          <TableCell>{zone.minOrder}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schedule" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Временные интервалы</CardTitle>
                    <CardDescription>
                      Выберите удобное время для доставки
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      {timeSlots.map((slot, index) => (
                        <div 
                          key={index} 
                          className={`p-3 rounded-lg border-2 flex items-center justify-between ${
                            slot.available 
                              ? 'border-green-200 bg-green-50' 
                              : 'border-gray-200 bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <Icon 
                              name={slot.available ? "CheckCircle" : "XCircle"} 
                              className={`h-5 w-5 ${
                                slot.available ? 'text-green-500' : 'text-gray-400'
                              }`} 
                            />
                            <span className={`font-medium ${
                              slot.available ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {slot.time}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            {slot.popular && (
                              <Badge variant="secondary">Популярное</Badge>
                            )}
                            <Badge variant={slot.available ? "default" : "destructive"}>
                              {slot.available ? 'Доступно' : 'Недоступно'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Режим работы</CardTitle>
                    <CardDescription>
                      График работы службы доставки
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium text-blue-900">Понедельник - Пятница</p>
                        <p className="text-sm text-blue-700">Рабочие дни</p>
                      </div>
                      <Badge className="bg-blue-600">08:00 - 22:00</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-green-900">Суббота - Воскресенье</p>
                        <p className="text-sm text-green-700">Выходные дни</p>
                      </div>
                      <Badge className="bg-green-600">09:00 - 20:00</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium text-red-900">Экстренная доставка</p>
                        <p className="text-sm text-red-700">Круглосуточно</p>
                      </div>
                      <Badge className="bg-red-600">24/7</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Процесс доставки</CardTitle>
                  <CardDescription>
                    Как происходит доставка инструментов от заказа до установки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deliverySteps.map((step, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                          {step.step}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="special" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialServices.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {service.title}
                        <Badge variant="outline">{service.price}</Badge>
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{service.conditions}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">География доставки</h2>
            <p className="text-gray-600">Города, в которых доступна наша служба доставки</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <Card key={index} className={city.available ? '' : 'opacity-60'}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{city.name}</h3>
                    <Badge variant={city.available ? "default" : "secondary"}>
                      {city.available ? 'Доступно' : 'Скоро'}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Время доставки: {city.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Info" className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{city.note}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Вопросы о доставке</h2>
            <p className="text-gray-600">Ответы на часто задаваемые вопросы</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Можно ли изменить время доставки?
                </h3>
                <p className="text-gray-600 text-sm">
                  Да, вы можете изменить время доставки не позднее чем за 2 часа до назначенного времени.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Что делать, если курьер опаздывает?
                </h3>
                <p className="text-gray-600 text-sm">
                  Свяжитесь с нами по телефону, мы сразу уточним местоположение курьера и сообщим точное время прибытия.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Нужно ли быть дома при доставке?
                </h3>
                <p className="text-gray-600 text-sm">
                  Да, при доставке должен присутствовать получатель для подписания документов и получения инструктажа.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Доставляете ли в праздничные дни?
                </h3>
                <p className="text-gray-600 text-sm">
                  Да, мы работаем в праздничные дни по обычному графику выходного дня (9:00-20:00).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна доставка инструментов?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Оформите заказ прямо сейчас и получите инструменты уже сегодня
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
                Заказать звонок
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;