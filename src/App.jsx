import Navigator from "./components/Navigator";

function App() {
  return (
    <>
      <main className="container mx-auto h-screen">
        <div className="bg-gradient-to-br from-pink-200 to-green-200 border-[28px] border-green-200 border-solid w-full mt-36 rounded-[54px] h-screen p-5 grid grid-cols-[3fr_1fr_8fr] gap-2">
          {/* Left Column */}
          <div className="menu bg-white rounded-[30px] shadow-md flex flex-col justify-start items-center ">
            <h1 className="text-4xl mt-4">SalZone</h1>
            <Navigator />
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
          </div>
          {/* Middle Column */}
          <div className="bg-green-500 line">column-2</div>
          {/* Right Column */}
          <div className="bg-blue-500 recipe">column-3</div>
        </div>
      </main>
    </>
  );
}

export default App;
