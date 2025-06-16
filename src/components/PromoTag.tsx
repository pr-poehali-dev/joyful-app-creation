interface PromoTagProps {
  text: string;
  color: "red" | "green" | "blue" | "purple";
}

const PromoTag = ({ text, color }: PromoTagProps) => {
  const colorClasses = {
    red: "bg-gradient-to-r from-red-500 to-pink-500",
    green: "bg-gradient-to-r from-green-500 to-emerald-500",
    blue: "bg-gradient-to-r from-blue-500 to-cyan-500",
    purple: "bg-gradient-to-r from-purple-500 to-violet-500",
  };

  return (
    <div
      className={`${colorClasses[color]} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover-scale transition-all duration-200 animate-pulse`}
    >
      {text}
    </div>
  );
};

export default PromoTag;
