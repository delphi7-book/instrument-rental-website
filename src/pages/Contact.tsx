import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Имитация отправки сообщения
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    } catch (error: any) {
      setError(error.message || 'Ошибка отправки сообщения');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Ежедневно с 8:00 до 22:00',
      icon: 'Phone',
      action: 'tel:+74951234567'
    },
    {
      title: 'Email',
      value: 'info@toolrental.ru',
      description: 'Ответим в течение 2 часов',
      icon: 'Mail',
      action: 'mailto:info@toolrental.ru'
    },
    {
      title: 'Адрес',
      value: 'г. Москва, ул. Строителей, 15',
      description: 'Главный офис и склад',
      icon: 'MapPin',
      action: null
    },
    {
      title: 'Режим работы',
      value: 'Пн-Вс: 8:00 - 22:00',
      description: 'Без выходных и праздников',
      icon: 'Clock',
      action: null
    }
  ];

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Строителей, 15',
      phone: '+7 (495) 123-45-67',
      email: 'moscow@toolrental.ru',
      isMain: true
    },
    {
      city: 'Санкт-Петербург',
      address: 'пр. Индустриальный, 28',
      phone: '+7 (812) 987-65-43',
      email: 'spb@toolrental.ru',
      isMain: false
    },
    {
      city: 'Екатеринбург',
      address: 'ул. Машиностроителей, 42',
      phone: '+7 (343) 555-12-34',
      email: 'ekb@toolrental.ru',
      isMain: false
    }
  ];

  const faqItems = [
    {
      question: 'Как быстро вы доставляете инструменты?',
      answer: 'В Москве доставка осуществляется в течение 2-4 часов после подтверждения заказа. В других городах — в день заказа.'
    },
    {
      question: 'Какие документы нужны для аренды?',
      answer: 'Для физических лиц — паспорт и залог. Для юридических лиц — договор, печать организации и реквизиты.'
    },
    {
      question: 'Что делать, если инструмент сломался?',
      answer: 'Немедленно свяжитесь с нами по телефону. Мы заменим инструмент в течение 2 часов или вернем деньги.'
    },
    {
      question: 'Можно ли продлить аренду?',
      answer: 'Да, аренду можно продлить. Свяжитесь с нами минимум за день до окончания текущего периода.'
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
              <Link to="/contact" className="text-blue-600 font-medium">Контакты</Link>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Мы всегда готовы помочь вам с выбором инструментов и ответить на любые вопросы
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSuccess && (
                  <Alert className="mb-6">
                    <Icon name="CheckCircle" className="h-4 w-4" />
                    <AlertDescription>
                      Сообщение успешно отправлено! Мы ответим вам в течение 2 часов.
                    </AlertDescription>
                  </Alert>
                )}

                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <Icon name="AlertCircle" className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">Предпочтительный способ связи</Label>
                      <Select 
                        value={formData.preferredContact} 
                        onValueChange={(value) => setFormData({...formData, preferredContact: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Телефон</SelectItem>
                          <SelectItem value="any">Любой</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема обращения *</Label>
                    <Select 
                      value={formData.subject} 
                      onValueChange={(value) => setFormData({...formData, subject: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тему" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Общие вопросы</SelectItem>
                        <SelectItem value="rental">Аренда инструментов</SelectItem>
                        <SelectItem value="technical">Техническая поддержка</SelectItem>
                        <SelectItem value="partnership">Сотрудничество</SelectItem>
                        <SelectItem value="complaint">Жалоба</SelectItem>
                        <SelectItem value="suggestion">Предложение</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Опишите ваш вопрос или пожелание..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Icon name="Loader2" className="h-4 w-4 mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" className="h-4 w-4 mr-2" />
                        Отправить сообщение
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Icon name={info.icon as any} className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action} 
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Icon name="AlertTriangle" className="h-5 w-5 mr-2" />
                  Экстренная связь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Если инструмент сломался или возникла аварийная ситуация:
                </p>
                <Button variant="destructive" className="w-full">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (495) 911-24-7
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Круглосуточная горячая линия
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Мы в социальных сетях</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon name="Phone" className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon name="Facebook" className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon name="Instagram" className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Offices Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши офисы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className={office.isMain ? 'ring-2 ring-blue-500' : ''}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {office.city}
                    {office.isMain && (
                      <Badge className="ml-2">Главный офис</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" className="h-4 w-4 text-gray-500" />
                    <a href={`tel:${office.phone}`} className="text-sm text-blue-600 hover:text-blue-800">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" className="h-4 w-4 text-gray-500" />
                    <a href={`mailto:${office.email}`} className="text-sm text-blue-600 hover:text-blue-800">
                      {office.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600 text-sm">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/faq">
                <Icon name="HelpCircle" className="h-4 w-4 mr-2" />
                Все вопросы и ответы
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;