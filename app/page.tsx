import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Users,
  Trophy,
  Zap,
  ArrowRight,
  Play,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1c1d1f] antialiased">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Navigation */}
      <header className="border-b border-[#d1d7dc] bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[#A435F0]">
              <GraduationCap className="size-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#1c1d1f]">
              LMSAI
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm text-[#1c1d1f] transition hover:text-[#A435F0]"
            >
              Features
            </Link>
            <Link
              href="#stats"
              className="text-sm text-[#1c1d1f] transition hover:text-[#A435F0]"
            >
              Stats
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-[#1c1d1f] transition hover:text-[#A435F0]"
            >
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-[#1c1d1f] hover:bg-[#f7f9fa] hover:text-[#A435F0]"
            >
              Sign in
            </Button>
            <Button
              className="bg-[#A435F0] text-white hover:bg-[#8710d8]"
            >
              Sign up
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f7f9fa] px-6 pt-20 pb-32 md:pt-28 md:pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A435F0]/30 bg-[#A435F0]/10 px-4 py-1.5 text-sm font-medium text-[#A435F0]">
            <Sparkles className="size-4" />
            AI-Powered Learning Platform
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#1c1d1f] sm:text-5xl md:text-6xl lg:text-7xl">
            Learn smarter,{" "}
            <span className="text-[#A435F0]">not harder</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6a6f73] md:text-xl">
            The intelligent learning management system that adapts to your pace,
            tracks your progress, and helps you achieve your goals—powered by AI.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 bg-[#A435F0] px-8 text-base text-white hover:bg-[#8710d8]"
            >
              Start Learning Free
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 gap-2 border-[#1c1d1f] bg-transparent px-8 text-base text-[#1c1d1f] hover:bg-[#f7f9fa]"
            >
              <Play className="size-4" />
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-[#6a6f73]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="size-8 rounded-full border-2 border-[#f7f9fa] bg-[#A435F0]"
                  />
                ))}
              </div>
              <span>10,000+ learners</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="size-4 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="ml-1">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1c1d1f] sm:text-4xl">
              Everything you need to{" "}
              <span className="text-[#A435F0]">master any skill</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#6a6f73]">
              Built for modern learners. Track progress, earn achievements, and
              learn at your own pace with AI-powered insights.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Curated Courses",
                description:
                  "Access thousands of courses across every discipline. From coding to design, business to creative arts.",
                iconClass: "bg-[#A435F0]/10 text-[#A435F0]",
              },
              {
                icon: Zap,
                title: "AI Adapts to You",
                description:
                  "Smart algorithms personalize your learning path. Focus on what matters and skip what you know.",
                iconClass: "bg-amber-500/10 text-amber-600",
              },
              {
                icon: Trophy,
                title: "Gamified Progress",
                description:
                  "Earn badges, complete challenges, and climb leaderboards. Stay motivated with achievements.",
                iconClass: "bg-[#A435F0]/10 text-[#A435F0]",
              },
              {
                icon: Users,
                title: "Learn Together",
                description:
                  "Join study groups, discuss with peers, and get feedback from experts. Learning is better together.",
                iconClass: "bg-[#A435F0]/10 text-[#A435F0]",
              },
              {
                icon: GraduationCap,
                title: "Certifications",
                description:
                  "Earn recognized credentials that showcase your skills to employers and the world.",
                iconClass: "bg-[#A435F0]/10 text-[#A435F0]",
              },
              {
                icon: Sparkles,
                title: "Smart Summaries",
                description:
                  "AI-generated summaries and flashcards. Review faster and retain more with intelligent tools.",
                iconClass: "bg-[#A435F0]/10 text-[#A435F0]",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="group border-[#d1d7dc] bg-white shadow-sm transition-all hover:border-[#A435F0]/30 hover:shadow-md"
              >
                <CardHeader>
                  <div
                    className={`mb-2 inline-flex size-12 items-center justify-center rounded-xl ${feature.iconClass}`}
                  >
                    <feature.icon className="size-6" />
                  </div>
                  <CardTitle className="text-[#1c1d1f]">{feature.title}</CardTitle>
                  <CardDescription className="text-[#6a6f73]">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="border-y border-[#d1d7dc] bg-[#f7f9fa] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "500K+", label: "Active Learners" },
              { value: "10K+", label: "Expert Courses" },
              { value: "98%", label: "Completion Rate" },
              { value: "4.9", label: "User Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[#A435F0] md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[#6a6f73]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border-[#d1d7dc] bg-[#f7f9fa]">
            <div className="relative px-8 py-16 text-center md:px-16">
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-[#1c1d1f] sm:text-4xl">
                  Ready to transform your learning?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[#6a6f73]">
                  Join thousands of learners already mastering new skills. Start
                  free—no credit card required.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-12 gap-2 bg-[#A435F0] px-8 text-base text-white hover:bg-[#8710d8]"
                  >
                    Create Free Account
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 border-[#1c1d1f] bg-transparent px-8 text-base text-[#1c1d1f] hover:bg-[#f7f9fa]"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d1d7dc] bg-[#1c1d1f] px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-[#A435F0]">
                <GraduationCap className="size-4 text-white" />
              </div>
              <span className="font-semibold text-white">LMSAI</span>
            </div>
            <div className="flex gap-8 text-sm text-[#cec0fc]">
              <Link href="#" className="transition hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="transition hover:text-white">
                Terms
              </Link>
              <Link href="#" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-[#9da3a7]">
            © {new Date().getFullYear()} LMSAI. Built for learners, by learners.
          </p>
        </div>
      </footer>
    </div>
  );
}
