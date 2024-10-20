import Home from "../img/Home.svg";
import ShoppingBasket from "../img/Shopping-basket.svg";
import BookOpen from "../img/Book-open.svg";
import Desktop from "../img/Desktop.svg";
import NotificationOn from "../img/Notification-on.svg";
import Headset from "../img/Headset.svg";

export default function Navigator() {
  return (
    <>
      <nav className="flex flex-col gap-2 text-2xl mt-5 items-center ">
        <ul className="flex gap-4 flex-col">
          <li className="flex items-center hover:text-blue-500">
            <img src={Home} alt="home" className="mr-2" />
            <span className="text-2xl cursor-pointer">Home</span>
          </li>
          <li className="flex items-center hover:text-blue-500">
            <img src={ShoppingBasket} alt="hoRecipesme" className="mr-2" />
            <span className="text-2xl cursor-pointer">Recipes</span>
          </li>
          <li className="flex items-center hover:text-blue-500">
            <img src={BookOpen} alt="Books" className="mr-2" />
            <span className="text-2xl cursor-pointer">Books</span>
          </li>
          <li className="flex items-center hover:text-blue-500">
            <img src={Desktop} alt="Blog" className="mr-2" />
            <span className="text-2xl cursor-pointer">Blog</span>
          </li>
          <li className="flex items-center hover:text-blue-500">
            <img src={NotificationOn} alt="Subscription" className="mr-2" />
            <span className="text-2xl cursor-pointer">Subscription</span>
          </li>
          <li className="flex items-center hover:text-blue-500">
            <img src={Headset} alt="Contact us" className="mr-2" />
            <span className="text-2xl cursor-pointer">Contact us</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
