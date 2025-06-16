import { useState } from "react";
import { SplashCursor } from "@/components/ui/splash-cursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GameCard from "@/components/GameCard";
import AchievementBadge from "@/components/AchievementBadge";
import ChallengeCard from "@/components/ChallengeCard";
import GalleryPreview from "@/components/GalleryPreview";

const Index = () => {
  const [mood, setMood] = useState("😊");

  const quickGames = [
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
  ];

  const todayAchievements = [
    { id: 1, title: "Утренняя улыбка", icon: "🌅", unlocked: true },
    { id: 2, title: "Добрый поступок", icon: "💝", unlocked: false },
    { id: 3, title: "Позитивная мысль", icon: "🌟", unlocked: true },
  ];

  const dailyChallenge = {
    title: "Сделай 3 комплимента",
    progress: 1,
    total: 3,
    icon: "💬",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative">
      <SplashCursor />
      <Navigation />

      <main className="pt-20 pb-8">
        <HeroSection mood={mood} setMood={setMood} />

        {/* Quick Games Section */}
        <section className="px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Быстрые игры для настроения 🎮
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {quickGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* Today's Challenge */}
        <section className="px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Вызов дня 🎯
          </h2>
          <div className="max-w-md mx-auto">
            <ChallengeCard challenge={dailyChallenge} />
          </div>
        </section>

        {/* Achievements Preview */}
        <section className="px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Твои достижения 🏆
          </h2>
          <div className="flex justify-center gap-4 flex-wrap max-w-md mx-auto">
            {todayAchievements.map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
              />
            ))}
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Галерея вдохновения 🖼️
          </h2>
          <GalleryPreview />
        </section>
      </main>
    </div>
  );
};

export default Index;
