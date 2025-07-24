import React from "react";

interface CareerCardProps {
  id: "education" | "job" | "business";
  title: string;
  description: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: (id: "education" | "job" | "business") => void;
}

const CareerCard: React.FC<CareerCardProps> = ({
  id,
  title,
  description,
  icon,
  active,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`cursor-pointer bg-white border rounded-xl shadow-md p-6 group transition-all duration-300 hover:shadow-xl ${
        active ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"
      }`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-2 bg-blue-50 rounded-full group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-blue-900 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default CareerCard;
