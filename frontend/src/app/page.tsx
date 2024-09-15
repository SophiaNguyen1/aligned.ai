'use client'

import { Mic, Users, Zap } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0/client'
import backgroundImage from './pictures/Background.png';

export default function LandingPage() {
  const { user, error, isLoading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/home')
    }
  }, [user, router])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center relative z-20 bg-black">
        <Link className="flex items-center justify-center" href="#">
          <Mic className="h-8 w-8 text-primary text-white" />
          <span className="ml-2 text-3xl font-bold text-primary text-white">
            VoiceVenture
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center py-2">
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 text-white"
            href="#"
          >
            HOME
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 text-white"
            href="#"
          >
            ABOUT US
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 text-white"
            href="#"
          >
            GET MATCHED
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 text-white"
            href="#"
          >
            STARTUPS
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 text-white"
            href="#"
          >
            VC FUNDS
          </Link>
          <Link href="/api/auth/login">
            <Button variant="outline" className="text-lg px-6 py-3 text-white">Login / Sign Up</Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary mx-auto">
        <video
    autoPlay
    loop
    muted
    className="absolute inset-0 w-full h-full object-cover md:h-96 lg:h-[40rem]"
  >
    <source src="/waterFull.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col mx-auto items-center space-y-4 text-center ">
                <div className="space-y-2 mx-auto ">
                <h1 className="text-3xl font-bold flex justify-center h-full items-center tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Find Founders and VCs with Your Voice
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Use the power of AI to connect with the right people in the
                  startup ecosystem. Just speak, and we'll find the perfect
                  match.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-primary"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-black">
  How It Works
</h2>            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Mic className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">Speak Your Needs</h3>
                <p className="text-gray-600">
                  Simply tell us what you're looking for in a founder or VC.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">AI-Powered Matching</h3>
                <p className="text-gray-600">
                  Our LLM analyzes your request and finds the best matches.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">Connect</h3>
                <p className="text-gray-600">
                  Get introduced to relevant founders and VCs in no time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 mx-auto">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mx-auto">
              <div className="space-y-2 mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Revolutionize Your Networking?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join VoiceVenture today and start connecting with the right
                  people in the startup world.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By signing up, you agree to our{' '}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 VoiceVenture. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
