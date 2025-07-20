import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Terms = () => {
  const sections = [
    {
      title: '1. Общие положения',
      content: [
        'Настоящие Условия использования регулируют отношения между ООО "ТулРентал" (далее - "Компания") и пользователями сервиса аренды инструментов.',
        'Используя наш сервис, вы соглашаетесь с данными условиями в полном объеме.',
        'Компания оставляет за собой право изменять данные условия в любое время с уведомлением пользователей.'
      ]
    },
    {
      title: '2. Услуги аренды',
      content: [
        'Компания предоставляет услуги краткосрочной и долгосрочной аренды профессиональных инструментов.',
        'Все инструменты проходят обязательную техническую проверку перед выдачей.',
        'Минимальный период аренды составляет 1 день, максимальный - 90 дней.',
        'Продление аренды возможно по согласованию с Компанией.'
      ]
    },
    {
      title: '3. Права и обязанности сторон',
      content: [
        'Арендатор обязуется использовать инструменты по назначению и в соответствии с инструкциями.',
        'Компания гарантирует исправность и безопасность предоставляемых инструментов.',
        'Арендатор несет ответственность за сохранность арендованного оборудования.',
        'Компания обязуется предоставить техническую поддержку в течение всего периода аренды.'
      ]
    },
    {
      title: '4. Оплата и залог',
      content: [
        'Оплата производится согласно действующему прайс-листу.',
        'Залог составляет 50-100% от стоимости инструмента и возвращается при возврате оборудования в исправном состоянии.',
        'Принимаются к оплате: наличные, банковские карты, безналичный расчет.',
        'При просрочке возврата начисляется пеня в размере 10% от стоимости аренды за каждый день просрочки.'
      ]
    },
    {
      title: '5. Ответственность',
      content: [
        'Арендатор несет полную материальную ответственность за утрату или повреждение инструмента.',
        'Компания не несет ответственности за ущерб, причиненный неправильным использованием инструмента.',
        'Все споры решаются путем переговоров, при невозможности - в судебном порядке.',
        'Компания застрахована от профессиональной ответственности.'
      ]
    },
    {
      title: '6. Форс-мажор',
      content: [
        'Стороны освобождаются от ответственности при наступлении обстоятельств непреодолимой силы.',
        'К форс-мажорным обстоятельствам относятся: стихийные бедствия, военные действия, решения государственных органов.',
        'Сторона, для которой создалась невозможность исполнения обязательств, должна немедленно уведомить другую сторону.'
      ]
    },
    {
      title: '7. Конфиденциальность',
      content: [
        'Компания обязуется не разглашать персональные данные клиентов третьим лицам.',
        'Персональные данные используются только для выполнения договорных обязательств.',
        'Клиент имеет право на доступ, изменение и удаление своих персональных данных.',
        'Подробная информация о обработке персональных данных содержится в Политике конфиденциальности.'
      ]
    },
    {
      title: '8. Заключительные положения',
      content: [
        'Настоящие условия вступают в силу с момента начала использования сервиса.',
        'Все изменения и дополнения к условиям оформляются в письменном виде.',
        'При возникновении споров стороны руководствуются законодательством Российской Федерации.',
        'Если какое-либо положение признается недействительным, остальные положения сохраняют силу.'
      ]
    }
  ];

  const contactInfo = {
    company: 'ООО "ТулРентал"',
    address: 'г. Москва, ул. Строителей, 15',
    phone: '+7 (495) 123-45-67',
    email: 'legal@toolrental.ru',
    inn: '7701234567',
    ogrn: '1027700123456'
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Условия использования</h1>
          <p className="text-xl text-blue-100">
            Правила и условия предоставления услуг аренды инструментов
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Document Info */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Условия использования сервиса ToolRental</h2>
                <p className="text-gray-600">Версия 2.1 от 15 января 2024 года</p>
              </div>
              <Button variant="outline">
                <Icon name="Download" className="h-4 w-4 mr-2" />
                Скачать PDF
              </Button>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Info" className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-800 font-medium">Важная информация</p>
                  <p className="text-sm text-blue-700">
                    Используя наш сервис, вы автоматически соглашаетесь с данными условиями. 
                    Пожалуйста, внимательно ознакомьтесь с документом.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Реквизиты компании</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-600">Наименование</p>
                  <p className="text-gray-900">{contactInfo.company}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Адрес</p>
                  <p className="text-gray-900">{contactInfo.address}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Телефон</p>
                  <p className="text-gray-900">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-600">Email</p>
                  <p className="text-gray-900">{contactInfo.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">ИНН</p>
                  <p className="text-gray-900">{contactInfo.inn}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">ОГРН</p>
                  <p className="text-gray-900">{contactInfo.ogrn}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Documents */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Связанные документы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto p-4" asChild>
                <Link to="/privacy">
                  <div className="text-left">
                    <div className="font-medium">Политика конфиденциальности</div>
                    <div className="text-sm text-gray-600">Обработка персональных данных</div>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-medium">Договор аренды</div>
                  <div className="text-sm text-gray-600">Типовой договор аренды инструментов</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-medium">Правила безопасности</div>
                  <div className="text-sm text-gray-600">Инструкции по безопасному использованию</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4" asChild>
                <Link to="/faq">
                  <div className="text-left">
                    <div className="font-medium">Часто задаваемые вопросы</div>
                    <div className="text-sm text-gray-600">Ответы на популярные вопросы</div>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Questions */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Остались вопросы по условиям?
              </h3>
              <p className="text-blue-700 mb-4">
                Наши юристы готовы проконсультировать вас по любым вопросам
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link to="/contact">
                    <Icon name="MessageSquare" className="h-4 w-4 mr-2" />
                    Задать вопрос
                  </Link>
                </Button>
                <Button variant="outline">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  {contactInfo.phone}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;