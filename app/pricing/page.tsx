'use client'

import React from 'react';
import Link from 'next/link';
import { Clock, Book, Code, Database, Network, Lock } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-yellow-400 mb-2">Pricing</p>
          <h1 className="text-3xl font-bold mb-4">
            Choose the plan that{' '}
            <span className="text-gray-400">fits your needs.</span>
          </h1>
          <p className="text-gray-400">
            We're working hard to get SmallTalk2.me ready for everyone! We'll get rid of the waitlist as soon as we can.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">Free</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-gray-400">Free</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">To discover our product and its features</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Basic IELTS features
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                3 Writing Mock Exams
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Limited feedback system
              </li>
            </ul>
            <button className="w-full py-3 px-4 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors text-sm font-medium">
              Learn more
            </button>
          </div>

          {/* Premium Plan */}
          <div className="rounded-2xl bg-zinc-900 p-6 border border-yellow-500/50 hover:border-yellow-500 transition-colors relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-500 text-black text-xs font-medium px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">Premium</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$20</span>
                <span className="text-gray-400 ml-1 text-sm">/month</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Perfect option for individual students</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                All Free features
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited Mock Exams
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced feedback system
              </li>
            </ul>
            <button 
              className="w-full py-3 px-4 rounded-lg bg-yellow-500 text-black hover:bg-yellow-400 transition-colors text-sm font-medium"
              onClick={() => window.open('http://localhost:63342/pythonProject/Pyhton%20Online%20Exam%20Project/templates/index.html?_ijt=alkb5curaml5q79fr77d7fre8p&_ij_reload=RELOAD_ON_SAVE', '_blank')}
            >
              Try Free Trial
            </button>
          </div>

          {/* Pro Plan */}
          <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">Pro</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$50</span>
                <span className="text-gray-400 ml-1 text-sm">/month</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Best suited for larger institutions</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                All Premium features
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom branding options
              </li>
            </ul>
            <button className="w-full py-3 px-4 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors text-sm font-medium">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
