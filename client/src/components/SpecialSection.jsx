import specials from "../data/specials";
import SpecialCard from "./SpecialCard";

function SpecialSection() {
  return (
    <section className="bg-[#FFF8F0] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-red-900">
          Today's Special
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Freshly prepared favourites from our kitchen.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((item) => (
            <SpecialCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialSection;