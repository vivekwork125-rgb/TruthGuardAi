import { useState } from "react";
import { ArrowRight, Play, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [newsText, setNewsText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleVerify = () => {
    if (!newsText.trim()) return;

    setLoading(true);
    setShowResult(false);

    // Simulate AI analysis (mock)
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-radial-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Floating Elements */}
      <div className="absolute top-1/3 left-[15%] animate-float opacity-20">
        <div className="w-20 h-20 rounded-2xl bg-primary/30 backdrop-blur-sm border border-primary/20" />
      </div>
      <div
        className="absolute top-1/2 right-[10%] animate-float opacity-20"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-16 h-16 rounded-full bg-accent/30 backdrop-blur-sm border border-accent/20" />
      </div>
      <div
        className="absolute bottom-1/3 left-[20%] animate-float opacity-20"
        style={{ animationDelay: "4s" }}
      >
        <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/10" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 backdrop-blur-sm mb-8 animate-fade-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Assisted News Verification
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up">
            Helping You Distinguish{" "}
            <span className="gradient-text">Truth</span>
            <br />
            From Misinformation
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up">
            Analyze news credibility using AI-assisted techniques.
            Receive credibility indicators and explanatory insights to support informed judgment.
          </p>

          {/* Input */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-up">
            <input
              type="text"
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
              placeholder="Paste a news headline or article link to check credibility..."
              className="w-full px-5 py-4 rounded-xl border border-border/50 bg-background/80 backdrop-blur-sm text-base focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <p className="mt-2 text-sm text-muted-foreground">
              Example: “Breaking: Scientists discover miracle cure…”
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={handleVerify}
              disabled={loading}
            >
              <Shield className="h-5 w-5" />
              {loading ? "Analyzing..." : "Verify News Credibility"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button asChild variant="heroOutline" size="xl" className="group">
              <Link to="/how-it-works">
                <Play className="h-4 w-4" />
                How It Works
              </Link>
            </Button>
          </div>

          {/* Result Section */}
          {showResult && (
            <div className="mt-20 max-w-3xl mx-auto animate-fade-up">
              <div className="rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Credibility Analysis Result
                </h2>

                <div className="text-5xl font-bold text-green-500 mb-4">
                  72%
                </div>

                <p className="text-lg font-medium mb-2">
                  Likely Reliable
                </p>

                <p className="text-muted-foreground">
                  The content appears mostly factual with neutral language patterns.
                  Users are encouraged to cross-check with trusted sources.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
