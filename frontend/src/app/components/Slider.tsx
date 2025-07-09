import Image from "next/image"
import { useEffect, useState } from "react";

export default function Slider() {
  const [idImage, setIdImage] = useState(1);

  const moveRight = () => {
    if (idImage === 3) {
      setIdImage(1);
    } else {
      setIdImage(idImage + 1);
    }
  }

  const moveLeft = () => {
    if (idImage <= 1) {
      setIdImage(3);
    } else {
      setIdImage(idImage - 1);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIdImage(prevId => (prevId === 3 ? 1 : prevId + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="relative bg-gray-100 overflow-hidden">
        {/* Geometric Lines */}
        <div className="absolute inset-0 m-0">
          <Image
            src={`/element${idImage}.jpg`}
            alt="FK Stickers logo"
            width={1896}
            height={424}
            className="w-full"
          />
        </div>

        {/* Carousel Navigation */}
        <div className="relative h-86 mx-8">
          <button
            type="button"
            onClick={moveLeft}
            className="absolute left-3 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-[#FFF4] text-fk-white hover:bg-fk-lila hover:text-fk-violet w-12 h-12 flex justify-center items-center cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 12h16M9 17s-5-3.682-5-5s5-5 5-5" color="currentColor" />
            </svg>
          </button>

          {/* Right Navigation Circle */}
          <button
            type="button"
            onClick={moveRight}
            className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-[#FFF4] text-fk-white hover:bg-fk-lila hover:text-fk-violet w-12 h-12 flex justify-center items-center cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4m11 5s5-3.682 5-5s-5-5-5-5" color="currentColor" />
            </svg>
          </button>

          <div className="absolute right-1/2 translate-x-1/2 bottom-4 flex items-center gap-4">
            <button
              type="button"
              onClick={(e) => setIdImage(1)}
              className={`z-20 rounded-full bg-fk-lila h-3 w-3 shadow-md ${ idImage === 1 ? "border-2 border-fk-violet h-4 w-4 shadow-lg" : ""} cursor-pointer`}
            ></button>

            <button
              type="button"
              onClick={(e) => setIdImage(2)}
              className={`z-20 rounded-full bg-fk-lila h-3 w-3 shadow-md ${ idImage === 2 ? "border-2 border-fk-violet h-4 w-4 shadow-lg" : ""} cursor-pointer`}
            > </button>

            <button
              type="button"
              onClick={(e) => setIdImage(3)}
              className={`z-20 rounded-full bg-fk-lila h-3 w-3 shadow-md ${ idImage === 3 ? "border-2 border-fk-violet h-4 w-4 shadow-lg" : ""} cursor-pointer`}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}
