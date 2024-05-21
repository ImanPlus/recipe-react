import Navigator from "./components/Navigator";

function App() {
  return (
    <>
      <main className="container mx-auto h-screen">
        <div className="bg-gradient-to-br from-pink-200 to-green-200 border-[28px] border-green-200 border-solid w-full mt-36 rounded-[54px] h-screen p-5 grid grid-cols-[3fr_1fr_8fr] gap-2">
          <div className="menu bg-white rounded-[30px] shadow-md flex flex-col justify-start items-center ">
            <h1 className="text-4xl mt-4">SalZone</h1>
            <Navigator />
          </div>
          <div className="bg-green-500 line">column-2</div>
          <div className="bg-blue-500 recipe">column-3</div>
        </div>
      </main>
    </>
  );
}

export default App;
