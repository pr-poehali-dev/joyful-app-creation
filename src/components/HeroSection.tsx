const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with holiday pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px] opacity-20"></div>
      </div>

      <div className="relative z-10 text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Holiday Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span>🎄</span>
            <span>Новогодняя распродажа</span>
            <span>🎁</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            Подарки от{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Apple
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in max-w-2xl mx-auto">
            Сделайте этот Новый год незабываемым с технологиями, которые
            вдохновляют
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover-scale transition-all duration-200 shadow-xl">
              Смотреть подарки 🎁
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200">
              Готовые наборы ✨
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-12 text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold">30%</div>
              <div className="text-sm">Скидки</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm">Радости</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce">❄️</div>
      <div className="absolute top-40 right-10 text-3xl animate-pulse">⭐</div>
      <div className="absolute bottom-20 left-20 text-2xl animate-bounce delay-300">
        🎄
      </div>
      <div className="absolute bottom-32 right-16 text-3xl animate-pulse delay-500">
        ✨
      </div>
    </section>
  );
};

export default HeroSection;
