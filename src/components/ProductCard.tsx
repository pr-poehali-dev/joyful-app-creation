import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  isNew: boolean;
  giftWrapping: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale group">
      {/* Product Image */}
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isNew && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Новинка
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Скидка
            </span>
          )}
        </div>

        {/* Gift Wrapping Icon */}
        {product.giftWrapping && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full">
            <span className="text-lg">🎁</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>

        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl font-bold text-blue-600">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2">
            <Icon name="ShoppingCart" size={16} />
            Купить
          </button>
          <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Icon name="Heart" size={16} />
          </button>
        </div>

        {/* Gift Wrapping Option */}
        {product.giftWrapping && (
          <p className="text-sm text-gray-600 mt-3 flex items-center justify-center gap-1">
            <span>🎁</span>
            Бесплатная подарочная упаковка
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
