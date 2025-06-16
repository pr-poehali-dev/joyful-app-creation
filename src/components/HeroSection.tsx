interface HeroSectionProps {
  mood: string;
  setMood: (mood: string) => void;
}

const HeroSection = ({ mood, setMood }: HeroSectionProps) => {
  const moods = ["😊", "😄", "🥰", "😎", "🤗", "😍", "🌟", "💫"];

  return (
    <section className="text-center py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-fade-in">
          Добро пожаловать в радость! {mood}
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
                className={`text-3xl p-3 rounded-full transition-all duration-200 hover-scale ${
                  mood === moodEmoji
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg scale-110"
                    : "bg-white/50 hover:bg-white/80 shadow-md"
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
