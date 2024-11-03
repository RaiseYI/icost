interface LoginCredentials {
  email: string;
  password: string;
}

export async function validateCredentials({ email, password }: LoginCredentials): Promise<boolean> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // 验证默认账号密码
  return email === 'admin@gmail.com' && password === '123456';
}

export function setAuthCookie(): void {
  document.cookie = 'auth-token=dummy-token; path=/';
}

export function clearAuthCookie(): void {
  document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

export function isAuthenticated(): boolean {
  return document.cookie.includes('auth-token=dummy-token');
} 