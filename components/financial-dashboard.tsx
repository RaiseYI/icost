"use client"

import { type FC } from 'react'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { BarChart, LineChart, Bar, Line, ResponsiveContainer } from 'recharts'
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import { cn } from "@/lib/utils"

interface FinancialDashboardProps {
  isDarkMode?: boolean;
}

export const FinancialDashboard: FC<FinancialDashboardProps> = ({ isDarkMode = false }) => {
  const [barData] = useState(() =>
    Array.from({ length: 30 }, () => ({
      value: Math.random() * 1000
    }))
  )

  const [assetData] = useState(() =>
    Array.from({ length: 30 }, () => ({
      value: 960000
    }))
  )

  const StatItem = ({ label, value }: { label: string; value: string }) => (
    <div className="space-y-1">
      <div className={cn(
        "text-xs",
        isDarkMode ? "text-gray-400" : "text-gray-500"
      )}>{label}</div>
      <div className={cn(
        "text-sm",
        isDarkMode ? "text-white" : "text-gray-900"
      )}>¥{value}</div>
    </div>
  )

  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="flex items-center justify-between mb-10">
        <h1 className={`text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>统计</h1>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-blue-500">按月统计</span>
          <Button variant="ghost" size="icon" className={`${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>2024年11月</span>
          <Button variant="ghost" size="icon" className={`${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className={`rounded-full ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'}`}
        >
          <Filter className="h-4 w-4 mr-2" />
          筛选
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 收支统计卡片 */}
        <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span className="text-sm">收支统计</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatItem label="支出" value="0.00" />
              <StatItem label="收入" value="0.00" />
              <StatItem label="结余" value="0.00" />
              <StatItem label="日均支出" value="0.00" />
              <StatItem label="退款" value="0.00" />
              <StatItem label="退款收入" value="0.00" />
              <StatItem label="优惠" value="0.00" />
              <StatItem label="手续费" value="0.00" />
            </div>
          </CardContent>
        </Card>

        {/* 报销统计卡片 */}
        <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span className="text-sm">报销统计</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatItem label="待报销" value="0.00" />
              <StatItem label="已报销" value="0.00" />
              <StatItem label="报销入账" value="0.00" />
              <StatItem label="报销收入" value="0.00" />
            </div>
          </CardContent>
        </Card>

        {/* 流转统计卡片 */}
        <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span className="text-sm">流转统计</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatItem label="还款" value="0.00" />
              <StatItem label="收款" value="0.00" />
              <StatItem label="转账" value="0.00" />
              <StatItem label="充值" value="0.00" />
              <StatItem label="借入" value="0.00" />
              <StatItem label="借出" value="0.00" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* 支出分类详情 */}
        <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span className="text-sm">支出分类详情</span>
            </div>
            <div className="relative h-[300px] flex items-center justify-center">
              <div className="w-[200px] h-[200px] rounded-full border-8 border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs text-gray-400">总支出</div>
                  <div className="text-lg font-semibold">¥0.00</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 支出统计图 */}
        <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span className="text-sm">支出统计图</span>
              </div>
              <div className="text-xs text-gray-400">平均值: ¥0.00</div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <Bar dataKey="value" fill={isDarkMode ? "#4B5563" : "#E5E7EB"} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* 净资产趋势图 */}
        <Card className={`lg:col-span-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span className="text-sm">净资产趋势图</span>
              </div>
              <div className="text-sm text-gray-400">11月3日 ¥960,000.00</div>
            </div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={assetData}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#D97706" 
                    strokeWidth={2} 
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}