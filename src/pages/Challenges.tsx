import Navigation from "@/components/Navigation";
import ChallengeCard from "@/components/ChallengeCard";

const Challenges = () => {
  const challenges = [
    { title: "Сделай 3 комплимента", progress: 1, total: 3, icon: "💬" },
    { title: "Помоги незнакомцу", progress: 0, total: 1, icon: "🤝" },
    {
      title: "Найди 5 причин для благодарности",
      progress: 3,
      total: 5,
      icon: "🙏",
    },
  ];

  const weeklyChallenge = {
    title: "Неделя позитива",
    description: "Каждый день находи что-то хорошее и записывай",
    progress: 4,
    total: 7,
    icon: "📝",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Navigation />

      <main className="pt-24 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ежедневные вызовы 🎯
            </h1>
            <p className="text-xl text-gray-600">
              Маленькие шаги к большому счастью
            </p>
          </div>

          {/* Weekly Challenge */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Вызов недели
            </h2>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{weeklyChallenge.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">
                    {weeklyChallenge.title}
                  </h3>
                  <p className="text-indigo-100">
                    {weeklyChallenge.description}
                  </p>
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4 mb-4">
                <div
                  className="bg-white h-4 rounded-full transition-all duration-500"
                  style={{
                    width: `${(weeklyChallenge.progress / weeklyChallenge.total) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-lg font-medium">
                {weeklyChallenge.progress} из {weeklyChallenge.total} дней
              </p>
            </div>
          </div>

          {/* Daily Challenges */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Сегодняшние вызовы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <ChallengeCard key={index} challenge={challenge} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Challenges;
