import Navigation from "@/components/Navigation";
import AchievementBadge from "@/components/AchievementBadge";

const Achievements = () => {
  const achievements = [
    { id: 1, title: "Утренняя улыбка", icon: "🌅", unlocked: true },
    { id: 2, title: "Добрый поступок", icon: "💝", unlocked: false },
    { id: 3, title: "Позитивная мысль", icon: "🌟", unlocked: true },
    { id: 4, title: "Помощь другу", icon: "🤝", unlocked: true },
    { id: 5, title: "Творческий день", icon: "🎨", unlocked: false },
    { id: 6, title: "Спортивная активность", icon: "🏃‍♀️", unlocked: true },
    { id: 7, title: "Благодарность", icon: "🙏", unlocked: false },
    { id: 8, title: "Музыкальное открытие", icon: "🎵", unlocked: true },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const progressPercent = (unlockedCount / achievements.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Navigation />

      <main className="pt-24 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Твои достижения 🏆
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {unlockedCount} из {achievements.length} достижений получено
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-100 max-w-md mx-auto">
              <div className="text-lg font-bold text-gray-800 mb-2">
                Общий прогресс
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-600">
                {Math.round(progressPercent)}% выполнено
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Achievements;
