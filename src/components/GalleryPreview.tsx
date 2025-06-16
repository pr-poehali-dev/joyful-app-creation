const GalleryPreview = () => {
  const inspirationalQuotes = [
    "Счастье — это выбор, который ты делаешь каждый день ☀️",
    "Улыбка — самый красивый аксессуар 😊",
    "Каждый день полон новых возможностей ✨",
  ];

  const previewImages = [
    {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=300&fit=crop",
      alt: "Радуга",
    },
    {
      src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=300&h=300&fit=crop",
      alt: "Собачка",
    },
    {
      src: "https://images.unsplash.com/photo-1564694202779-bc908c327862?w=300&h=300&fit=crop",
      alt: "Цветы",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Quote Section */}
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-8 text-white text-center mb-6 shadow-xl">
        <div className="text-6xl mb-4">💝</div>
        <blockquote className="text-xl font-medium italic">
          "{inspirationalQuotes[0]}"
        </blockquote>
      </div>

      {/* Preview Images */}
      <div className="grid grid-cols-3 gap-4">
        {previewImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square rounded-xl overflow-hidden shadow-lg hover-scale transition-all duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover-scale transition-all duration-200 shadow-lg">
          Посмотреть всю галерею 🖼️
        </button>
      </div>
    </div>
  );
};

export default GalleryPreview;
