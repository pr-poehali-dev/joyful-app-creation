interface GiftCollection {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  discount: string;
}

interface GiftCardProps {
  collection: GiftCollection;
}

const GiftCard = ({ collection }: GiftCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale group">
      {/* Collection Image */}
      <div className="relative h-48">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{collection.discount}
          </span>
        </div>

        {/* Holiday Decoration */}
        <div className="absolute top-4 right-4 text-2xl animate-pulse">🎄</div>
      </div>

      {/* Collection Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {collection.title}
        </h3>

        <p className="text-gray-600 mb-4">{collection.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">
            {collection.price}
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>🎁</span>
            <span>Готов к дарению</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg">
          Выбрать набор ✨
        </button>

        {/* Features */}
        <div className="mt-4 text-sm text-gray-600 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Бесплатная доставка</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Подарочная упаковка</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Персональная гравировка</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
