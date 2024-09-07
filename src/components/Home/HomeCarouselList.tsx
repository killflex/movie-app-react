import { CarouselMovie } from "../../utils/constant";
import { imagePath } from "../../utils/constant";
import { FiThumbsUp } from "react-icons/fi";

interface HomeCarouseListProps {
  next: number[];
  carouselMovies: CarouselMovie[];
}

const HomeCarouselList = ({ next, carouselMovies }: HomeCarouseListProps) => {
  console.log("🚀 ~ HomeCarouselList ~ next:", next);

  return (
    <div>
      <h1 className="font-bold text-xl text-yellow-500">Up Next</h1>

      {next.map((item, index) => (
        <div className="flex gap-2">
          <img
            src={imagePath + carouselMovies[item]?.poster_path}
            className="w-[125px]"
            alt=""
          />
          <div className="flex flex-col justify-between py-2">
            <div className="flex flex-col gap-1 leading-5">
              <h1 className="">{carouselMovies[item]?.title}</h1>
              <h1 className="line-clamp-3 text-zinc-300">
                {carouselMovies[item]?.overview}
              </h1>
            </div>
            <div className="flex items-center gap-1">
              <FiThumbsUp />
              <h2>{carouselMovies[item]?.vote_count}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCarouselList;
