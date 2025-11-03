import { LoginButton } from "@/components/auth/login-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Roboto } from "next/font/google"

const josefin = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export default function HomePage() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center text-cente blur-in-3xl bg-linear-to-b from-indigo-500 via-purple-500 to-pink-500 text-white p-4 sm:p-8",
        josefin.className
      )}
    >
      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl blur-in-2xl bg-white/10 shadow-xl border border-white/20">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          Welcome to AuthPro
        </h1>
        <p className="text-base sm:text-lg mb-6 text-white/90 leading-relaxed">
          A simple and secure authentication service to manage your users with ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LoginButton mode="redirect">
            <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-purple-100 font-semibold w-full sm:w-auto">
              Sign In
            </Button>
            </LoginButton>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white bg-white/20 hover:bg-white/10 hover:text-white w-full sm:w-auto"
            >
              Sign Up
            </Button>
        </div>
      </div>
    </main>
  )
}
