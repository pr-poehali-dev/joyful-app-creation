import { useState } from "react";
import Icon from "@/components/ui/icon";
import ProductCard from "@/components/ProductCard";
import ProductCarousel from "@/components/ProductCarousel";
import GiftCard from "@/components/GiftCard";
import ProductGallery from "@/components/ProductGallery";
import { SplashCursor } from "@/components/ui/splash-cursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PromoTag from "@/components/PromoTag";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("featured");

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "119 990 ₽",
      originalPrice: "129 990 ₽",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      isNew: true,
      giftWrapping: true,
    },
    {
      id: 2,
      name: "AirPods Pro",
      price: "24 990 ₽",
      originalPrice: "29 990 ₽",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
      isNew: false,
      giftWrapping: true,
    },
    {
      id: 3,
      name: "iPad Air",
      price: "64 990 ₽",
      originalPrice: "74 990 ₽",
      image:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop",
      isNew: false,
      giftWrapping: true,
    },
  ];

  const giftCollections = [
    {
      id: 1,
      title: "Для творчества",
      description: "MacBook + iPad + Apple Pencil",
      price: "от 149 990 ₽",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      discount: "15%",
    },
    {
      id: 2,
      title: "Музыкальный набор",
      description: "AirPods Max + HomePod mini",
      price: "от 69 990 ₽",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      discount: "20%",
    },
  ];

  const promoOffers = [
    { text: "Скидки до 30%", color: "red" },
    { text: "Бесплатная упаковка", color: "green" },
    { text: "Доставка 31 декабря", color: "blue" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
      <SplashCursor />
      <Navigation />

      <main className="pt-20 pb-8">
        <HeroSection />

        {/* Promo Tags */}
        <section className="px-6 py-4">
          <div className="flex justify-center gap-4 flex-wrap max-w-4xl mx-auto">
            {promoOffers.map((promo, index) => (
              <PromoTag key={index} text={promo.text} color={promo.color} />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            🎁 Лучшие подарки к Новому году
          </h2>
          <div className="max-w-6xl mx-auto">
            <ProductCarousel products={featuredProducts} />
          </div>
        </section>

        {/* Gift Collections */}
        <section className="px-6 py-12 bg-white/50">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            ✨ Готовые подарочные наборы
          </h2>
          <div className="max-w-6xl mx-auto">
            <ProductCarousel
              products={giftCollections.map((collection) => ({
                id: collection.id,
                name: collection.title,
                price: collection.price,
                originalPrice: "",
                image: collection.image,
                isNew: false,
                giftWrapping: true,
                description: collection.description,
                discount: collection.discount,
              }))}
            />
          </div>
        </section>

        {/* Product Gallery */}
        <section className="px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            🎄 Новогоднее вдохновение от Apple
          </h2>
          <ProductGallery />
        </section>
      </main>
    </div>
  );
};

export default Index;
