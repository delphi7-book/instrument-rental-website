// API сервис для взаимодействия с backend
const API_BASE_URL = 'http://localhost:3001/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

class ApiService {
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const token = localStorage.getItem('authToken');
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Ошибка сервера');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth methods
  async login(email: string, password: string) {
    return this.request<{ user: any; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: any) {
    return this.request<{ user: any; token: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getProfile() {
    return this.request<any>('/auth/profile');
  }

  async updateProfile(data: any) {
    return this.request<any>('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Tools methods
  async getTools(params?: any) {
    const queryString = params ? `?${new URLSearchParams(params)}` : '';
    return this.request<{ tools: any[]; pagination: any }>(`/tools${queryString}`);
  }

  async getTool(id: string) {
    return this.request<any>(`/tools/${id}`);
  }

  async createTool(toolData: any) {
    return this.request<any>('/tools', {
      method: 'POST',
      body: JSON.stringify(toolData),
    });
  }

  async updateTool(id: string, toolData: any) {
    return this.request<any>(`/tools/${id}`, {
      method: 'PUT',
      body: JSON.stringify(toolData),
    });
  }

  async deleteTool(id: string) {
    return this.request<any>(`/tools/${id}`, {
      method: 'DELETE',
    });
  }

  async getCategories() {
    return this.request<any[]>('/tools/meta/categories');
  }

  async getPopularTools(limit?: number) {
    const queryString = limit ? `?limit=${limit}` : '';
    return this.request<any[]>(`/tools/meta/popular${queryString}`);
  }

  // Orders methods
  async createOrder(orderData: any) {
    return this.request<any>('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async getOrders(params?: any) {
    const queryString = params ? `?${new URLSearchParams(params)}` : '';
    return this.request<{ orders: any[]; pagination: any }>(`/orders${queryString}`);
  }

  async getOrder(id: string) {
    return this.request<any>(`/orders/${id}`);
  }

  async updateOrderStatus(id: string, status: string, note?: string) {
    return this.request<any>(`/orders/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status, note }),
    });
  }

  async cancelOrder(id: string, reason?: string) {
    return this.request<any>(`/orders/${id}/cancel`, {
      method: 'PUT',
      body: JSON.stringify({ reason }),
    });
  }

  // Reviews methods
  async createReview(reviewData: any) {
    return this.request<any>('/reviews', {
      method: 'POST',
      body: JSON.stringify(reviewData),
    });
  }

  async getToolReviews(toolId: string, params?: any) {
    const queryString = params ? `?${new URLSearchParams(params)}` : '';
    return this.request<{ reviews: any[]; rating: any; pagination: any }>(`/reviews/tool/${toolId}${queryString}`);
  }

  async getUserReviews() {
    return this.request<any[]>('/reviews/my');
  }

  // Bookings methods
  async createBooking(bookingData: any) {
    return this.request<any>('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  }

  async getUserBookings(status?: string) {
    const queryString = status ? `?status=${status}` : '';
    return this.request<any[]>(`/bookings/my${queryString}`);
  }

  async cancelBooking(id: string, reason?: string) {
    return this.request<any>(`/bookings/${id}/cancel`, {
      method: 'PUT',
      body: JSON.stringify({ reason }),
    });
  }

  async checkAvailability(toolId: string, startDate: string, endDate: string, quantity: number = 1) {
    const params = new URLSearchParams({
      startDate,
      endDate,
      quantity: quantity.toString(),
    });
    return this.request<any>(`/tools/${toolId}/availability?${params}`);
  }
}

export const apiService = new ApiService();
export default apiService;