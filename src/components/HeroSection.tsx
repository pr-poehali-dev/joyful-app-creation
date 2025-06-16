interface HeroSectionProps {
  mood: string;
  setMood: (mood: string) => void;
}

const HeroSection = ({ mood, setMood }: HeroSectionProps) => {
  const moods = ["😊", "😄", "🥰", "😎", "🤗", "😍", "🌟", "💫"];

  return (
    <section className="text-center py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 bg-clip-text text-transparent animate-fade-in">
          Твой мир счастья начинается здесь!{mood && ` ${mood}`}
        </h1>

        <p className="text-xl text-gray-600 mb-8 animate-fade-in">
          Каждый день — это новая возможность для счастья и вдохновения
        </p>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-100 animate-scale-in">
          <p className="text-lg text-gray-700 mb-4">
            Какое у тебя настроение сегодня?
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            {moods.map((moodEmoji) => (
              <button
                key={moodEmoji}
                onClick={() => setMood(moodEmoji)}
                className={`text-3xl p-3 rounded-full transition-all duration-200 hover-scale border-2 ${
                  mood === moodEmoji
                    ? "bg-white shadow-2xl scale-110 ring-4 ring-purple-500/50 border-purple-300"
                    : "bg-white hover:bg-gray-50 shadow-lg border-gray-200 hover:border-purple-200"
                }`}
              >
                {moodEmoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
