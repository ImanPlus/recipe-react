export default function Banner() {
  return (
    <div className="rounded-[30px] bg-[url('./src/img/combined.svg')] object-cover bg-green-200">
      <div className="flex items-center justify-between h-full relative flex-nowrap">
        <div className="flex flex-col items-center px-5 py-5 gap-5">
          <h1 className="font-serif text-7xl">Delish Salads</h1>
          <h2 className="font-sans text-5xl" style={{ letterSpacing: "10px" }}>
            Like Never Before
          </h2>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-20">
          <img src="src/img/male-chef.svg" alt="chef" />
        </div>
      </div>
    </div>
  );
}
