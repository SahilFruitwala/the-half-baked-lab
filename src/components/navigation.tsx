"use client"

import { Button } from "@/components/ui/button"
import { Coffee, Mail, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Logo"
                width={64}
                height={64}
                className="text-amber-600 dark:text-amber-500 transition-transform group-hover:rotate-12"
                />
              {/* <Coffee className="h-6 w-6 text-amber-600 dark:text-amber-500 transition-transform group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white transition-colors">
              The Half Baked Lab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/projects"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </Link>
            {/* <Link
              href="/blog"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </Link> */}
            <Link
              href="/ideas"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
            >
              Ideas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </Link>
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="border-slate-200 dark:border-slate-700 hover:bg-amber-50 dark:hover:bg-amber-950"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-3">
              <Link
                href="/projects"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/ideas"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Ideas
              </Link>
              <Link
                href="/about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button variant="outline" size="sm" className="w-fit">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
