import { FiThumbsUp } from "react-icons/fi";

const HomeCarousel = () => {
  return (
    <div className="relative">
      <div className="relative w-[900px]">
        <div className="block bg-red-300 aspect-[7/4]"></div>
        <div className="absolute w-full bottom-0 h-44 _carouselGradient"></div>
      </div>
      <div className="absolute bottom-0 items-end flex gap-4 px-4">
        <div className="block w-[200px] bg-blue-300 aspect-[4/5]">image</div>
        <div className="flex flex-col w-[625px]">
          <h1 className="text-3xl font-semibold">Title</h1>
          <h2 className="text-xl font-semibold text-zinc-400 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit culpa ab aliquam officia, itaque cum laudantium
            numquam ex quo quod nobis laboriosam atque autem a enim vitae
            asperiores in aliquid.
          </h2>
          <div className="flex flex-row items-center gap-1 text-zinc-400 text-xl">
            <FiThumbsUp />
            <h1 className="text-lg">457</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
