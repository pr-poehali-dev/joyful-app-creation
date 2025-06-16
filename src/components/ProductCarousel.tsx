import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Icon from "@/components/ui/icon";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  isNew: boolean;
  giftWrapping: boolean;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex-none w-[280px] md:w-[320px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors duration-200"
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
