import api from "./api"

import Profile from "@/lib/interfaces/dtos/Profile";
import type Response from "@/lib/interfaces/responses/ResponseInterface";

import { deleteCookie } from "@/lib/utils/authUtils";


const entity: string = "auth";

export const login = async (email: string, password: string): Promise<Profile | null> => {
  try {
    const response = await api.post(`${entity}/login`, { 
      email, 
      password
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
      
    return response.data.user;
  } catch (error) {
    console.error('An error occurred during login:', error);
    return null;
  } 
};
  
export const logout = async (): Promise<Response | null> => {
  try {
    const response = await api.post<Response>(`${entity}/logout`, {}, {
      withCredentials: true
    });
  
    if (response) {
      deleteCookie('authToken');
      return response.data;
    }
    
    return null;
  } catch (error) {
    console.error('An error occurred during logout:', error);
    return null;
  }
};

export const getCurrentUser = async (): Promise<Profile | null> => {
  try {
    const checkAuth = await api.get<{ isAuthenticated: boolean }>(`${entity}/is-authenticated`, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    })
    
    if (checkAuth.data.isAuthenticated) {
      const response = await api.get<{ user: Profile }>(`${entity}/profile`, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      });

      return response.data.user;
    } else {
      return null
    }
  } catch (error) {
    console.error('An error occurred while fetching the current user:', error);
    return null;
  }
};

export const register = async (email: string, name: string, surname: string, password: string): Promise<Profile | null> => {
  try {
    const response = await api.post<{ user: Profile }>(`${entity}/register`, { 
      email, 
      name,
      surname,
      password 
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
  });

    return response.data.user;
  } catch (error) {
    console.error('An error occurred during registration:', error);
    
    return null;
  }
};