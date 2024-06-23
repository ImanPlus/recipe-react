export default function FrameLessColumn() {
  return (
    <div className="flex flex-col justify-end items-center max-w-28 gap-56">
      <h1
        className="font-sans text-5xl -rotate-90 text-green-700"
        style={{ letterSpacing: 15 }}
      >
        Recipes
      </h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-sans text-6xl text-green-700">01</h1>
        <div className="flex flex-col justify-center w-4 h-full gap-3">
          <img src="./src/img/Ellipse-filled.svg" alt="Ellipse-filled" />
          <img src="./src/img/Ellipse-empty.svg" alt="Ellipse-empty" />
          <img src="./src/img/Ellipse-empty.svg" alt="Ellipse-empty" />
          <img src="./src/img/Ellipse-empty.svg" alt="Ellipse-empty" />
          <img src="./src/img/Ellipse-empty.svg" alt="Ellipse-empty" />
        </div>
        <img src="./src/img/Line 24.svg" alt="arrow-bottom" />
      </div>
    </div>
  );
}
