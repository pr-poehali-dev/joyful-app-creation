import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface RainbowDrop {
  id: number;
  x: number;
  y: number;
  color: string;
  speed: number;
}

const RainbowGame = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [rainbowDrops, setRainbowDrops] = useState<RainbowDrop[]>([]);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const rainbowColors = [
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-purple-400",
  ];

  const createRainbowDrop = useCallback(() => {
    const newDrop: RainbowDrop = {
      id: Date.now() + Math.random(),
      x: Math.random() * (window.innerWidth - 100),
      y: -50,
      color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)],
      speed: 2 + Math.random() * 3,
    };
    return newDrop;
  }, []);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(30);
    setRainbowDrops([]);
  };

  const catchRainbow = (dropId: number) => {
    setRainbowDrops((prev) => prev.filter((drop) => drop.id !== dropId));
    setScore((prev) => prev + 10);
  };

  useEffect(() => {
    if (!gameActive) return;

    const gameInterval = setInterval(() => {
      // Создаём новые капли
      if (Math.random() < 0.3) {
        setRainbowDrops((prev) => [...prev, createRainbowDrop()]);
      }

      // Двигаем капли
      setRainbowDrops((prev) =>
        prev
          .map((drop) => ({
            ...drop,
            y: drop.y + drop.speed,
          }))
          .filter((drop) => drop.y < window.innerHeight),
      );
    }, 100);

    return () => clearInterval(gameInterval);
  }, [gameActive, createRainbowDrop]);

  useEffect(() => {
    if (!gameActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-purple-200 to-pink-200 relative overflow-hidden">
      {/* Шапка */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-sm p-4 flex justify-between items-center">
        <button
          onClick={() => navigate("/games")}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
        >
          <Icon name="ArrowLeft" size={20} />
          Назад к играм
        </button>

        <div className="flex gap-6">
          <div className="text-center">
            <div className="text-sm text-gray-600">Счёт</div>
            <div className="text-2xl font-bold text-purple-600">{score}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Время</div>
            <div className="text-2xl font-bold text-purple-600">
              {timeLeft}с
            </div>
          </div>
        </div>
      </div>

      {/* Игровое поле */}
      <div className="pt-20 h-screen relative">
        {/* Падающие радужные капли */}
        {rainbowDrops.map((drop) => (
          <div
            key={drop.id}
            onClick={() => catchRainbow(drop.id)}
            className={`absolute w-8 h-8 ${drop.color} rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg animate-pulse`}
            style={{
              left: `${drop.x}px`,
              top: `${drop.y}px`,
            }}
          >
            🌈
          </div>
        ))}

        {/* Стартовое меню */}
        {!gameActive && timeLeft === 30 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 text-center shadow-2xl">
              <div className="text-6xl mb-4">🌈</div>
              <h2 className="text-3xl font-bold mb-4 text-purple-600">
                Поймай радугу!
              </h2>
              <p className="text-gray-600 mb-6">
                Лови падающие радужные капли и набирай очки!
              </p>
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-200"
              >
                Начать игру ✨
              </button>
            </div>
          </div>
        )}

        {/* Финальный экран */}
        {!gameActive && timeLeft === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 text-center shadow-2xl">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold mb-4 text-purple-600">
                Игра окончена!
              </h2>
              <div className="text-5xl font-bold text-purple-600 mb-4">
                {score} очков
              </div>
              <p className="text-gray-600 mb-6">
                {score >= 100
                  ? "Невероятно!"
                  : score >= 50
                    ? "Отлично!"
                    : "Попробуй ещё раз!"}
              </p>
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-200 mr-4"
              >
                Играть снова 🌈
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RainbowGame;
