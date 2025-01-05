'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowRight, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PricingSection from './components/PricingSection'
import AssessmentSteps from './components/AssessmentSteps'
import SkillTestFeatures from './components/SkillTestFeatures'
import TrustedInstitutions from './components/TrustedInstitutions'

const subjects = [
  { name: 'Mathematics', icon: '📐' },
  { name: 'Physics', icon: '⚡' },
  { name: 'Chemistry', icon: '🧪' },
  { name: 'Biology', icon: '🧬' },
  { name: 'Computer Science', icon: '💻' },
  { name: 'English', icon: '📚' },
  { name: 'History', icon: '🏛️' },
  { name: 'Geography', icon: '🌍' },
  { name: 'Economics', icon: '📊' },
]

const trustedBy = [
  { 
    name: 'Harvard University', 
    logo: 'https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png',
    width: 150,
    height: 60
  },
  { 
    name: 'MIT', 
    logo: 'https://1000logos.net/wp-content/uploads/2022/08/MIT-Logo.png',
    width: 120,
    height: 60
  },
  { 
    name: 'Stanford University', 
    logo: 'https://1000logos.net/wp-content/uploads/2018/02/Stanford-Logo.png',
    width: 150,
    height: 60
  },
  { 
    name: 'Yale University', 
    logo: 'https://1000logos.net/wp-content/uploads/2017/02/Yale-Logo.png',
    width: 120,
    height: 60
  },
  { 
    name: 'Princeton University', 
    logo: 'https://1000logos.net/wp-content/uploads/2018/02/Princeton-Logo.png',
    width: 150,
    height: 60
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-indigo-600 font-medium">
                  Ranks #1 for Student Success Rate
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Skill Assessment Platform
              </h1>

              {/* Subheading */}
              <p className="text-xl text-gray-600 mb-6">
                Enhance your learning journey with our adaptive assessment platform. Get instant feedback and personalized recommendations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open('http://localhost:63342/pythonProject/Pyhton%20Online%20Exam%20Project/templates/index.html?_ijt=alkb5curaml5q79fr77d7fre8p&_ij_reload=RELOAD_ON_SAVE', '_blank')}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-sm text-lg font-medium inline-flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <Link 
                  href="/pricing" 
                  className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200 text-lg font-medium inline-flex items-center justify-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Right Column - Subject Grid */}
            <div className="grid grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <motion.div
                  key={subject.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl border-2 border-gray-100 hover:border-indigo-200 transition-all duration-200 shadow-sm hover:shadow"
                >
                  <div className="text-3xl mb-2">{subject.icon}</div>
                  <div className="text-sm font-medium text-gray-900">{subject.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Institutions Section */}
      <section className="py-8">
        <TrustedInstitutions />
      </section>

      {/* Features Section */}
      <section className="py-8">
        <SkillTestFeatures />
      </section>

      {/* Assessment Steps Section */}
      <section className="py-8">
        <AssessmentSteps />
      </section>

      {/* Pricing Section */}
      <section className="py-8">
        <PricingSection />
      </section>

      {/* Watch Demo Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Watch a demo of ExamPro in action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                See how our platform streamlines the assessment process and enhances learning outcomes
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 shadow-sm"
              >
                Watch Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-16 sm:px-16 sm:py-20 lg:py-24 relative">
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Ready to transform your assessment process?
                </h2>
                <p className="mt-4 text-xl text-indigo-100">
                  Join thousands of institutions that trust ExamPro for their assessment needs.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-indigo-600 rounded-lg text-lg font-medium transition-all duration-200"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-transparent text-indigo-600 bg-white hover:bg-indigo-50 rounded-lg text-lg font-medium transition-all duration-200"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
