import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Privacy = () => {
  const dataTypes = [
    {
      category: 'Персональные данные',
      items: ['ФИО', 'Номер телефона', 'Email адрес', 'Паспортные данные'],
      purpose: 'Идентификация клиента и выполнение договорных обязательств'
    },
    {
      category: 'Данные организации',
      items: ['Название компании', 'ИНН', 'Юридический адрес', 'Контактные лица'],
      purpose: 'Работа с корпоративными клиентами'
    },
    {
      category: 'Технические данные',
      items: ['IP-адрес', 'Данные браузера', 'История посещений', 'Файлы cookie'],
      purpose: 'Улучшение работы сайта и персонализация'
    },
    {
      category: 'Данные об аренде',
      items: ['История заказов', 'Предпочтения', 'Отзывы', 'Платежная информация'],
      purpose: 'Предоставление качественного сервиса'
    }
  ];

  const rights = [
    {
      title: 'Право на доступ',
      description: 'Вы можете запросить информацию о том, какие ваши данные мы обрабатываем',
      icon: 'Eye'
    },
    {
      title: 'Право на исправление',
      description: 'Вы можете потребовать исправления неточных или неполных данных',
      icon: 'Edit'
    },
    {
      title: 'Право на удаление',
      description: 'Вы можете потребовать удаления ваших персональных данных',
      icon: 'Trash2'
    },
    {
      title: 'Право на ограничение',
      description: 'Вы можете ограничить обработку ваших данных в определенных случаях',
      icon: 'Shield'
    },
    {
      title: 'Право на переносимость',
      description: 'Вы можете получить ваши данные в структурированном формате',
      icon: 'Download'
    },
    {
      title: 'Право на возражение',
      description: 'Вы можете возразить против обработки ваших данных',
      icon: 'X'
    }
  ];

  const securityMeasures = [
    'Шифрование данных при передаче (SSL/TLS)',
    'Ограниченный доступ к персональным данным',
    'Регулярное обновление систем безопасности',
    'Мониторинг несанкционированного доступа',
    'Резервное копирование данных',
    'Обучение сотрудников вопросам безопасности'
  ];

  const cookieTypes = [
    {
      type: 'Необходимые',
      description: 'Обеспечивают базовую функциональность сайта',
      required: true
    },
    {
      type: 'Аналитические',
      description: 'Помогают понять, как посетители используют сайт',
      required: false
    },
    {
      type: 'Функциональные',
      description: 'Запоминают ваши предпочтения и настройки',
      required: false
    },
    {
      type: 'Маркетинговые',
      description: 'Используются для показа релевантной рекламы',
      required: false
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
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</Link>
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Политика конфиденциальности</h1>
          <p className="text-xl text-blue-100">
            Как мы собираем, используем и защищаем ваши персональные данные
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Document Info */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Политика конфиденциальности ToolRental</h2>
                <p className="text-gray-600">Действует с 15 января 2024 года</p>
              </div>
              <Button variant="outline">
                <Icon name="Download" className="h-4 w-4 mr-2" />
                Скачать PDF
              </Button>
            </div>
            <Alert>
              <Icon name="Shield" className="h-4 w-4" />
              <AlertDescription>
                Мы серьезно относимся к защите ваших персональных данных и соблюдаем требования 
                Федерального закона "О персональных данных" №152-ФЗ.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Введение</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ООО "ТулРентал" (далее - "Компания", "мы") уважает вашу конфиденциальность и стремится 
              защитить ваши персональные данные. Данная Политика конфиденциальности объясняет, 
              как мы собираем, используем, храним и защищаем информацию о вас.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Настоящая Политика применяется ко всем услугам, предоставляемым Компанией, 
              включая веб-сайт, мобильные приложения и офлайн-услуги.
            </p>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Какие данные мы собираем</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataTypes.map((dataType, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">{dataType.category}</h3>
                  <ul className="space-y-1 mb-3">
                    {dataType.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Icon name="Dot" className="h-3 w-3 mr-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 italic">{dataType.purpose}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Ваши права</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3">
                    <Icon name={right.icon as any} className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{right.title}</h3>
                  <p className="text-sm text-gray-600">{right.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Measures */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Меры безопасности</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Мы применяем современные технические и организационные меры для защиты ваших данных:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{measure}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cookies Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Использование файлов cookie</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Мы используем файлы cookie для улучшения работы сайта и предоставления персонализированного опыта:
            </p>
            <div className="space-y-4">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{cookie.type}</h4>
                    <p className="text-sm text-gray-600">{cookie.description}</p>
                  </div>
                  <Badge variant={cookie.required ? "default" : "secondary"}>
                    {cookie.required ? 'Обязательные' : 'Опциональные'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Сроки хранения данных</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Активные клиенты</h3>
                <p className="text-gray-600 text-sm">
                  Данные хранятся в течение всего периода сотрудничества и 3 года после последнего заказа.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Неактивные пользователи</h3>
                <p className="text-gray-600 text-sm">
                  Данные пользователей без активности удаляются через 2 года после последнего входа.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Финансовые данные</h3>
                <p className="text-gray-600 text-sm">
                  Данные о платежах хранятся в соответствии с требованиями налогового законодательства (5 лет).
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Технические логи</h3>
                <p className="text-gray-600 text-sm">
                  Логи доступа и технические данные хранятся не более 1 года.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third Parties */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Передача данных третьим лицам</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Мы можем передавать ваши данные третьим лицам только в следующих случаях:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">С вашего явного согласия</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Для выполнения договорных обязательств (доставка, платежи)</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">По требованию государственных органов</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Для защиты наших законных интересов</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Контактная информация</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              По вопросам обработки персональных данных обращайтесь:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">privacy@toolrental.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-600">г. Москва, ул. Строителей, 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Время работы</p>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Изменения в политике</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Мы можем периодически обновлять данную Политику конфиденциальности. 
              О существенных изменениях мы уведомим вас одним из следующих способов:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <Icon name="Mail" className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">Уведомление по email</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="Bell" className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">Уведомление на сайте</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="MessageSquare" className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">SMS-уведомление</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Вопросы о конфиденциальности?
              </h3>
              <p className="text-blue-700 mb-4">
                Свяжитесь с нашим специалистом по защите данных
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link to="/contact">
                    <Icon name="MessageSquare" className="h-4 w-4 mr-2" />
                    Задать вопрос
                  </Link>
                </Button>
                <Button variant="outline">
                  <Icon name="Download" className="h-4 w-4 mr-2" />
                  Запросить данные
                </Button>
                <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                  <Icon name="Trash2" className="h-4 w-4 mr-2" />
                  Удалить данные
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;