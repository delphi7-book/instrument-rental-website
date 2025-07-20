import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (error: any) {
      setError(error.message || 'Ошибка входа');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Wrench" className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ToolRental</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Вход в систему</h1>
          <p className="text-gray-600 mt-2">Войдите в свой аккаунт для продолжения</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Авторизация</CardTitle>
            <CardDescription>
              Введите ваши данные для входа в систему
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <Icon name="AlertCircle" className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
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

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Введите пароль"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" className="h-4 w-4 mr-2 animate-spin" />
                    Вход...
                  </>
                ) : (
                  <>
                    <Icon name="LogIn" className="h-4 w-4 mr-2" />
                    Войти
                  </>
                )}
              </Button>

              <div className="text-center">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Забыли пароль?
                </Link>
              </div>

              <Separator />

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Нет аккаунта?{' '}
                  <Link 
                    to="/register" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Зарегистрироваться
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Demo credentials */}
        <Card className="mt-4">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700 mb-2">Демо-доступ:</p>
              <div className="space-y-1 text-xs text-gray-600">
                <p>Админ: admin@toolrental.ru / admin123</p>
                <p>Клиент: любой email / password123</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;