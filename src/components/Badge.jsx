export default function Badge() {
  return (
    <>
      <div className="badge flex flex-col items-center mt-20">
        <div className="relative">
          <img src="./src/img/Group 3179.svg" alt="rectangle" />
          <div className="badge__content absolute top-0 translate-x-5 translate-y-4">
            <p>MasterClass</p>
            <p>By</p>
            <p>Alisha D’Souza</p>
          </div>
          <img
            className="absolute bottom-0 left-[15%] translate-x-2 translate-y-6 z-50"
            src="./src/img/Group 3182.svg"
            alt="link"
          />
        </div>

        <div className="relative">
          <img src="./src/img/Group 3181.svg" alt="rectangle" />
          <div className="badge__content absolute top-10 translate-x-4 left-0 ">
            <p className="rotate-3">11th September’ 21</p>
            <p className="rotate-3">5:30 PM</p>
          </div>
          <img
            className="absolute bottom-0 right-5 translate-y-7 translate-x-0 z-40"
            src="./src/img/Group 3183.svg"
            alt="link"
          />
        </div>
        <div className="relative">
          <img src="./src/img/Group 3180.svg" alt="rectangle" />
          <div className="absolute top-6 left-9 rotate-[-5deg]">
            <p>Book Now</p>
          </div>
        </div>
      </div>
    </>
  );
}
