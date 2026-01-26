'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image?: string;
  gradient: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: 'GIFT ITEMS & PENDANTS',
    subtitle: 'UPTO',
    discount: '50% OFF',
    description: 'Exclusive collection of blessed devotional items and sacred pendants',
    buttonText: 'SHOP NOW',
    buttonLink: '/',
    gradient: 'from-[#D94436] via-[#F29F05] to-[#B8860B]',
  },
  {
    id: 2,
    title: 'SACRED IDOLS & MURTIS',
    subtitle: 'UPTO',
    discount: '40% OFF',
    description: 'Handcrafted brass idols and divine statues blessed by Maa Tara',
    buttonText: 'EXPLORE',
    buttonLink: '/',
    gradient: 'from-[#B8860B] via-[#D94436] to-[#F29F05]',
  },
  {
    id: 3,
    title: 'POOJA SAMAGRI',
    subtitle: 'UPTO',
    discount: '35% OFF',
    description: 'Complete your spiritual rituals with authentic pooja essentials',
    buttonText: 'BUY NOW',
    buttonLink: '/',
    gradient: 'from-[#F29F05] via-[#B8860B] to-[#D94436]',
  },
  {
    id: 4,
    title: 'FESTIVAL COLLECTION',
    subtitle: 'SPECIAL',
    discount: 'DEALS',
    description: 'Celebrate festivals with our blessed collection of devotional items',
    buttonText: 'DISCOVER',
    buttonLink: '/',
    gradient: 'from-[#D94436] via-[#B8860B] to-[#F29F05]',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl mb-8 group">
      {/* Carousel Slides */}
      <div className="relative w-full h-full">
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className={`w-full h-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url('/images/Om_symbol.svg.webp')`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: '200px 200px',
                }}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Text Content */}
                  <div className="text-white space-y-6 animate-fade-in">
                    <div>
                      <p className="text-lg md:text-xl font-medium mb-2 opacity-90">
                        {slide.subtitle}
                      </p>
                      <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        {slide.discount}
                      </h2>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        {slide.title}
                      </h3>
                      <p className="text-lg md:text-xl opacity-90 max-w-md">
                        {slide.description}
                      </p>
                    </div>
                    <Link
                      to={slide.buttonLink}
                      className="inline-block bg-white text-[#D94436] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>

                  {/* Image/Visual Content */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-full max-w-md space-y-4">
                      {/* Decorative Elements */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30">
                          <div className="text-4xl mb-2">🕉️</div>
                          <p className="text-white text-sm font-medium">Blessed Items</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30">
                          <div className="text-4xl mb-2">✨</div>
                          <p className="text-white text-sm font-medium">Divine Grace</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#D94436] p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#D94436] p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
          <div
            key={currentSlide}
            className="h-full bg-white"
            style={{
              width: '0%',
              animation: 'progress 5s linear forwards',
            }}
          />
        </div>
      )}
    </div>
  );
}
