import { FaGreaterThan } from "react-icons/fa";
export default function BannerCard({ title, image, type }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className={`${type === "a" ? "h-[305px]" : "h-[570px]"}  pl-20 pt-16`}
    >
      <h1 className="text-4xl">{title}</h1>
      <button className="mt-3  text-gray-500 hover:text-black w-44 inline-flex items-center">
        <span className="p-2 mr-4 text-sm rounded-full bg-gray-200 flex justify-center items-center">
          <FaGreaterThan />
        </span>
        Shop Now
      </button>
    </div>
  );
}
