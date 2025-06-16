interface Achievement {
  id: number;
  title: string;
  icon: string;
  unlocked: boolean;
}

interface AchievementBadgeProps {
  achievement: Achievement;
}

const AchievementBadge = ({ achievement }: AchievementBadgeProps) => {
  return (
    <div
      className={`p-4 rounded-xl transition-all duration-300 hover-scale ${
        achievement.unlocked
          ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg animate-pulse"
          : "bg-gray-100 text-gray-400"
      }`}
    >
      <div className="text-center">
        <div
          className={`text-2xl mb-2 ${achievement.unlocked ? "animate-bounce" : ""}`}
        >
          {achievement.unlocked ? achievement.icon : "🔒"}
        </div>
        <p
          className={`text-xs font-medium ${
            achievement.unlocked ? "text-white" : "text-gray-500"
          }`}
        >
          {achievement.title}
        </p>
      </div>
    </div>
  );
};

export default AchievementBadge;
