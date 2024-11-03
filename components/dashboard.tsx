'use client'

import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
// import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts"
import { Moon, Sun, Home, BarChart3, Settings, HelpCircle, RefreshCcw, ArrowLeft, Plus, Layers } from "lucide-react"
import { FinancialDashboard } from "./financial-dashboard"
import { AssetDashboard } from "./asset-dashboard"

const data = [
  { date: '10-1', value: 28300 },
  { date: '10-8', value: 25400 },
  { date: '10-15', value: 29200 },
  { date: '10-22', value: 28300 },
  { date: '10-29', value: 27100 },
]

const assetData = [
  { date: '10-1', value: 0 },
  { date: '10-8', value: 0 },
  { date: '10-15', value: 0 },
  { date: '10-22', value: 0 },
  { date: '10-29', value: 0 },
]

export function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentView, setCurrentView] = useState<'overview' | 'stats' | 'assets'>('overview')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} text-gray-900 dark:text-white font-sans transition-colors duration-200`}>
      {/* Sidebar */}
      <div className={`w-20 flex flex-col items-center gap-8 border-r ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} py-8`}>
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center gap-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full ${currentView === 'overview' && 'bg-gray-200 dark:bg-gray-800'}`}
            onClick={() => setCurrentView('overview')}
          >
            <Home className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full ${currentView === 'assets' && 'bg-gray-200 dark:bg-gray-800'}`}
            onClick={() => setCurrentView('assets')}
          >
            <Layers className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full ${currentView === 'stats' && 'bg-gray-200 dark:bg-gray-800'}`}
            onClick={() => setCurrentView('stats')}
          >
            <BarChart3 className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full">
            <Settings className="h-6 w-6" />
          </Button>
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full">
            <HelpCircle className="h-6 w-6" />
          </Button>
          <div className="flex flex-col items-center gap-2">
            {isDarkMode ? (
              <Moon className="h-4 w-4 text-gray-400" />
            ) : (
              <Sun className="h-4 w-4 text-gray-400" />
            )}
            <Switch
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              className="data-[state=checked]:bg-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      {currentView === 'overview' ? (
        <div className="flex-1 p-8 overflow-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-semibold">账户概览</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className={`rounded-full ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'}`}>
                <RefreshCcw className="h-4 w-4 mr-2" />
                返回本月
              </Button>
              <Button variant="outline" size="sm" className={`rounded-full ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                按月统计
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
              <CardContent className="p-6">
                <div className="text-red-400 mb-2 text-sm">总支出</div>
                <div className="text-3xl font-bold mb-2">¥900.00</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  总收入 ¥29,200.00
                  <br />
                  结余 ¥28,300.00
                </div>
              </CardContent>
            </Card>
            <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
              <CardContent className="p-6">
                <div className="text-green-400 mb-2 text-sm">剩余预算</div>
                <div className="text-3xl font-bold mb-2">-¥600.00</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  总预算 ¥300.00
                  <br />
                  剩余日均 ¥0.00
                </div>
              </CardContent>
            </Card>
            <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
              <CardContent className="p-6">
                <div className="text-blue-400 mb-2 text-sm">待报销</div>
                <div className="text-3xl font-bold mb-2">¥0.00</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  已报销 ¥0.00
                  <br />
                  报销入账 ¥0.00
                </div>
              </CardContent>
            </Card>
            <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
              <CardContent className="p-6">
                <div className="text-yellow-400 mb-2 text-sm">净资产</div>
                <div className="text-3xl font-bold mb-2">¥960,000.00</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  总资产 ¥960,000.00
                  <br />
                  总负债 ¥0.00
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className={`lg:col-span-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="font-semibold text-lg">结余统计图</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">平均值: ¥912.90</div>
                </div>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <Bar dataKey="value" fill={isDarkMode ? "#60a5fa" : "#3b82f6"} radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg row-span-2`}>
              <CardContent className="p-6">
                <div className="font-semibold text-lg mb-6">2024年10月</div>
                <Calendar
                  className={`rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3`}
                  classNames={{
                    day_selected: "bg-blue-500 text-white hover:bg-blue-600",
                    day_today: `${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} text-current`,
                    day: "rounded-full",
                    head_cell: "text-gray-500 dark:text-gray-400",
                    cell: "text-sm p-0",
                    button: `hover:${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full w-9 h-9`,
                    nav_button: `hover:${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-7 w-7`,
                    table: "w-full border-collapse space-y-1",
                  }}
                />
              </CardContent>
            </Card>

            <Card className={`lg:col-span-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-none rounded-2xl overflow-hidden shadow-lg`}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="font-semibold text-lg">总负债趋势图</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className={`rounded-full ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'}`}>
                      净资产
                    </Button>
                    <Button variant="outline" size="sm" className={`rounded-full ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'}`}>
                      总资产
                    </Button>
                    <Button variant="outline" size="sm" className={`rounded-full ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'}`}>
                      总负债
                    </Button>
                  </div>
                </div>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={assetData}>
                      <Line type="monotone" dataKey="value" stroke={isDarkMode ? "#60a5fa" : "#3b82f6"} strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : currentView === 'stats' ? (
        <FinancialDashboard isDarkMode={isDarkMode} />
      ) : (
        <AssetDashboard isDarkMode={isDarkMode} />
      )}

      {/* Floating Action Button */}
      <Button
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  )
}