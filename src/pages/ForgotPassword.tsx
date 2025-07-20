import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Имитация отправки запроса на восстановление пароля
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
    } catch (error: any) {
      setError(error.message || 'Ошибка отправки');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Письмо отправлено</h2>
              <p className="text-gray-600 mb-6">
                Мы отправили инструкции по восстановлению пароля на адрес {email}
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link to="/login">
                    <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
                    Вернуться к входу
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setIsSuccess(false)}
                >
                  Отправить повторно
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Wrench" className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ToolRental</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Восстановление пароля</h1>
          <p className="text-gray-600 mt-2">Введите email для получения инструкций</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Забыли пароль?</CardTitle>
            <CardDescription>
              Мы отправим вам ссылку для восстановления пароля
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
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
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="Mail" className="h-4 w-4 mr-2" />
                    Отправить инструкции
                  </>
                )}
              </Button>

              <div className="text-center">
                <Link 
                  to="/login" 
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  <Icon name="ArrowLeft" className="h-4 w-4 mr-1 inline" />
                  Вернуться к входу
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;