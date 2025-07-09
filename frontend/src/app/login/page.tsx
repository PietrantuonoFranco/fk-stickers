"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login submitted:", formData)
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-lg shadow-xl rounded-xl border-0 bg-white backdrop-blur-sm py-6 px-8">
        <div className="text-center space-y-4 pb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-fk-lila to-fk-violet rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803c2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.844 0M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Welcome Back</h2>
            <h4 className="text-slate-600 mt-2">Sign in to your account</h4>
          </div>
        </div>

        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="usernameOrEmail" className="text-sm font-medium text-slate-700">
                Username or Email
              </label>
              <input
                id="usernameOrEmail"
                type="text"
                placeholder="Enter your username or email"
                value={formData.usernameOrEmail}
                onChange={(e) => handleInputChange("usernameOrEmail", e.target.value)}
                className="w-full rounded-md pl-3 pr-12 py-2 text-fk-dark-gray border-1 border-gray-300 hover:shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full rounded-md pl-3 pr-12 py-2 text-fk-dark-gray border-1 border-gray-300 hover:shadow-sm hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                >
                  {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                          <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
                          <path d="M12 3.25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56c-.267.605-.383 1.264-.383 2.152s.116 1.547.383 2.152c.25.564.617 1.042 1.016 1.56l.032.041C4.445 18.046 7.486 20.75 12 20.75s7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56c.267-.605.383-1.264.383-2.152s-.116-1.547-.383-2.152c-.25-.564-.617-1.041-1.016-1.56l-.032-.041C19.555 5.954 16.514 3.25 12 3.25M3.87 9.162C5.498 7.045 8.15 4.75 12 4.75s6.501 2.295 8.13 4.412c.44.57.696.91.865 1.292c.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C18.5 16.955 15.85 19.25 12 19.25s-6.501-2.295-8.13-4.412c-.44-.57-.696-.91-.865-1.292c-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.426-.722.864-1.292" />
                        </g>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314" clipRule="evenodd" />
                      </svg>
                      
                    )
                  }
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link
                href="/reset-password"
                className="text-sm text-slate-600 hover:text-slate-900 underline underline-offset-2"
              >
                Forgot your password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg h-11 bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors duration-200 mt-6"
            >
              Sign In
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-[1px] bg-gray-100" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleSocialLogin("Google")}
              className="w-full rounded-lg h-11 border-1 border-slate-300 hover:bg-slate-50 text-slate-700 font-medium flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Login with Google account
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("Microsoft")}
              className="w-full rounded-lg h-11 border-1 border-slate-300 hover:bg-slate-50 text-slate-700 font-medium flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#F25022" d="M1 1h10v10H1z" />
                <path fill="#00A4EF" d="M13 1h10v10H13z" />
                <path fill="#7FBA00" d="M1 13h10v10H1z" />
                <path fill="#FFB900" d="M13 13h10v10H13z" />
              </svg>
              Login with Microsoft account
            </button>
          </div>

          <div className="text-center pt-4 border-t border-slate-100">
            <p className="text-sm text-slate-600">
              {"You don't have an account? "}
              <Link
                href="/signup"
                className="text-slate-900 hover:text-slate-700 font-medium underline underline-offset-2"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
