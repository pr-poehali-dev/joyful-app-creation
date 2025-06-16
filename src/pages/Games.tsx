import Navigation from "@/components/Navigation";
import GameCard from "@/components/GameCard";

const Games = () => {
  const games = [
    {
      id: 1,
      title: "Поймай радугу",
      icon: "🌈",
      color: "from-pink-400 to-purple-500",
    },
    {
      id: 2,
      title: "Счётчик улыбок",
      icon: "😄",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 3,
      title: "Дождь комплиментов",
      icon: "✨",
      color: "from-green-400 to-blue-500",
    },
    {
      id: 4,
      title: "Музыкальное настроение",
      icon: "🎵",
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: 5,
      title: "Котиковая медитация",
      icon: "🐱",
      color: "from-orange-400 to-red-500",
    },
    {
      id: 6,
      title: "Танцы радости",
      icon: "💃",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Navigation />

      <main className="pt-24 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Игры для радости 🎮
            </h1>
            <p className="text-xl text-gray-600">
              Выбери игру и подними себе настроение!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Games;
