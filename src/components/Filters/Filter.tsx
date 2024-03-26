export function Filter() {
  return (
    <div className="w-[30%] h-32 mt-11">
      <div className="flex gap-6 items-center">
        <span className="text-2xl text-black">Filters</span>
        <span className="text-md text-[#C4C4C4] border-b-2">Clear filters</span>
      </div>

      <div className="mt-6">
        <span className="font-bold text-md text-black">Categories</span>
        <div className="flex flex-col mt-5">
          {[
            "Jackets",
            "Fleece",
            "Sweatshirts & Hoodies",
            "Sweaters",
            "Shirts",
            "T-Shirts",
            "Pants & Jeans",
          ].map((item, index) => (
            <label key={index} className="flex items-center space-x-1 mb-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <span className="font-bold text-md text-black">Color</span>
        <div className="flex flex-row mt-5 flex-wrap gap-3 w-64">
          {[
            "bg-[#DF9167]",
            "bg-[#7B61FF]",
            "bg-[#219653]",
            "bg-[#2F80ED]",
            "bg-[#EB5757]",
            "bg-[#56CCF2]",
            "bg-[#4F4F4F]",
            "bg-[#BB6BD9]",
            "bg-[#F2F2F2]",
            "bg-[#6FCF97]",
          ].map((bgClass, index) => (
            <div key={index} className={`${bgClass} rounded-full w-10 h-10`} />
          ))}
        </div>
      </div>
    </div>
  );
}
