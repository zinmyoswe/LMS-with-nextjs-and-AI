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
  Rocket,
  Crown,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/Header";

import { sanityFetch } from "@/sanity/lib/live";
import { FEATURED_COURSES_QUERY, STATS_QUERY } from "@/sanity/lib/queries";
import { currentUser } from "@clerk/nextjs/server";
import { CourseCard } from "@/components/courses/CourseCard";


export default async function Home() {

  // Fetch featured courses, stats, and check auth status
  const [{ data: courses }, { data: stats }, user] = await Promise.all([
    sanityFetch({ query: FEATURED_COURSES_QUERY }),
    sanityFetch({ query: STATS_QUERY }),
    currentUser(),
  ]);

  const isSignedIn = !!user;


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
      <Header />

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

      {/* Stats */}
      <div
              className="mt-16 grid grid-cols-3 gap-8 md:gap-16 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                {
                  value: stats?.courseCount ?? 0,
                  label: "Courses",
                  icon: BookOpen,
                },
                {
                  value: stats?.lessonCount ?? 0,
                  label: "Lessons",
                  icon: Play,
                },
                { value: "10K+", label: "Students", icon: Users },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-violet-400" />
                    <span className="text-2xl md:text-3xl font-bold text-dark">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-zinc-500">{stat.label}</span>
                </div>
              ))}
            </div>

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

     

      {/* Tiers Preview */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Free",
                icon: Rocket,
                color: "emerald",
                gradient: "from-emerald-500 to-teal-600",
                bgGlow: "bg-emerald-500/10",
                borderColor: "border-emerald-500/20",
                description: "Start your journey with foundational courses",
                features: [
                  "Core fundamentals",
                  "Community access",
                  "Basic projects",
                ],
              },
              {
                tier: "Pro",
                icon: Crown,
                color: "violet",
                gradient: "from-violet-500 to-fuchsia-600",
                bgGlow: "bg-violet-500/10",
                borderColor: "border-violet-500/30",
                description: "Level up with advanced, production-ready content",
                features: [
                  "All Free content",
                  "Advanced courses",
                  "Priority support",
                  "Certificates",
                ],
                popular: true,
              },
              {
                tier: "Ultra",
                icon: Trophy,
                color: "cyan",
                gradient: "from-cyan-400 to-blue-600",
                bgGlow: "bg-cyan-500/10",
                borderColor: "border-cyan-500/20",
                description:
                  "Unlock the real gems - AI tutor & exclusive content",
                features: [
                  "Everything in Pro",
                  "AI Learning Assistant",
                  "Exclusive content",
                  "1-on-1 sessions",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.tier}
                className={`relative p-8 rounded-2xl ${plan.bgGlow} border ${plan.borderColor} ${plan.popular ? "ring-2 ring-violet-500/50" : ""} transition-all duration-300 hover:scale-[1.02]`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-zinc-900"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 ${plan.color === "emerald" ? "text-emerald-400" : plan.color === "violet" ? "text-violet-400" : "text-cyan-400"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>


        {/* Featured Courses */}
        <section id="courses" className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Courses built for{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                real results
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Each course is packed with modules and lessons designed to take
              you from zero to job-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => {
             const slug = course.slug?.current;

             if(!slug){
              return null;
             }
             
             return(
              <CourseCard
                key={course._id}
                slug={{ current: slug }}
                title={course.title}
                description={course.description}
                tier={course.tier}
                thumbnail={course.thumbnail}
                moduleCount={course.moduleCount}
                lessonCount={course.lessonCount}
              />
             );

              
})}
          
          </div>

          <div className="text-center mt-10">
            <Link href="/dashboard">
            <Button
              variant="outline"
              className="border-0 bg-[#a435f0] text-white hover:bg-[#8710d8]"
            >
                View All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>


        {/* Testimonials */}
        <section
          id="testimonials"
          className="px-6 lg:px-12 py-20 max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Students{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                love it
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Chen",
                role: "Junior Developer",
                content:
                  "Zin's teaching style is incredible. I went from knowing nothing to landing my first dev job in 6 months!",
                avatar: "🧑‍💻",
              },
              {
                name: "Sarah Miller",
                role: "Freelancer",
                content:
                  "The Ultra tier is worth every penny. The exclusive content and 1-on-1 sessions transformed my career.",
                avatar: "👩‍💼",
              },
              {
                name: "James Wilson",
                role: "CS Student",
                content:
                  "Best investment I've made. The Pro courses filled gaps my university courses never covered.",
                avatar: "🎓",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 rounded-2xl bg-white border border-zinc-800"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={`star-${testimonial.name}-${i}`}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-zinc-900 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-cyan-600/20 border border-white/10 p-12 md:p-20 text-center overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/30">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to level up your skills?
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
                Start with free courses or unlock everything with Pro and Ultra.
                Your coding journey begins now.
              </p>
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-xl shadow-violet-600/30 px-10 h-14 text-lg font-semibold"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
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
