import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { apiService } from '@/services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('newest');
  const [filterRating, setFilterRating] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

  const [newReview, setNewReview] = useState({
    toolId: '',
    rating: 5,
    title: '',
    comment: '',
    pros: '',
    cons: '',
    wouldRecommend: true
  });

  // Мокданные для демонстрации
  const mockReviews = [
    {
      id: 1,
      user: 'Алексей Петров',
      userAvatar: null,
      toolName: 'Перфоратор Bosch GSH 16-28',
      rating: 5,
      title: 'Отличный инструмент!',
      comment: 'Мощный, надежный перфоратор. Пробивает бетон как масло. Антивибрационная система действительно работает - руки не устают даже после долгой работы. Рекомендую всем строителям!',
      pros: ['Мощный', 'Надежный', 'Удобный'],
      cons: ['Тяжеловат'],
      wouldRecommend: true,
      isVerified: true,
      date: '2024-01-15',
      helpful: 12,
      response: null
    },
    {
      id: 2,
      user: 'Мария Иванова',
      userAvatar: null,
      toolName: 'Болгарка DeWalt DWE402',
      rating: 5,
      title: 'Превосходное качество',
      comment: 'Арендовала для ремонта квартиры. Очень довольна качеством и сервисом. Инструмент в отличном состоянии, работает тихо для своей мощности. Быстрая доставка, все в срок.',
      pros: ['Качественный', 'Тихий', 'Быстрая доставка'],
      cons: [],
      wouldRecommend: true,
      isVerified: true,
      date: '2024-01-10',
      helpful: 8,
      response: {
        text: 'Спасибо за отзыв! Мы рады, что наш сервис оправдал ваши ожидания.',
        author: 'Служба поддержки ToolRental',
        date: '2024-01-11'
      }
    },
    {
      id: 3,
      user: 'Дмитрий Сидоров',
      userAvatar: null,
      toolName: 'Дрель аккумуляторная Bosch GSR 18V',
      rating: 4,
      title: 'Хороший инструмент',
      comment: 'Хороший инструмент для профессиональных задач. Единственный минус - тяжеловат, но это компенсируется мощностью и качеством работы. Батарея держит долго.',
      pros: ['Мощный', 'Долгая работа батареи'],
      cons: ['Тяжелый'],
      wouldRecommend: true,
      isVerified: false,
      date: '2024-01-05',
      helpful: 5,
      response: null
    }
  ];

  useEffect(() => {
    // Имитация загрузки отзывов
    setTimeout(() => {
      setReviews(mockReviews);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.toolName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.comment.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = filterRating === 'all' || review.rating.toString() === filterRating;
    return matchesSearch && matchesRating;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'rating-high':
        return b.rating - a.rating;
      case 'rating-low':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: reviews.length > 0 
      ? (reviews.filter(review => review.rating === rating).length / reviews.length) * 100 
      : 0
  }));

  const handleSubmitReview = async () => {
    try {
      // Здесь будет вызов API для создания отзыва
      console.log('Submitting review:', newReview);
      setIsReviewDialogOpen(false);
      setNewReview({
        toolId: '',
        rating: 5,
        title: '',
        comment: '',
        pros: '',
        cons: '',
        wouldRecommend: true
      });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Загрузка отзывов...</p>
        </div>
      </div>
    );
  }

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
              <Link to="/reviews" className="text-blue-600 font-medium">Отзывы</Link>
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h1>
          <p className="text-xl text-blue-100 mb-8">
            Узнайте, что говорят о нас наши клиенты
          </p>
          <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary">
                <Icon name="Plus" className="h-5 w-5 mr-2" />
                Оставить отзыв
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Оставить отзыв</DialogTitle>
                <DialogDescription>
                  Поделитесь своим опытом использования наших услуг
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Оценка</Label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="focus:outline-none"
                      >
                        <Icon 
                          name="Star" 
                          className={`h-6 w-6 ${
                            star <= newReview.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Заголовок отзыва</Label>
                  <Input
                    id="title"
                    value={newReview.title}
                    onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                    placeholder="Краткое описание вашего опыта"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Отзыв</Label>
                  <Textarea
                    id="comment"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    placeholder="Расскажите подробно о вашем опыте..."
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pros">Плюсы</Label>
                    <Textarea
                      id="pros"
                      value={newReview.pros}
                      onChange={(e) => setNewReview({...newReview, pros: e.target.value})}
                      placeholder="Что понравилось?"
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cons">Минусы</Label>
                    <Textarea
                      id="cons"
                      value={newReview.cons}
                      onChange={(e) => setNewReview({...newReview, cons: e.target.value})}
                      placeholder="Что не понравилось?"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsReviewDialogOpen(false)}>
                  Отмена
                </Button>
                <Button onClick={handleSubmitReview}>
                  Отправить отзыв
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Rating Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Общая оценка</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {averageRating.toFixed(1)}
                    </div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          className={`h-5 w-5 ${
                            i < Math.floor(averageRating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      Основано на {reviews.length} отзывах
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {ratingDistribution.map((item) => (
                      <div key={item.rating} className="flex items-center space-x-2">
                        <span className="text-sm w-2">{item.rating}</span>
                        <Icon name="Star" className="h-4 w-4 text-yellow-400" />
                        <Progress value={item.percentage} className="flex-1" />
                        <span className="text-sm text-gray-600 w-8">
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle>Фильтры</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Поиск</Label>
                    <Input
                      placeholder="Поиск по отзывам..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Оценка</Label>
                    <Select value={filterRating} onValueChange={setFilterRating}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все оценки</SelectItem>
                        <SelectItem value="5">5 звезд</SelectItem>
                        <SelectItem value="4">4 звезды</SelectItem>
                        <SelectItem value="3">3 звезды</SelectItem>
                        <SelectItem value="2">2 звезды</SelectItem>
                        <SelectItem value="1">1 звезда</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Сортировка</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Сначала новые</SelectItem>
                        <SelectItem value="oldest">Сначала старые</SelectItem>
                        <SelectItem value="rating-high">Высокая оценка</SelectItem>
                        <SelectItem value="rating-low">Низкая оценка</SelectItem>
                        <SelectItem value="helpful">По полезности</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Отзывы ({sortedReviews.length})
              </h2>
            </div>

            {sortedReviews.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="MessageSquare" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Отзывы не найдены</h3>
                  <p className="text-gray-600">
                    Попробуйте изменить параметры поиска или фильтры
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {sortedReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.userAvatar} />
                          <AvatarFallback>
                            {review.user.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-gray-900">{review.user}</h3>
                                {review.isVerified && (
                                  <Badge variant="secondary" className="text-xs">
                                    <Icon name="CheckCircle" className="h-3 w-3 mr-1" />
                                    Проверенный
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{review.toolName}</p>
                            </div>
                            <span className="text-sm text-gray-500">
                              {formatDate(review.date)}
                            </span>
                          </div>

                          <div className="flex items-center space-x-2 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Icon 
                                  key={i} 
                                  name="Star" 
                                  className={`h-4 w-4 ${
                                    i < review.rating 
                                      ? 'text-yellow-400 fill-current' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="font-medium">{review.rating}/5</span>
                          </div>

                          <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                          <p className="text-gray-700 mb-4">{review.comment}</p>

                          {(review.pros.length > 0 || review.cons.length > 0) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              {review.pros.length > 0 && (
                                <div>
                                  <h5 className="font-medium text-green-600 mb-2">Плюсы:</h5>
                                  <ul className="space-y-1">
                                    {review.pros.map((pro, index) => (
                                      <li key={index} className="text-sm text-gray-600 flex items-center">
                                        <Icon name="Plus" className="h-3 w-3 text-green-500 mr-2" />
                                        {pro}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {review.cons.length > 0 && (
                                <div>
                                  <h5 className="font-medium text-red-600 mb-2">Минусы:</h5>
                                  <ul className="space-y-1">
                                    {review.cons.map((con, index) => (
                                      <li key={index} className="text-sm text-gray-600 flex items-center">
                                        <Icon name="Minus" className="h-3 w-3 text-red-500 mr-2" />
                                        {con}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}

                          {review.wouldRecommend && (
                            <div className="flex items-center space-x-2 mb-4">
                              <Icon name="ThumbsUp" className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-green-600 font-medium">
                                Рекомендует этот инструмент
                              </span>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Button variant="ghost" size="sm">
                                <Icon name="ThumbsUp" className="h-4 w-4 mr-1" />
                                Полезно ({review.helpful})
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Icon name="Flag" className="h-4 w-4 mr-1" />
                                Пожаловаться
                              </Button>
                            </div>
                          </div>

                          {review.response && (
                            <div className="mt-4 bg-blue-50 rounded-lg p-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <Icon name="MessageSquare" className="h-4 w-4 text-blue-600" />
                                <span className="font-medium text-blue-600">
                                  Ответ от {review.response.author}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {formatDate(review.response.date)}
                                </span>
                              </div>
                              <p className="text-gray-700">{review.response.text}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;