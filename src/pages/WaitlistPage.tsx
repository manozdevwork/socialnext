import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Zap,
  Star,
  TrendingUp,
  Sparkles,
  Timer,
  Bolt,
} from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { TextField } from "@/components/ui/forms/TextField";
import { Card } from "@/components/ui/card";
import { Title, Subtitle } from "@/components/ui/typography";
import { toast } from "sonner";

const WaitlistPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("You're on the waitlist! We'll notify you when we launch.");
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/40 to-green-500/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/40 to-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 left-2/3 w-64 h-64 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-1/3 right-2/3 w-48 h-48 bg-gradient-to-br from-pink-400/30 to-red-500/30 rounded-full blur-3xl animate-ping"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <Card className="max-w-2xl w-full p-8 sm:p-12 text-center animate-scale-in bg-gradient-to-br from-white via-white to-purple-50/50 backdrop-blur-lg border-0 shadow-[0_0_50px_rgba(0,0,0,0.2)] relative z-10 overflow-hidden">
          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5 rounded-lg"></div>

          {/* Success icon with enhanced animation */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-green-400 rounded-full blur-xl opacity-60 animate-pulse scale-150"></div>
            <div className="relative bg-gradient-to-br from-emerald-400 to-green-500 rounded-full p-6 mx-auto w-fit shadow-lg">
              <CheckCircle2 className="h-16 w-16 text-white mx-auto animate-bounce drop-shadow-lg" />
            </div>
          </div>

          {/* Main success message */}
          <div className="mb-8 animate-fade-in space-y-4">
            <div className="mb-4">
              <h1 className="text-4xl sm:text-6xl font-black mb-2">
                <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 bg-clip-text text-transparent animate-pulse">
                  🚀 WELCOME ABOARD!
                </span>
              </h1>
              <div className="flex justify-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Desperate waiting message */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border-purple-500 mb-6">
              <p className="text-lg sm:text-xl text-gray-800 font-semibold leading-relaxed">
                🎯{" "}
                <span className="text-purple-700 font-black">
                  You're officially in the VIP circle!
                </span>{" "}
                We're literally counting down the seconds until we can put this
                game-changing tool in your hands.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-300 mb-6">
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                💰{" "}
                <span className="text-orange-700 font-bold">
                  Here's what just happened:
                </span>{" "}
                You secured a{" "}
                <span className="text-green-600 font-black text-xl">
                  50% LIFETIME discount
                </span>{" "}
                that will save you thousands. Regular price will be $497/month -
                you'll pay just $248/month forever.
              </p>
            </div>
          </div>

          {/* Enhanced status cards */}
          <div className="space-y-4 mb-8">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Bolt className="h-5 w-5 animate-spin" />
                </div>
                <div>
                  <p className="font-black text-lg">Position #47</p>
                  <p className="text-emerald-100 text-sm">
                    Out of 2,847 waiting professionals
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Sparkles className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <p className="font-black text-lg">Early Bird Locked In</p>
                  <p className="text-purple-100 text-sm">
                    50% lifetime discount secured forever
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Timer className="h-5 w-5 animate-bounce" />
                </div>
                <div>
                  <p className="font-black text-lg">Launch Alert Set</p>
                  <p className="text-orange-100 text-sm">
                    We'll email you the moment we go live
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ultra convincing pitch */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-6 sm:p-8 rounded-2xl border border-gray-200 mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4">
              🔥 Why You Made The RIGHT Choice:
            </h3>
            <div className="text-left space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-500 rounded-full p-1 mt-1">
                  <CheckCircle2 className="h-3 w-3 text-white" />
                </div>
                <p className="font-semibold">
                  Beta users are seeing{" "}
                  <span className="text-emerald-600 font-black">
                    300% more engagement
                  </span>{" "}
                  in their first week
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-emerald-500 rounded-full p-1 mt-1">
                  <CheckCircle2 className="h-3 w-3 text-white" />
                </div>
                <p className="font-semibold">
                  Our AI has analyzed{" "}
                  <span className="text-purple-600 font-black">
                    1M+ viral LinkedIn posts
                  </span>{" "}
                  to crack the engagement code
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-emerald-500 rounded-full p-1 mt-1">
                  <CheckCircle2 className="h-3 w-3 text-white" />
                </div>
                <p className="font-semibold">
                  You'll create scroll-stopping content in{" "}
                  <span className="text-blue-600 font-black">
                    60 seconds or less
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Final message */}
          <div className="text-center">
            <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed">
              Get ready to become the LinkedIn influencer you've always wanted
              to be.
              <span className="text-purple-600 font-bold block mt-2">
                The wait will be worth every second! 🚀
              </span>
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="p-4 sm:p-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-sm"></div>
                <Zap className="h-8 w-8 text-white relative" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-pointer">
                SocialNext
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-white/80 text-sm">
              <Timer className="h-4 w-4 animate-spin" />
              <span>Limited Time</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold mb-6 sm:mb-8 animate-pulse hover:animate-bounce transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 animate-spin relative z-10" />
            <span className="relative z-10">
              ⚡ LIMITED: Only 53 Spots Left
            </span>
          </div>

          {/* Problem Statement */}
          <div className="mb-8 sm:mb-12">
            <Title
              size="xl"
              className="mb-4 sm:mb-6 text-white leading-tight px-4"
            >
              Tired of LinkedIn Posts That Get
              <br />
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse font-black text-4xl sm:text-6xl lg:text-7xl">
                {" "}
                Zero Engagement?
              </span>
            </Title>

            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6 sm:mb-8 rounded-full animate-pulse"></div>
          </div>

          <Subtitle
            size="lg"
            className="mb-8 sm:mb-12 text-gray-300 max-w-4xl mx-auto px-4 text-lg sm:text-xl leading-relaxed"
          >
            You spend <span className="text-red-400 font-bold">hours</span>{" "}
            crafting the <b>"perfect"</b> LinkedIn post, hit publish, and...
            <span className="text-red-400 font-bold animate-pulse">
              {" "}
              nothing happens
            </span>
            . While others get{" "}
            <span className="text-green-400 font-bold">thousands</span> of{" "}
            <i>likes</i> and <i>comments</i> with seemingly effortless content.
          </Subtitle>

          {/* Pain Points */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            <Card className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-red-500/30 hover:border-red-400 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in text-left group">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl sm:text-3xl group-hover:animate-bounce">
                  😤
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Hours Wasted
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Spending{" "}
                <span className="text-red-400 font-semibold">2-3 hours</span> on
                a single post that gets{" "}
                <span className="text-red-400 font-semibold">5 likes</span> from
                your mom and coworkers.
              </p>
            </Card>

            <Card className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-red-500/30 hover:border-red-400 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in text-left group">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl sm:text-3xl group-hover:animate-bounce">
                  📉
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Invisible Content
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Your expertise buried in LinkedIn's algorithm,{" "}
                <span className="text-red-400 font-semibold">
                  never reaching
                </span>{" "}
                your ideal audience.
              </p>
            </Card>

            <Card className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-red-500/30 hover:border-red-400 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in text-left group sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl sm:text-3xl group-hover:animate-bounce">
                  🎯
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Missed Opportunities
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Watching competitors get{" "}
                <span className="text-green-400 font-semibold">
                  clients, partnerships, and opportunities
                </span>{" "}
                from their viral content.
              </p>
            </Card>
          </div>

          {/* Solution Promise */}
          <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl mb-8 sm:mb-12 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-fade-in border border-white/20 relative overflow-hidden mx-4">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <Title
                  size="lg"
                  className="mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-black text-2xl sm:text-4xl lg:text-5xl leading-tight"
                >
                  What If You Could Create Viral LinkedIn Carousels in 60
                  Seconds?
                </Title>

                <div className="flex justify-center mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#00b23e] text-[#00b23e]"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>

                <Subtitle className="mb-6 text-gray-700 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
                  Our AI analyzes{" "}
                  <span className="font-bold text-purple-600">
                    1M+ viral LinkedIn posts
                  </span>{" "}
                  to create scroll-stopping carousels that{" "}
                  <span className="font-bold text-green-600">
                    guarantee engagement
                  </span>{" "}
                  and build your personal brand automatically.
                </Subtitle>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-green-200 hover:border-green-300 group">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0 animate-pulse group-hover:animate-spin" />
                  <div>
                    <p className="font-bold text-gray-900 text-base sm:text-lg">
                      10x More Engagement
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                      Guaranteed or money back
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-blue-200 hover:border-blue-300 group">
                  <Bolt className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0 animate-pulse group-hover:animate-bounce" />
                  <div>
                    <p className="font-bold text-gray-900 text-base sm:text-lg">
                      60-Second Creation
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                      From idea to published post
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-purple-200 hover:border-purple-300 group sm:col-span-2 lg:col-span-1">
                  <TrendingUp className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0 animate-pulse group-hover:animate-ping" />
                  <div>
                    <p className="font-bold text-gray-900 text-base sm:text-lg">
                      AI-Powered Insights
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                      Based on 1M+ viral posts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 px-4 animate-fade-in">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/20 hover:border-white/40">
              <Users className="h-5 w-5 text-blue-400 animate-pulse" />
              <span className="text-sm sm:text-base text-white font-medium">
                447 professionals waiting
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/20 hover:border-white/40">
              <TrendingUp className="h-5 w-5 text-green-400 animate-pulse" />
              <span className="text-sm sm:text-base text-white font-medium">
                Witness 200% more engagement
              </span>
            </div>
          </div>
        </div>

        {/* CTA Form */}
        <div className="max-w-3xl mx-auto px-4">
          <Card className="p-6 sm:p-8 lg:p-10 animate-fade-in bg-white/95 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>

            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-lg opacity-50 animate-pulse"></div>
                  <Title
                    size="lg"
                    className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent font-black text-2xl sm:text-4xl lg:text-5xl leading-tight animate-pulse"
                  >
                    Get Exclusive Early Access
                  </Title>
                </div>

                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 sm:mb-6 rounded-full animate-bounce"></div>

                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="h-5 w-5 sm:h-5 sm:w-5 text-[#00b23e] animate-pulse opacity-1"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>

              <Subtitle className="mb-6 sm:mb-8 text-center animate-fade-in text-gray-600 text-base sm:text-lg">
                Join the waitlist and be among the first to{" "}
                <span className="font-bold text-purple-600">
                  10x your LinkedIn engagement
                </span>
                .
              </Subtitle>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <TextField
                    type="email"
                    placeholder="Enter your professional email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    size="lg"
                    className="text-center text-base sm:text-lg py-3 sm:py-4 border-2 border-purple-200 focus:border-purple-500 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-base sm:text-lg py-4 sm:py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Securing Your Spot...
                      </div>
                    ) : (
                      <>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Get Early Access Now
                      </>
                    )}
                  </div>
                </Button>
              </form>

              <div className="mt-6 sm:mt-8 space-y-3">
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-1">
                    🔒 We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                    <p className="text-xs sm:text-sm text-green-700 font-bold flex items-center justify-center gap-1">
                      💰 50% Lifetime Discount
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-xs sm:text-sm text-blue-700 font-bold flex items-center justify-center gap-1">
                      ⚡ Priority Access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Urgency Footer */}
        <div className="text-center mt-8 sm:mt-12 animate-fade-in px-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 px-4 sm:px-6 py-3 rounded-full">
            <Timer className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 animate-spin" />
            <p className="text-red-300 font-bold text-sm sm:text-base animate-pulse hover:scale-105 transition-transform duration-300 cursor-pointer">
              ⚠️ Only 53 spots remaining in early access program
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              Be part of the revolution - thousands of professionals are ready
              to dominate LinkedIn with our AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;
