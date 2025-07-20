import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Лет на рынке', value: '15+', icon: 'Calendar' },
    { label: 'Довольных клиентов', value: '10,000+', icon: 'Users' },
    { label: 'Инструментов в каталоге', value: '500+', icon: 'Wrench' },
    { label: 'Городов присутствия', value: '25', icon: 'MapPin' }
  ];

  const team = [
    {
      name: 'Алексей Иванов',
      position: 'Генеральный директор',
      experience: '20 лет в строительной индустрии',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Основатель компании с большим опытом в строительстве и управлении'
    },
    {
      name: 'Мария Петрова',
      position: 'Директор по развитию',
      experience: '15 лет в сфере аренды оборудования',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Отвечает за расширение ассортимента и развитие новых направлений'
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Технический директор',
      experience: '12 лет в техническом обслуживании',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Обеспечивает техническое состояние всего парка оборудования'
    }
  ];

  const values = [
    {
      title: 'Качество',
      description: 'Мы предоставляем только исправные и проверенные инструменты',
      icon: 'Shield'
    },
    {
      title: 'Надежность',
      description: 'Работаем без выходных и всегда выполняем свои обязательства',
      icon: 'Clock'
    },
    {
      title: 'Инновации',
      description: 'Постоянно обновляем парк современным оборудованием',
      icon: 'Zap'
    },
    {
      title: 'Сервис',
      description: 'Индивидуальный подход к каждому клиенту и его потребностям',
      icon: 'Heart'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Основание компании ToolRental' },
    { year: '2012', event: 'Открытие первого склада в Москве' },
    { year: '2015', event: 'Запуск онлайн-платформы для бронирования' },
    { year: '2018', event: 'Расширение в 10 городов России' },
    { year: '2021', event: 'Внедрение системы доставки в день заказа' },
    { year: '2024', event: 'Более 500 инструментов в каталоге' }
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
              <Link to="/about" className="text-blue-600 font-medium">О нас</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</Link>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">О компании ToolRental</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Мы — ведущая компания по аренде профессиональных инструментов в России. 
              Уже более 15 лет помогаем строителям, ремонтникам и частным лицам 
              решать любые задачи с качественным оборудованием.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Icon name={stat.icon as any} className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
              <p className="text-gray-700 text-lg mb-6">
                Мы делаем профессиональные инструменты доступными для каждого. 
                Наша цель — предоставить качественное оборудование по справедливой цене, 
                сэкономив ваши деньги и время.
              </p>
              <p className="text-gray-700 mb-6">
                Мы понимаем, что покупка дорогостоящего инструмента не всегда оправдана, 
                особенно для разовых работ. Поэтому мы создали сервис, который позволяет 
                арендовать любой инструмент быстро, удобно и выгодно.
              </p>
              <Button size="lg" asChild>
                <Link to="/catalog">
                  <Icon name="ArrowRight" className="h-4 w-4 mr-2" />
                  Посмотреть каталог
                </Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop" 
                alt="Наша команда" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе каждый день
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Icon name={value.icon as any} className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Профессионалы с многолетним опытом в строительной индустрии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
                  <p className="text-gray-700">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">История развития</h2>
            <p className="text-gray-600">Ключевые этапы нашего пути</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  {milestone.year.slice(-2)}
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-semibold text-blue-600 mb-1">{milestone.year}</div>
                    <div className="text-gray-900">{milestone.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать работу с нами?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Присоединяйтесь к тысячам довольных клиентов, которые уже оценили наш сервис
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">
                <Icon name="UserPlus" className="h-5 w-5 mr-2" />
                Зарегистрироваться
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Связаться с нами
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;