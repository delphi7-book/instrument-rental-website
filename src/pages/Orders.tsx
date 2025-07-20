import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { apiService } from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  
  const { user, isAuthenticated } = useAuth();

  // Мокданные для демонстрации
  const mockOrders = [
    {
      id: 'ORD-7842',
      orderNumber: 'ORD-7842',
      customerInfo: {
        firstName: 'Алексей',
        lastName: 'Петров',
        email: 'alexey@example.com',
        phone: '+7 (999) 123-45-67'
      },
      items: [
        {
          toolId: '1',
          toolName: 'Перфоратор Bosch GSH 16-28',
          quantity: 1,
          pricePerDay: 1200,
          days: 3,
          total: 3600
        },
        {
          toolId: '2',
          toolName: 'Болгарка DeWalt DWE402',
          quantity: 1,
          pricePerDay: 800,
          days: 3,
          total: 2400
        }
      ],
      startDate: '2024-07-20',
      endDate: '2024-07-23',
      totalDays: 3,
      subtotal: 6000,
      tax: 1200,
      total: 7200,
      deposit: 3600,
      status: 'active',
      paymentStatus: 'paid',
      paymentMethod: 'card',
      deliveryInfo: {
        address: 'г. Москва, ул. Строителей, 15',
        date: '2024-07-20',
        timeSlot: '09:00-12:00'
      },
      deliveryStatus: 'delivered',
      notes: 'Клиент опытный, все инструменты в порядке',
      createdAt: '2024-07-18',
      timeline: [
        { status: 'pending', timestamp: '2024-07-18T10:00:00', note: 'Заказ создан' },
        { status: 'confirmed', timestamp: '2024-07-18T11:30:00', note: 'Заказ подтвержден' },
        { status: 'active', timestamp: '2024-07-20T09:15:00', note: 'Инструменты доставлены' }
      ]
    },
    {
      id: 'ORD-7841',
      orderNumber: 'ORD-7841',
      customerInfo: {
        firstName: 'Мария',
        lastName: 'Иванова',
        email: 'maria@example.com',
        phone: '+7 (999) 234-56-78'
      },
      items: [
        {
          toolId: '5',
          toolName: 'Дрель аккумуляторная Bosch GSR 18V',
          quantity: 2,
          pricePerDay: 450,
          days: 5,
          total: 4500
        }
      ],
      startDate: '2024-07-15',
      endDate: '2024-07-20',
      totalDays: 5,
      subtotal: 4500,
      tax: 900,
      total: 5400,
      deposit: 2700,
      status: 'completed',
      paymentStatus: 'paid',
      paymentMethod: 'cash',
      deliveryInfo: {
        address: 'г. Москва, ул. Ленина, 25',
        date: '2024-07-15',
        timeSlot: '12:00-15:00'
      },
      deliveryStatus: 'returned',
      notes: 'Постоянный клиент, возврат в срок',
      createdAt: '2024-07-12',
      timeline: [
        { status: 'pending', timestamp: '2024-07-12T14:00:00', note: 'Заказ создан' },
        { status: 'confirmed', timestamp: '2024-07-12T15:20:00', note: 'Заказ подтвержден' },
        { status: 'active', timestamp: '2024-07-15T12:30:00', note: 'Инструменты доставлены' },
        { status: 'completed', timestamp: '2024-07-20T16:00:00', note: 'Заказ завершен' }
      ]
    }
  ];

  useEffect(() => {
    if (isAuthenticated) {
      loadOrders();
    }
  }, [isAuthenticated]);

  const loadOrders = async () => {
    try {
      setIsLoading(true);
      // Имитация загрузки данных
      setTimeout(() => {
        setOrders(mockOrders);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error loading orders:', error);
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { text: 'Ожидает', color: 'bg-yellow-100 text-yellow-800' },
      confirmed: { text: 'Подтверждён', color: 'bg-blue-100 text-blue-800' },
      active: { text: 'Активный', color: 'bg-green-100 text-green-800' },
      completed: { text: 'Завершён', color: 'bg-gray-100 text-gray-800' },
      cancelled: { text: 'Отменён', color: 'bg-red-100 text-red-800' },
      overdue: { text: 'Просрочен', color: 'bg-red-100 text-red-800' }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.color}>{config.text}</Badge>;
  };

  const getPaymentStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { text: 'Ожидает оплаты', color: 'bg-yellow-100 text-yellow-800' },
      paid: { text: 'Оплачено', color: 'bg-green-100 text-green-800' },
      partial: { text: 'Частично оплачено', color: 'bg-orange-100 text-orange-800' },
      refunded: { text: 'Возвращено', color: 'bg-blue-100 text-blue-800' }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.color}>{config.text}</Badge>;
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.customerInfo.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.customerInfo.lastName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('ru-RU');
  };

  const getStatusProgress = (status: string) => {
    const statusOrder = ['pending', 'confirmed', 'active', 'completed'];
    const currentIndex = statusOrder.indexOf(status);
    return currentIndex >= 0 ? ((currentIndex + 1) / statusOrder.length) * 100 : 0;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <Icon name="Lock" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Требуется авторизация</h2>
            <p className="text-gray-600 mb-4">
              Для просмотра заказов необходимо войти в систему
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
          <p>Загрузка заказов...</p>
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
              <Link to="/orders" className="text-blue-600 font-medium">Заказы</Link>
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
            <h1 className="text-3xl font-bold text-gray-900">Мои заказы</h1>
            <p className="text-gray-600">История и статус всех ваших заказов</p>
          </div>
          <Button asChild>
            <Link to="/catalog">
              <Icon name="Plus" className="h-4 w-4 mr-2" />
              Новый заказ
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Всего заказов</p>
                  <p className="text-3xl font-bold text-gray-900">{orders.length}</p>
                </div>
                <Icon name="Package" className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Активные</p>
                  <p className="text-3xl font-bold text-green-600">
                    {orders.filter(o => o.status === 'active').length}
                  </p>
                </div>
                <Icon name="Play" className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Завершённые</p>
                  <p className="text-3xl font-bold text-gray-600">
                    {orders.filter(o => o.status === 'completed').length}
                  </p>
                </div>
                <Icon name="CheckCircle" className="h-8 w-8 text-gray-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Общая сумма</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {orders.reduce((sum, o) => sum + o.total, 0).toLocaleString()}₽
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
              <div className="flex-1">
                <Input
                  placeholder="Поиск по номеру заказа или имени..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Все статусы" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все статусы</SelectItem>
                  <SelectItem value="pending">Ожидает</SelectItem>
                  <SelectItem value="confirmed">Подтверждён</SelectItem>
                  <SelectItem value="active">Активный</SelectItem>
                  <SelectItem value="completed">Завершён</SelectItem>
                  <SelectItem value="cancelled">Отменён</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <Icon name="Package" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Нет заказов</h3>
              <p className="text-gray-600 mb-4">
                У вас пока нет заказов. Выберите инструменты в каталоге!
              </p>
              <Button asChild>
                <Link to="/catalog">
                  <Icon name="Search" className="h-4 w-4 mr-2" />
                  Перейти в каталог
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold">#{order.orderNumber}</h3>
                      {getStatusBadge(order.status)}
                      {getPaymentStatusBadge(order.paymentStatus)}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Создан</p>
                      <p className="font-medium">{formatDate(order.createdAt)}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Прогресс заказа</span>
                      <span>{order.status}</span>
                    </div>
                    <Progress value={getStatusProgress(order.status)} className="h-2" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Order Items */}
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">Инструменты</p>
                      <div className="space-y-1">
                        {order.items.map((item, index) => (
                          <div key={index} className="text-sm">
                            <p className="font-medium">{item.toolName}</p>
                            <p className="text-gray-600">
                              {item.quantity} шт × {item.days} дней = {item.total.toLocaleString()}₽
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery Info */}
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">Доставка</p>
                      <div className="text-sm space-y-1">
                        <p className="text-gray-900">{order.deliveryInfo.address}</p>
                        <p className="text-gray-600">
                          {formatDate(order.deliveryInfo.date)} в {order.deliveryInfo.timeSlot}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {order.deliveryStatus === 'delivered' ? 'Доставлено' : 
                           order.deliveryStatus === 'returned' ? 'Возвращено' : 'В процессе'}
                        </Badge>
                      </div>
                    </div>

                    {/* Financial Info */}
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">Финансы</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Подытог:</span>
                          <span>{order.subtotal.toLocaleString()}₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>НДС:</span>
                          <span>{order.tax.toLocaleString()}₽</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span>Итого:</span>
                          <span className="text-green-600">{order.total.toLocaleString()}₽</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Залог:</span>
                          <span>{order.deposit.toLocaleString()}₽</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        Период: {formatDate(order.startDate)} - {formatDate(order.endDate)}
                      </span>
                      <span className="text-sm text-gray-600">
                        Оплата: {order.paymentMethod === 'card' ? 'Картой' : 'Наличными'}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedOrder(order);
                          setIsDetailsDialogOpen(true);
                        }}
                      >
                        <Icon name="Eye" className="h-4 w-4 mr-2" />
                        Подробнее
                      </Button>
                      {order.status === 'pending' && (
                        <Button variant="outline" size="sm" className="text-red-600">
                          <Icon name="X" className="h-4 w-4 mr-2" />
                          Отменить
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Order Details Dialog */}
        <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Заказ {selectedOrder?.orderNumber}</DialogTitle>
              <DialogDescription>
                Детальная информация о заказе
              </DialogDescription>
            </DialogHeader>
            
            {selectedOrder && (
              <div className="space-y-6">
                {/* Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">История заказа</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedOrder.timeline.map((event, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="bg-blue-100 rounded-full p-2">
                            <Icon name="Clock" className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">{event.note}</p>
                              <span className="text-sm text-gray-500">
                                {formatDateTime(event.timestamp)}
                              </span>
                            </div>
                            {getStatusBadge(event.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Customer Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Информация о клиенте</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium">Имя</Label>
                        <p className="mt-1">{selectedOrder.customerInfo.firstName} {selectedOrder.customerInfo.lastName}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Телефон</Label>
                        <p className="mt-1">{selectedOrder.customerInfo.phone}</p>
                      </div>
                      <div className="col-span-2">
                        <Label className="text-sm font-medium">Email</Label>
                        <p className="mt-1">{selectedOrder.customerInfo.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Items */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Состав заказа</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedOrder.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{item.toolName}</p>
                            <p className="text-sm text-gray-600">
                              {item.quantity} шт × {item.days} дней × {item.pricePerDay}₽/день
                            </p>
                          </div>
                          <p className="font-bold">{item.total.toLocaleString()}₽</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Доставка</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium">Адрес</Label>
                        <p className="mt-1">{selectedOrder.deliveryInfo.address}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Дата и время</Label>
                        <p className="mt-1">
                          {formatDate(selectedOrder.deliveryInfo.date)} в {selectedOrder.deliveryInfo.timeSlot}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDetailsDialogOpen(false)}>
                Закрыть
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Orders;