import { AxiosResponse } from 'axios';

import $api from '../http';
import { AythResponce } from '../models/responce/AuthResponce';

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AythResponce>> {
    return $api.post<AythResponce>('/api/auth/login', { email, password });
  }

  static async signup(email: string, password: string): Promise<AxiosResponse<AythResponce>> {
    return $api.post<AythResponce>('/api/auth/signup', { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post('/api/auth/logout');
  }
}
