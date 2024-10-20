import Group3179 from "../img/Group 3179.svg";
import Group3182 from "../img/Group 3182.svg";
import Group3181 from "../img/Group 3181.svg";
import Group3183 from "../img/Group 3183.svg";
import Group3180 from "../img/Group 3180.svg";

export default function Badge() {
  return (
    <>
      <div className="badge flex flex-col items-center mt-20 pb-7">
        <div className="relative">
          <img src={Group3179} alt="rectangle" />
          <div className="badge__content absolute top-0 translate-x-2 translate-y-4 text-center">
            <p className="font-serif text-2xl">MasterClass</p>
            <p className="font-sans text-xl">By</p>
            <p className="font-sans text-3xl">Alisha D’Souza</p>
          </div>
          <img
            className="absolute bottom-0 left-[15%] translate-x-2 translate-y-6 z-50"
            src={Group3182}
            alt="link"
          />
        </div>

        <div className="relative">
          <img src={Group3181} alt="rectangle" />
          <div className="badge__content absolute top-10 translate-x-6 left-0  font-sans text-xl text-center">
            <p className="rotate-3">11th September’ 21</p>
            <p className="rotate-3">5:30 PM</p>
          </div>
          <img
            className="absolute bottom-0 right-5 translate-y-7 translate-x-0 z-40"
            src={Group3183}
            alt="link"
          />
        </div>
        <div className="relative">
          <img src={Group3180} alt="rectangle" />
          <div className="absolute top-5 left-8 rotate-[-5deg] font-serif text-xl">
            <p>Book Now</p>
          </div>
        </div>
      </div>
    </>
  );
}
