"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AssetDashboardProps {
  isDarkMode: boolean;
}

export function AssetDashboard({ isDarkMode }: AssetDashboardProps) {
  return (
    <div className="flex-1 p-8 overflow-auto">
      {/* 头部资产概览 */}
      <Card className={cn(
        "border-none rounded-2xl overflow-hidden shadow-lg mb-6",
        isDarkMode ? "bg-gray-800/50" : "bg-white"
      )}>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn(
              "text-2xl font-medium",
              isDarkMode ? "text-white" : "text-gray-900"
            )}>
              净资产
              <span className="ml-2 text-gray-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 inline-block"
                  stroke="currentColor"
                >
                  <path
                    d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </div>
          <div className="text-3xl font-semibold mb-4">
            ¥960,000.00
          </div>
          <div className={cn(
            "text-sm",
            isDarkMode ? "text-gray-400" : "text-gray-500"
          )}>
            总资产 ¥960,000.00 总负债 ¥0.00
          </div>
        </CardContent>
      </Card>

      {/* 资产账户列表 */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={cn(
              "text-sm",
              isDarkMode ? "text-white" : "text-gray-900"
            )}>
              资金账户
              <span className="ml-1 text-gray-500">(1)</span>
            </span>
          </div>
          <span className={cn(
            "text-sm",
            isDarkMode ? "text-gray-400" : "text-gray-500"
          )}>
            余额: ¥960,000.00
          </span>
        </div>

        {/* 银行卡项目 */}
        <Card className={cn(
          "border-none rounded-2xl overflow-hidden shadow-lg mb-4",
          isDarkMode ? "bg-gray-800" : "bg-white"
        )}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                    <path
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8v8m-4-4h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className={cn(
                    "font-medium",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}>
                    中国人民银行
                  </div>
                  <div className={cn(
                    "text-sm",
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  )}>
                    现金账户
                  </div>
                </div>
              </div>
              <div className={cn(
                "text-right",
                isDarkMode ? "text-white" : "text-gray-900"
              )}>
                ¥960,000.00
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 已归档账户 */}
      <div className="mb-6">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start px-4 py-2 text-sm",
            isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          )}
        >
          已归档账户
          <span className="ml-2">›</span>
        </Button>
      </div>

      {/* 添加账户按钮 */}
      <Button
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  )
} 