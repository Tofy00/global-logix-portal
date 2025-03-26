
import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade" | "right" | "zoom" | "float";
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = "fade",
  delay = 0,
  threshold = 0.1,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return "";

    switch (variant) {
      case "fade":
        return "animate-fade-in-up";
      case "right":
        return "animate-fade-in-right";
      case "zoom":
        return "animate-zoom-in";
      case "float":
        return "animate-float";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} opacity-0 ${getAnimationClass()}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards" 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
