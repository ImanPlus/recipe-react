import Badge from "./components/Badge";
import Banner from "./components/Banner";
import FrameLessColumn from "./components/FrameLessColumn";
import Navigator from "./components/Navigator";
import Recipe from "./components/Recipe";

function App() {
  return (
    <>
      <main className="container mx-auto h-full">
        <div className="bg-gradient-to-br from-pink-200 to-green-200 border-[28px] border-green-200 border-solid w-full mt-36 rounded-[54px] h-full p-5 grid grid-cols-[3fr_1fr_8fr] gap-2">
          {/* Left Column */}
          <div className="menu bg-white rounded-[30px] shadow-md flex flex-col justify-start items-center h-full">
            <h1 className="text-4xl mt-4 font-serif">SalZone</h1>
            <Navigator />
            <Badge />
          </div>

          {/* Middle Column */}
          <FrameLessColumn />

          {/* Right Column */}
          <div className="container grid grid-rows-2 row-span-2 gap-3">
            <Banner />
            <Recipe />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
