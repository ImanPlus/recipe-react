export default function Navigator() {
  return (
    <>
      <nav className="flex flex-col gap-2 text-2xl mt-5 items-center ">
        <ul className="flex gap-4 flex-col">
          <li className="flex items-center hover:text-blue-500">
            <img src="./src/img/Home.svg" alt="home" className="mr-2" />
            <span className="text-2xl cursor-pointer">Home</span>
          </li>
          <li className="flex items-center hover:text-blue-500">
            <img
              src="./src/img/Shopping-basket.svg"
              alt="hoRecipesme"
              className="mr-2"
            />
            <span className="text-2xl cursor-pointer">Recipes</span>
          </li>
          <li className="flex items-center hover:text-blue-500">
            <img src="./src/img/Book-open.svg" alt="Books" className="mr-2" />
            <span className="text-2xl cursor-pointer">Books</span>
          </li>
          <li className="flex items-center hover:text-blue-500">
            <img src="./src/img/Desktop.svg" alt="Blog" className="mr-2" />
            <span className="text-2xl cursor-pointer">Blog</span>
          </li>
          <li className="flex items-center hover:text-blue-500">
            <img
              src="./src//img/Notification-on.svg"
              alt="Subscription"
              className="mr-2"
            />
            <span className="text-2xl cursor-pointer">Subscription</span>
          </li>
          <li className="flex items-center hover:text-blue-500">
            <img
              src="./src/img/Headset.svg"
              alt="Contact us"
              className="mr-2"
            />
            <span className="text-2xl cursor-pointer">Contact us</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
