import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { format, addDays } from 'date-fns';
import { ru } from 'date-fns/locale';
import { apiService } from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  
  const { user, isAuthenticated } = useAuth();

  const [newBooking, setNewBooking] = useState({
    toolId: '',
    startDate: null,
    endDate: null,
    quantity: 1,
    notes: ''
  });

  // Мокданные для демонстрации
  const mockBookings = [
    {
      id: 'BK-001',
      toolId: '1',
      toolName: 'Перфоратор Bosch GSH 16-28',
      toolImage: '/img/5e130715-b755-4ab5-82af-c9e448995766.jpg',
      startDate: '2024-07-20',
      endDate: '2024-07-23',
      quantity: 1,
      status: 'confirmed',
      pricePerDay: 1200,
      totalPrice: 3600,
      notes: 'Требуется инструктаж по использованию',
      createdAt: '2024-07-18',
      expiresAt: '2024-07-19T12:00:00'
    },
    {
      id: 'BK-002',
      toolId: '2',
      toolName: 'Болгарка DeWalt DWE402',
      toolImage: '/img/5e130715-b755-4ab5-82af-c9e448995766.jpg',
      startDate: '2024-07-25',
      endDate: '2024-07-27',
      quantity: 2,
      status: 'pending',
      pricePerDay: 800,
      totalPrice: 3200,
      notes: '',
      createdAt: '2024-07-19',
      expiresAt: '2024-07-20T15:30:00'
    },
    {
      id: 'BK-003',
      toolId: '3',
      toolName: 'Дрель аккумуляторная Bosch GSR 18V',
      toolImage: '/img/5e130715-b755-4ab5-82af-c9e448995766.jpg',
      startDate: '2024-07-15',
      endDate: '2024-07-18',
      quantity: 1,
      status: 'cancelled',
      pricePerDay: 450,
      totalPrice: 1350,
      notes: 'Отменено клиентом',
      createdAt: '2024-07-12',
      expiresAt: null
    }
  ];

  useEffect(() => {
    if (isAuthenticated) {
      loadBookings();
    }
  }, [isAuthenticated]);

  const loadBookings = async () => {
    try {
      setIsLoading(true);
      // Имитация загрузки данных
      setTimeout(() => {
        setBookings(mockBookings);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error loading bookings:', error);
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { text: 'Ожидает', color: 'bg-yellow-100 text-yellow-800' },
      confirmed: { text: 'Подтверждено', color: 'bg-green-100 text-green-800' },
      cancelled: { text: 'Отменено', color: 'bg-red-100 text-red-800' },
      expired: { text: 'Истекло', color: 'bg-gray-100 text-gray-800' }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.color}>{config.text}</Badge>;
  };

  const filteredBookings = bookings.filter(booking => {
    if (statusFilter === 'all') return true;
    return booking.status === statusFilter;
  });

  const handleCreateBooking = async () => {
    try {
      // Здесь будет вызов API для создания бронирования
      console.log('Creating booking:', newBooking);
      setIsCreateDialogOpen(false);
      setNewBooking({
        toolId: '',
        startDate: null,
        endDate: null,
        quantity: 1,
        notes: ''
      });
      await loadBookings();
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const handleCancelBooking = async (bookingId: string) => {
    try {
      // Здесь будет вызов API для отмены бронирования
      console.log('Cancelling booking:', bookingId);
      await loadBookings();
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  const calculateDaysLeft = (expiresAt: string) => {
    if (!expiresAt) return null;
    const now = new Date();
    const expires = new Date(expiresAt);
    const diffTime = expires.getTime() - now.getTime();
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    return diffHours;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <Icon name="Lock" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Требуется авторизация</h2>
            <p className="text-gray-600 mb-4">
              Для просмотра бронирований необходимо войти в систему
            </p>
            <Button asChild>
              <Link to="/login">
                <Icon name="LogIn" className="h-4 w-4 mr-2" />
                Войти в систему
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Загрузка бронирований...</p>
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
              <Link to="/bookings" className="text-blue-600 font-medium">Бронирования</Link>
              <Link to="/profile" className="text-gray-600 hover:text-blue-600 transition-colors">Профиль</Link>
            </nav>
            <Button variant="outline">
              <Icon name="User" className="h-4 w-4 mr-2" />
              {user?.firstName}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Мои бронирования</h1>
            <p className="text-gray-600">Управление активными и завершенными бронированиями</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Icon name="Plus" className="h-4 w-4 mr-2" />
                Новое бронирование
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Создать бронирование</DialogTitle>
                <DialogDescription>
                  Забронируйте инструмент на нужные даты
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Инструмент</Label>
                  <Select 
                    value={newBooking.toolId} 
                    onValueChange={(value) => setNewBooking({...newBooking, toolId: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите инструмент" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Перфоратор Bosch GSH 16-28</SelectItem>
                      <SelectItem value="2">Болгарка DeWalt DWE402</SelectItem>
                      <SelectItem value="3">Дрель аккумуляторная Bosch GSR 18V</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Дата начала</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Calendar" className="h-4 w-4 mr-2" />
                          {newBooking.startDate ? format(newBooking.startDate, 'dd.MM.yyyy', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={newBooking.startDate}
                          onSelect={(date) => setNewBooking({...newBooking, startDate: date})}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Дата окончания</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Calendar" className="h-4 w-4 mr-2" />
                          {newBooking.endDate ? format(newBooking.endDate, 'dd.MM.yyyy', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={newBooking.endDate}
                          onSelect={(date) => setNewBooking({...newBooking, endDate: date})}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Количество</Label>
                  <Input
                    type="number"
                    min="1"
                    value={newBooking.quantity}
                    onChange={(e) => setNewBooking({...newBooking, quantity: parseInt(e.target.value)})}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Примечания</Label>
                  <Textarea
                    value={newBooking.notes}
                    onChange={(e) => setNewBooking({...newBooking, notes: e.target.value})}
                    placeholder="Дополнительные пожелания..."
                    rows={3}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Отмена
                </Button>
                <Button onClick={handleCreateBooking}>
                  Создать бронирование
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Всего бронирований</p>
                  <p className="text-3xl font-bold text-gray-900">{bookings.length}</p>
                </div>
                <Icon name="Calendar" className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Активные</p>
                  <p className="text-3xl font-bold text-green-600">
                    {bookings.filter(b => b.status === 'confirmed').length}
                  </p>
                </div>
                <Icon name="CheckCircle" className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ожидают</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {bookings.filter(b => b.status === 'pending').length}
                  </p>
                </div>
                <Icon name="Clock" className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Общая сумма</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {bookings.reduce((sum, b) => sum + b.totalPrice, 0).toLocaleString()}₽
                  </p>
                </div>
                <Icon name="CreditCard" className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Все статусы" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все статусы</SelectItem>
                  <SelectItem value="pending">Ожидает</SelectItem>
                  <SelectItem value="confirmed">Подтверждено</SelectItem>
                  <SelectItem value="cancelled">Отменено</SelectItem>
                  <SelectItem value="expired">Истекло</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <Icon name="Calendar" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Нет бронирований</h3>
              <p className="text-gray-600 mb-4">
                У вас пока нет бронирований. Создайте первое бронирование прямо сейчас!
              </p>
              <Button onClick={() => setIsCreateDialogOpen(true)}>
                <Icon name="Plus" className="h-4 w-4 mr-2" />
                Создать бронирование
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Список бронирований ({filteredBookings.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredBookings.map((booking) => {
                  const hoursLeft = calculateDaysLeft(booking.expiresAt);
                  
                  return (
                    <div key={booking.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold">#{booking.id}</span>
                          {getStatusBadge(booking.status)}
                          {booking.status === 'pending' && hoursLeft && hoursLeft > 0 && (
                            <Badge variant="outline" className="text-orange-600">
                              Истекает через {hoursLeft}ч
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          Создано: {formatDate(booking.createdAt)}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={booking.toolImage} 
                            alt={booking.toolName}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{booking.toolName}</p>
                            <p className="text-sm text-gray-600">Количество: {booking.quantity}</p>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Период</p>
                          <p className="text-sm text-gray-900">
                            {formatDate(booking.startDate)} - {formatDate(booking.endDate)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {Math.ceil((new Date(booking.endDate).getTime() - new Date(booking.startDate).getTime()) / (1000 * 60 * 60 * 24))} дней
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Стоимость</p>
                          <p className="text-lg font-bold text-green-600">
                            {booking.totalPrice.toLocaleString()}₽
                          </p>
                          <p className="text-xs text-gray-500">
                            {booking.pricePerDay}₽/день
                          </p>
                        </div>

                        <div className="flex items-center justify-end space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedBooking(booking);
                              setIsDetailsDialogOpen(true);
                            }}
                          >
                            <Icon name="Eye" size={14} />
                          </Button>
                          
                          {booking.status === 'pending' && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleCancelBooking(booking.id)}
                              className="text-red-600"
                            >
                              <Icon name="X" size={14} />
                            </Button>
                          )}
                        </div>
                      </div>

                      {booking.notes && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">{booking.notes}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Booking Details Dialog */}
        <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Детали бронирования {selectedBooking?.id}</DialogTitle>
              <DialogDescription>
                Полная информация о бронировании
              </DialogDescription>
            </DialogHeader>
            
            {selectedBooking && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={selectedBooking.toolImage} 
                    alt={selectedBooking.toolName}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{selectedBooking.toolName}</h3>
                    <p className="text-gray-600">Количество: {selectedBooking.quantity}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Дата начала</Label>
                    <p className="mt-1">{formatDate(selectedBooking.startDate)}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Дата окончания</Label>
                    <p className="mt-1">{formatDate(selectedBooking.endDate)}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Статус</Label>
                    <div className="mt-1">{getStatusBadge(selectedBooking.status)}</div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Общая стоимость</Label>
                    <p className="mt-1 text-lg font-bold text-green-600">
                      {selectedBooking.totalPrice.toLocaleString()}₽
                    </p>
                  </div>
                </div>

                {selectedBooking.notes && (
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Примечания</Label>
                    <p className="mt-1 p-3 bg-gray-50 rounded-lg">{selectedBooking.notes}</p>
                  </div>
                )}
              </div>
            )}
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDetailsDialogOpen(false)}>
                Закрыть
              </Button>
              {selectedBooking?.status === 'pending' && (
                <Button 
                  variant="destructive"
                  onClick={() => {
                    handleCancelBooking(selectedBooking.id);
                    setIsDetailsDialogOpen(false);
                  }}
                >
                  Отменить бронирование
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Bookings;