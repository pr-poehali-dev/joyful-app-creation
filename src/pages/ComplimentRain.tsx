import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface Compliment {
  id: number;
  text: string;
  x: number;
  y: number;
  speed: number;
  caught: boolean;
}

const ComplimentRain = () => {
  const navigate = useNavigate();
  const [compliments, setCompliments] = useState<Compliment[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const complimentTexts = [
    "Ты прекрасен!",
    "Ты умница!",
    "Ты особенный!",
    "Ты талантлив!",
    "Ты сияешь!",
    "Ты вдохновляешь!",
    "Ты удивительный!",
    "Ты милый!",
    "Ты добрый!",
    "Ты креативный!",
    "Ты сильный!",
    "Ты мудрый!",
    "Ты щедрый!",
    "Ты искренний!",
    "Ты магический!",
  ];

  const createCompliment = useCallback(() => {
    const newCompliment: Compliment = {
      id: Date.now() + Math.random(),
      text: complimentTexts[Math.floor(Math.random() * complimentTexts.length)],
      x: Math.random() * (window.innerWidth - 200),
      y: -50,
      speed: 1 + Math.random() * 2,
      caught: false,
    };
    return newCompliment;
  }, []);

  const startGame = () => {
    setGameActive(true);
    setGameOver(false);
    setScore(0);
    setTimeLeft(60);
    setCompliments([]);
  };

  const endGame = () => {
    setGameActive(false);
    setGameOver(true);
    setCompliments([]);
  };

  const catchCompliment = (id: number) => {
    setCompliments((prev) =>
      prev.map((comp) => (comp.id === id ? { ...comp, caught: true } : comp)),
    );
    setScore((prev) => prev + 10);

    setTimeout(() => {
      setCompliments((prev) => prev.filter((comp) => comp.id !== id));
    }, 300);
  };

  useEffect(() => {
    if (!gameActive) return;

    const gameTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(gameTimer);
  }, [gameActive]);

  useEffect(() => {
    if (!gameActive) return;

    const spawnTimer = setInterval(() => {
      setCompliments((prev) => [...prev, createCompliment()]);
    }, 1500);

    return () => clearInterval(spawnTimer);
  }, [gameActive, createCompliment]);

  useEffect(() => {
    if (!gameActive) return;

    const moveTimer = setInterval(() => {
      setCompliments((prev) =>
        prev
          .map((comp) => ({ ...comp, y: comp.y + comp.speed }))
          .filter((comp) => comp.y < window.innerHeight + 50),
      );
    }, 16);

    return () => clearInterval(moveTimer);
  }, [gameActive]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10" />

      <div className="relative z-10 p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate("/games")}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад
          </button>

          <div className="flex items-center gap-6 text-white text-lg font-bold">
            <div className="flex items-center gap-2">
              <Icon name="Star" size={24} />
              <span>{score}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={24} />
              <span>{timeLeft}с</span>
            </div>
          </div>
        </div>

        {!gameActive && !gameOver && (
          <div className="text-center text-white mt-20">
            <div className="text-6xl mb-4">✨</div>
            <h1 className="text-4xl font-bold mb-4">Дождь комплиментов</h1>
            <p className="text-xl mb-8 text-white/90">
              Собирай падающие комплименты и поднимай настроение!
            </p>
            <button
              onClick={startGame}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-white/30 transition-all duration-200 hover-scale"
            >
              Начать игру ▶️
            </button>
          </div>
        )}

        {gameOver && (
          <div className="text-center text-white mt-20">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-4">Игра окончена!</h2>
            <p className="text-xl mb-2">Твой счёт: {score} очков</p>
            <p className="text-lg mb-8 text-white/90">
              {score >= 200
                ? "Потрясающий результат!"
                : score >= 100
                  ? "Отличная работа!"
                  : "Попробуй ещё раз!"}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={startGame}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all duration-200"
              >
                Играть снова
              </button>
              <button
                onClick={() => navigate("/games")}
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-all duration-200"
              >
                Другие игры
              </button>
            </div>
          </div>
        )}

        {compliments.map((compliment) => (
          <div
            key={compliment.id}
            className={`absolute cursor-pointer transition-all duration-300 ${
              compliment.caught ? "scale-125 opacity-0" : "hover:scale-110"
            }`}
            style={{
              left: compliment.x,
              top: compliment.y,
              transform: compliment.caught ? "scale(1.5)" : "scale(1)",
            }}
            onClick={() => !compliment.caught && catchCompliment(compliment.id)}
          >
            <div className="bg-white/90 backdrop-blur-sm text-purple-800 px-4 py-2 rounded-full shadow-lg font-bold text-sm whitespace-nowrap border-2 border-purple-200">
              {compliment.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplimentRain;
