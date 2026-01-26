'use client';

import { useState } from 'react';
import { products, categories, Category } from '@/lib/data';
import { ProductCard } from '@/app/components/ProductCard';
import { HeroCarousel } from '@/app/components/HeroCarousel';

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Carousel Banner */}
        <HeroCarousel />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-[#D94436] mb-4">
            Sacred Devotional Items
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover authentic spiritual products blessed with the grace of Maa Tara
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-[#D94436] text-white'
                  : 'bg-white text-gray-700 hover:bg-[#F29F05] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
