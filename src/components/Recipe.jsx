import clock from "../img/clock.svg";
import dish from "../img/dish.svg";
import sezarSalad from "../img/sezar-salad.svg";
import greekSalad from "../img/greek-salad.svg";

export default function Recipe() {
  return (
    <div className="grid grid-cols-2 gap-5 max-h-80">
      <div className="bg-rose-100 container py-6 px-6 shadow-md rounded-[30px]">
        <div className="flex flex-col">
          <h1 className="font-sans text-5xl text-zinc-800">
            Mediterranean Cobb Salad
          </h1>
          <div className="flex flex-col font-Inter text-sm">
            <div className="inline-flex gap-1">
              <img src={clock} alt="clock" />
              <p>15 Minutes</p>
            </div>
            <p>Serves: 2 people</p>
          </div>
          <div className="flex mt-3">
            <p className="font-Inter text-base">
              American garden salad typically made with chopped salad greens,
              tomato, crisp bacon, hard-boiled eggs, avocado, chives, blue
              cheese, and red-wine vinaigrette
            </p>
            <img className="h-52" src={dish} alt="dish" />
          </div>
          <p className="font-Inter text-xs">Recipe By Alisha D’souza</p>
        </div>
      </div>
      <div className="container grid grid-rows-2 gap-3">
        <div className="flex justify-end relative">
          <div className="bg-teal-100 rounded-tl-[175px] rounded-tr-3xl rounded-b-3xl px-6 py-5 pb-0 max-w-[26rem]">
            <div className="flex flex-col pl-24 gap-1">
              <h1 className="font-sans text-3xl">Caesar Salad</h1>
              <div className="inline-flex font-Inter text-xs">
                <img className="w-4 h-4" src={clock} alt="clock" />
                <p className="ml-1">30 Minutes | Serves: 2 people</p>
              </div>
              <p className="font-Inter text-sm mt-1">
                Romaine lettuce and croutons dressed with lemon juice, olive
                oil, egg, garlic, Dijon mustard, Parmesan cheese, and black
                pepper.
              </p>
            </div>
            <div className="absolute left-0 top-0">
              <img src={sezarSalad} alt="sezar-salad" />
            </div>
          </div>
        </div>
        <div className="flex justify-end relative">
          <div className="bg-orange-200 rounded-tl-[175px] rounded-tr-3xl rounded-b-3xl px-6 py-5 pb-0 max-w-[26rem]">
            <div className="flex flex-col pl-24 gap-1">
              <h1 className="font-sans text-3xl">Greek Salad</h1>
              <div className="inline-flex font-Inter text-xs">
                <img className="w-4 h-4" src={clock} alt="clock" />
                <p className="ml-1">30 Minutes | Serves: 2 people</p>
              </div>
              <p className="font-Inter text-sm mt-1">
                Made with tomatoes, cucumbers, onion, feta cheese, and olives
                and dressed with salt, pepper, oregano, and olive oil.
              </p>
            </div>
            <div className="absolute left-0 top-0">
              <img src={greekSalad} alt="greek-salad" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
