interface GameCardProps {
  game: {
    id: number;
    title: string;
    icon: string;
    color: string;
  };
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div
      className={`bg-gradient-to-br ${game.color} rounded-2xl p-6 text-white shadow-xl hover-scale cursor-pointer transition-all duration-300 group`}
    >
      <div className="text-center">
        <div className="text-4xl mb-3 group-hover:animate-pulse">
          {game.icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{game.title}</h3>
        <p className="text-white/90 text-sm mb-4">
          Играй и поднимай настроение!
        </p>
        <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 font-medium">
          Играть ▶️
        </button>
      </div>
    </div>
  );
};

export default GameCard;
