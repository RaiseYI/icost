import { DashboardPage } from '@/components/dashboard'

// 使用 dynamic import 来避免 SSR 问题
import dynamic from 'next/dynamic'

const DashboardWithNoSSR = dynamic(
  () => import('@/components/dashboard').then((mod) => mod.DashboardPage),
  { ssr: false }
)

export default function Dashboard() {
  return <DashboardWithNoSSR />
} 