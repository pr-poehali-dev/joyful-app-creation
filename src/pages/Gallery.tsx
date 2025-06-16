import Navigation from "@/components/Navigation";

const Gallery = () => {
  const quotes = [
    "Счастье — это выбор, который ты делаешь каждый день ☀️",
    "Улыбка — самый красивый аксессуар 😊",
    "Каждый день полон новых возможностей ✨",
    "Доброта делает мир ярче 🌟",
    "Ты способен на большее, чем думаешь 💪",
    "Благодарность превращает то, что у нас есть, в достаточное 🙏",
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop",
      alt: "Радуга",
      category: "природа",
    },
    {
      src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=400&fit=crop",
      alt: "Собачка",
      category: "животные",
    },
    {
      src: "https://images.unsplash.com/photo-1564694202779-bc908c327862?w=400&h=400&fit=crop",
      alt: "Цветы",
      category: "природа",
    },
    {
      src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
      alt: "Котик",
      category: "животные",
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      alt: "Закат",
      category: "природа",
    },
    {
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
      alt: "Щенок",
      category: "животные",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Navigation />

      <main className="pt-24 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Галерея вдохновения 🖼️
            </h1>
            <p className="text-xl text-gray-600">
              Милые картинки и мотивирующие цитаты для души
            </p>
          </div>

          {/* Inspirational Quotes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Цитаты для вдохновения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-6 text-white shadow-xl hover-scale transition-all duration-300"
                >
                  <blockquote className="text-lg font-medium italic text-center">
                    "{quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Милые картинки
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-xl hover-scale transition-all duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">{image.alt}</p>
                      <p className="text-sm opacity-80">#{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
