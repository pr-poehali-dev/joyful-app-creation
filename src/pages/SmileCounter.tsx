import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface Smile {
  id: number;
  x: number;
  y: number;
  emoji: string;
  speed: number;
}

const SmileCounter = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [smiles, setSmiles] = useState<Smile[]>([]);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const smileEmojis = ["😊", "😄", "😃", "🙂", "😁", "😆", "🤗", "😋"];

  const createSmile = useCallback(() => {
    const newSmile: Smile = {
      id: Date.now() + Math.random(),
      x: Math.random() * (window.innerWidth - 80),
      y: -60,
      emoji: smileEmojis[Math.floor(Math.random() * smileEmojis.length)],
      speed: 1.5 + Math.random() * 2.5,
    };
    return newSmile;
  }, []);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(30);
    setSmiles([]);
  };

  const catchSmile = (smileId: number) => {
    setSmiles((prev) => prev.filter((smile) => smile.id !== smileId));
    setScore((prev) => prev + 5);
  };

  // Игровой цикл
  useEffect(() => {
    if (!gameActive) return;

    const gameTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const spawnInterval = setInterval(() => {
      setSmiles((prev) => [...prev, createSmile()]);
    }, 800);

    const moveInterval = setInterval(() => {
      setSmiles((prev) =>
        prev
          .map((smile) => ({
            ...smile,
            y: smile.y + smile.speed,
          }))
          .filter((smile) => smile.y < window.innerHeight),
      );
    }, 16);

    return () => {
      clearInterval(gameTimer);
      clearInterval(spawnInterval);
      clearInterval(moveInterval);
    };
  }, [gameActive, createSmile]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 relative overflow-hidden">
      {/* Кнопка назад */}
      <button
        onClick={() => navigate("/games")}
        className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
      >
        <Icon name="ArrowLeft" size={20} />
        Назад
      </button>

      {/* Заголовок и счет */}
      <div className="absolute top-6 right-6 z-20 bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-2">
          Счетчик улыбок 😄
        </h2>
        <div className="flex gap-4 text-lg font-semibold">
          <div className="text-yellow-600">Счет: {score}</div>
          <div className="text-red-600">Время: {timeLeft}с</div>
        </div>
      </div>

      {/* Падающие смайлики */}
      {smiles.map((smile) => (
        <div
          key={smile.id}
          onClick={() => catchSmile(smile.id)}
          className="absolute text-5xl cursor-pointer hover:scale-110 transition-transform duration-100 animate-pulse"
          style={{
            left: `${smile.x}px`,
            top: `${smile.y}px`,
          }}
        >
          {smile.emoji}
        </div>
      ))}

      {/* Стартовый экран */}
      {!gameActive && timeLeft === 30 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-sm z-10">
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="text-6xl mb-4">😄</div>
            <h1 className="text-4xl font-bold text-orange-600 mb-4">
              Счетчик улыбок
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Лови падающие смайлики и собирай очки!
            </p>
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-2xl text-xl font-bold hover-scale shadow-lg"
            >
              Начать игру 🎮
            </button>
          </div>
        </div>
      )}

      {/* Экран окончания игры */}
      {!gameActive && timeLeft === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-sm z-10">
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-4xl font-bold text-orange-600 mb-4">
              Игра окончена!
            </h2>
            <p className="text-2xl text-gray-700 mb-2">Твой результат:</p>
            <p className="text-4xl font-bold text-yellow-600 mb-6">
              {score} очков
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-2xl font-bold hover-scale"
              >
                Играть снова 🔄
              </button>
              <button
                onClick={() => navigate("/games")}
                className="bg-gray-500 text-white px-6 py-3 rounded-2xl font-bold hover-scale"
              >
                К играм 🎮
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmileCounter;
