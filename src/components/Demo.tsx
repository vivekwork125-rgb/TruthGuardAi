import { useState, useRef, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const Demo = () => {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (window.location.hash === "#demo") {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 300);
    }
  }, []);

  const sampleTexts = [
    "Scientists discover new planet made entirely of diamonds orbiting nearby star",
    "Local community raises funds for new children's hospital wing",
    "BREAKING: Government announces mandatory microchip implants for all citizens by 2025",
  ];

  const handleAnalyze = () => {
    if (!inputText.trim()) return;

    setIsAnalyzing(true);

    // Round 1: analysis intentionally disabled
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 800);
  };

  return (
    <section id="demo" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-glow opacity-30" />

      <div className="container-narrow relative z-10">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Search className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Try It Now
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Analyze Any <span className="gradient-text">News Content</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Paste a news headline, article excerpt, or URL below to explore
            the analysis workflow.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass-card p-6 md:p-8 glow-effect">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">
                Enter news text or URL
              </label>
              <textarea
                ref={textareaRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste a news headline, article text, or URL here..."
                className="w-full h-32 px-4 py-3 bg-secondary/50 border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="mb-6">
              <p className="text-xs text-muted-foreground mb-2">
                Try a sample:
              </p>
              <div className="flex flex-wrap gap-2">
                {sampleTexts.map((text, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(text)}
                    className="text-xs px-3 py-1.5 bg-secondary/80 hover:bg-secondary rounded-full border border-border/50 truncate max-w-[200px]"
                  >
                    {text.slice(0, 40)}...
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleAnalyze}
              disabled={!inputText.trim() || isAnalyzing}
              variant="hero"
              size="lg"
              className="w-full"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  Check Credibility
                </>
              )}
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Analysis output will be enabled in later phases.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Demo;