interface Challenge {
  title: string;
  progress: number;
  total: number;
  icon: string;
}

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const progressPercent = (challenge.progress / challenge.total) * 100;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-100">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-3xl">{challenge.icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">{challenge.title}</h3>
          <p className="text-sm text-gray-600">
            {challenge.progress} из {challenge.total} выполнено
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover-scale transition-all duration-200">
        Продолжить вызов 🚀
      </button>
    </div>
  );
};

export default ChallengeCard;
