import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isAuthPage = path === '/login' || path === '/register' || path === '/reset-password'
  const isProtectedRoute = path.includes('/dashboard')
  const authToken = request.cookies.get('auth-token')
  const isAuthenticated = !!authToken?.value

  // 如果用户已登录且访问登录/注册页面，重定向到仪表板
  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // 如果用户未登录且访问受保护的路由，重定向到登录页面
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register', '/reset-password']
} 