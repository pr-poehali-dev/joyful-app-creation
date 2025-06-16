const ProductGallery = () => {
  const holidayProducts = [
    {
      src: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=300&fit=crop",
      alt: "iPhone в новогодней упаковке",
      title: "iPhone 15 Pro",
    },
    {
      src: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop",
      alt: "MacBook под ёлкой",
      title: "MacBook Pro",
    },
    {
      src: "https://images.unsplash.com/photo-1544337874-12e0827b202d?w=400&h=300&fit=crop",
      alt: "AirPods как подарок",
      title: "AirPods Pro",
    },
    {
      src: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
      alt: "iPad для творчества",
      title: "iPad Air",
    },
    {
      src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      alt: "Apple Watch",
      title: "Apple Watch",
    },
    {
      src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
      alt: "Новогодняя атмосфера",
      title: "Аксессуары",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Inspirational Quote */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-8 shadow-xl">
        <div className="text-6xl mb-4">🎁</div>
        <blockquote className="text-xl md:text-2xl font-medium">
          "Лучшие подарки создают воспоминания на всю жизнь"
        </blockquote>
        <p className="text-blue-200 mt-2">— Apple Store</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {holidayProducts.map((product, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
          >
            <img
              src={product.src}
              alt={product.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-white/80">Идеальный подарок</p>
              </div>
            </div>

            {/* Holiday Icon */}
            <div className="absolute top-3 right-3 text-2xl opacity-80">
              {index % 3 === 0 ? "🎄" : index % 3 === 1 ? "❄️" : "⭐"}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Готовы выбрать идеальный подарок? 🎯
        </h3>
        <p className="text-gray-600 mb-6">
          Наши эксперты помогут подобрать технику Apple для ваших близких
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg">
            Получить консультацию 💬
          </button>
          <button className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200">
            Каталог подарков 📱
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
