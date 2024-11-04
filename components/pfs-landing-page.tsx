"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ChevronDown,
  Star,
  DollarSign,
  PieChart,
  TrendingUp,
  Menu,
} from "lucide-react";
import type { FeatureCardProps, TestimonialCardProps } from "@/types"
import { setAuthCookie } from '@/lib/auth'

export function PfsLandingPage() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.2])

  const featuresRef = useRef(null)
  const showcaseRef = useRef(null)
  const testimonialsRef = useRef(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const handleGetStarted = () => {
    setAuthCookie()
    router.push('/dashboard')
  }

  return (
    <div className="bg-[#000000] text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-[1024px] mx-auto px-4">
          <div className="flex items-center justify-between h-[48px]">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-medium">
                PFS
              </a>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  特性
                </a>
                <a
                  href="#showcase"
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  产品展示
                </a>
                <a
                  href="#testimonials"
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  用户评价
                </a>
                <button
                  onClick={handleGetStarted}
                  className="text-sm font-medium text-blue-500 hover:opacity-70 transition-opacity"
                >
                  立即体验
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute w-full bg-black/95 backdrop-blur-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                className="block text-lg hover:opacity-70 transition-opacity"
              >
                特性
              </a>
              <a
                href="#showcase"
                className="block text-lg hover:opacity-70 transition-opacity"
              >
                产品展示
              </a>
              <a
                href="#testimonials"
                className="block text-lg hover:opacity-70 transition-opacity"
              >
                用户评价
              </a>
              <button
                onClick={handleGetStarted}
                className="block text-lg text-blue-500 hover:opacity-70 transition-opacity"
              >
                立即体验
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <motion.div
          className="z-10 text-center px-4 max-w-[800px]"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            PFS
          </motion.h1>
          <motion.p
            className="text-3xl md:text-5xl font-medium mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            重新定义个人财务管理
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.button
              onClick={handleGetStarted}
              className="bg-white text-black px-8 py-4 rounded-full text-xl font-medium hover:bg-gray-100 transition-colors w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              立即体验
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white px-8 py-4 rounded-full text-xl font-medium hover:bg-white/10 transition-colors w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              了解更多
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ scale: heroScale }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20" />
          <img
            src="https://images.unsplash.com/photo-1579621970795-87facc2f976d"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-32 px-4">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-center mb-32"
          {...fadeInUp}
        >
          革命性的特性
        </motion.h2>
        <div className="max-w-[1024px] mx-auto space-y-32">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-16"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="text-3xl md:text-5xl font-bold mb-8">智能预算</h3>
              <p className="text-xl md:text-2xl text-gray-400">
                利用AI技术，自动分析您的收支模式，为您量身定制个性化的预算计划。让财务管理变得轻松自如。
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="Smart Budget"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-16"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="text-3xl md:text-5xl font-bold mb-8">
                可视化告
              </h3>
              <p className="text-xl md:text-2xl text-gray-400">
                通过直观、美观的图表和报告，轻松了解您的财务状况，做出明智的决策。让数据更有价值。
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Visual Reports"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-16"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="text-3xl md:text-5xl font-bold mb-8">投资追踪</h3>
              <p className="text-xl md:text-2xl text-gray-400">
                实时监控您的投资组合，提供市场洞察，帮助您优化资产配置策略。让投资更有把握。
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
                alt="Investment Tracking"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section
        id="showcase"
        ref={showcaseRef}
        className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
      >
        <motion.div
          className="max-w-[1024px] mx-auto text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            全方位的财务管理体验
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 mb-24 max-w-3xl mx-auto">
            无论是在桌面还是移动设备上，PFS都能为您提供无缝的使用体验，随时随地掌控您的财务。
          </p>
          <motion.div
            className="relative"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1607706189992-eae578626c86"
              alt="PFS on devices"
              className="w-full rounded-3xl shadow-2xl relative z-10"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        ref={testimonialsRef}
        className="py-32 bg-black"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-32">
          用户心声
        </h2>
        <div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
          <TestimonialCard
            quote="PFS彻底改变了我管理财务的方式，让我对自己的财务状况有了前所未有的掌控感。"
            author="张三"
            role="自由职业者"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
          />
          <TestimonialCard
            quote="作为一个企业家，PFS帮助我更好地管理个人财务，发现新的投资机会。"
            author="李四"
            role="科技创业者"
            image="https://images.unsplash.com/photo-1519345182560-3f2917c472ef"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1024px] mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-bold mb-16">
            开启您的财务自由之旅
          </h2>
          <p className="text-2xl md:text-3xl mb-24 max-w-3xl mx-auto text-gray-400">
            不要再让复杂的财务问题困扰您。立即使用PFS，轻松管理您的个人财务，迈向财务自由。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              onClick={handleGetStarted}
              className="bg-white text-black px-12 py-6 rounded-full text-2xl font-semibold hover:bg-gray-100 transition-colors w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              免费试用14天
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white px-12 py-6 rounded-full text-2xl font-semibold hover:bg-white/10 transition-colors w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              了解更多
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-[1024px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6">PFS</h3>
            <p className="text-lg">重新定义个人财务管理</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">快速链接</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => router.push('/')}
                  className="hover:text-white transition duration-300"
                >
                  主页
                </button>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition duration-300"
                >
                  特性
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  className="hover:text-white transition duration-300"
                >
                  产品展示
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition duration-300"
                >
                  用户评价
                </a>
              </li>
              <li>
                <button
                  onClick={handleGetStarted}
                  className="hover:text-white transition duration-300"
                >
                  立即体验
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li>邮箱：info@pfs.com</li>
              <li>电话：+1 (555) 123-4567</li>
              <li>地址：北京市朝阳区</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1024px] mx-auto px-4 mt-16 pt-8 border-t border-gray-800">
          <p className="text-center">&copy; 2023 PFS. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-gray-900 p-12 rounded-2xl text-center"
      whileHover={{ y: -10, boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-blue-500 mb-8">{icon}</div>
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <p className="text-gray-400 text-lg">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-gray-900 p-12 rounded-2xl"
      whileHover={{ y: -10, boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={24} className="text-yellow-400" />
        ))}
      </div>
      <p className="text-xl mb-8">{quote}</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-20 h-20 rounded-full mr-6" />
        <div>
          <p className="font-semibold text-xl text-white">{author}</p>
          <p className="text-gray-400 text-lg">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
