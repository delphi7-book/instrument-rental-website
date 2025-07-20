import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все вопросы', count: 24 },
    { id: 'rental', name: 'Аренда', count: 8 },
    { id: 'payment', name: 'Оплата', count: 5 },
    { id: 'delivery', name: 'Доставка', count: 6 },
    { id: 'technical', name: 'Технические', count: 5 }
  ];

  const faqData = [
    {
      id: 1,
      category: 'rental',
      question: 'Как арендовать инструмент?',
      answer: 'Выберите нужный инструмент в каталоге, укажите период аренды и адрес доставки. После подтверждения заказа мы доставим инструмент в указанное время.',
      popular: true
    },
    {
      id: 2,
      category: 'rental',
      question: 'Какие документы нужны для аренды?',
      answer: 'Для физических лиц: паспорт и залог. Для юридических лиц: договор, печать организации, реквизиты и доверенность на получение.',
      popular: true
    },
    {
      id: 3,
      category: 'rental',
      question: 'Можно ли продлить аренду?',
      answer: 'Да, аренду можно продлить. Свяжитесь с нами по телефону или через личный кабинет минимум за день до окончания текущего периода аренды.',
      popular: false
    },
    {
      id: 4,
      category: 'payment',
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату банковскими картами, наличными при получении, безналичный расчет для юридических лиц, а также электронные платежи.',
      popular: true
    },
    {
      id: 5,
      category: 'payment',
      question: 'Когда списывается оплата?',
      answer: 'Оплата списывается после подтверждения заказа. При оплате картой — сразу, при наличном расчете — при получении инструмента.',
      popular: false
    },
    {
      id: 6,
      category: 'payment',
      question: 'Что такое залог и когда он возвращается?',
      answer: 'Залог — это гарантия сохранности инструмента. Он возвращается в полном объеме при возврате инструмента в исправном состоянии.',
      popular: true
    },
    {
      id: 7,
      category: 'delivery',
      question: 'Как быстро доставляете инструменты?',
      answer: 'В Москве доставка осуществляется в течение 2-4 часов после подтверждения заказа. В других городах — в день заказа или на следующий день.',
      popular: true
    },
    {
      id: 8,
      category: 'delivery',
      question: 'Сколько стоит доставка?',
      answer: 'Доставка по Москве в пределах МКАД — бесплатно. За МКАД и в другие города — согласно тарифам, которые рассчитываются индивидуально.',
      popular: true
    },
    {
      id: 9,
      category: 'delivery',
      question: 'В какое время осуществляется доставка?',
      answer: 'Доставка работает ежедневно с 8:00 до 22:00. Вы можете выбрать удобный временной интервал при оформлении заказа.',
      popular: false
    },
    {
      id: 10,
      category: 'technical',
      question: 'Что делать, если инструмент сломался?',
      answer: 'Немедленно прекратите работу и свяжитесь с нами по телефону горячей линии. Мы заменим инструмент в течение 2 часов или вернем деньги.',
      popular: true
    },
    {
      id: 11,
      category: 'technical',
      question: 'Предоставляете ли вы инструкции по использованию?',
      answer: 'Да, с каждым инструментом предоставляется инструкция на русском языке. Также наши специалисты могут провести краткий инструктаж.',
      popular: false
    },
    {
      id: 12,
      category: 'technical',
      question: 'Что входит в комплект поставки?',
      answer: 'В комплект входит сам инструмент, необходимые аксессуары, инструкция по эксплуатации и, при необходимости, расходные материалы.',
      popular: false
    },
    {
      id: 13,
      category: 'rental',
      question: 'Можно ли арендовать инструмент на выходные?',
      answer: 'Да, мы работаем без выходных. Доставка в выходные дни осуществляется с 9:00 до 20:00.',
      popular: false
    },
    {
      id: 14,
      category: 'rental',
      question: 'Есть ли скидки при долгосрочной аренде?',
      answer: 'Да, при аренде от 7 дней предоставляется скидка 10%, от 14 дней — 20%, от 30 дней — 30%. Скидки рассчитываются автоматически.',
      popular: true
    },
    {
      id: 15,
      category: 'payment',
      question: 'Можно ли вернуть деньги при отмене заказа?',
      answer: 'Да, при отмене заказа за 2 часа до доставки деньги возвращаются в полном объеме. При более поздней отмене взимается комиссия 10%.',
      popular: false
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQ = faqData.filter(item => item.popular);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h1>
          <p className="text-xl text-blue-100 mb-8">
            Найдите ответы на популярные вопросы о нашем сервисе
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white text-gray-900"
              />
              <Icon name="Search" className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Categories */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Категории</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-50 text-blue-600'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{category.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Не нашли ответ?</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">
                        <Icon name="MessageSquare" className="h-4 w-4 mr-2" />
                        Написать нам
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Icon name="Phone" className="h-4 w-4 mr-2" />
                      +7 (495) 123-45-67
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Popular Questions */}
            {selectedCategory === 'all' && searchQuery === '' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Популярные вопросы</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {popularFAQ.slice(0, 6).map((item) => (
                    <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                            <Icon name="HelpCircle" className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{item.answer}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All Questions */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'Все вопросы' : 
                   categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="text-sm text-gray-600">
                  Найдено: {filteredFAQ.length}
                </span>
              </div>

              {filteredFAQ.length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Icon name="Search" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ничего не найдено</h3>
                    <p className="text-gray-600 mb-4">
                      Попробуйте изменить поисковый запрос или выбрать другую категорию
                    </p>
                    <Button variant="outline" onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}>
                      Сбросить фильтры
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQ.map((item) => (
                    <AccordionItem key={item.id} value={item.id.toString()}>
                      <Card>
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center space-x-3 text-left">
                            {item.popular && (
                              <Badge variant="secondary" className="text-xs">
                                Популярный
                              </Badge>
                            )}
                            <span className="font-medium">{item.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </div>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
              <p className="text-blue-100 mb-6">
                Наша команда поддержки готова помочь вам 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">
                    <Icon name="MessageSquare" className="h-5 w-5 mr-2" />
                    Написать в поддержку
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Позвонить нам
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;