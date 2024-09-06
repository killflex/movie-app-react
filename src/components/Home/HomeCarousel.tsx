import { useEffect, useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { imagePath } from "../../utils/constant";
import Carousel from "react-bootstrap/Carousel";
import baseApi from "../../api/axiosInstance";

const HomeCarousel = () => {
  interface CarouselMovies {
    backdrop_path: string;
    poster_path: string;
    overview: string;
    title: string;
    vote_count: number;
  }

  const [carouselMovies, setCarouselMovies] = useState<CarouselMovies[]>([]);

  const fetchUpComing = async () => {
    try {
      const response = await baseApi.get(
        "/3/movie/popular?language=en-US&page=1"
      );
      setCarouselMovies(response.data.results);
    } catch (error) {
      console.log("fetch upcoming movies error:", error);
    }
  };

  useEffect(() => {
    fetchUpComing();
  }, []);

  return (
    <div className="relative w-[900px]">
      <Carousel indicators={false}>
        {carouselMovies.map((movie, index) => (
          <Carousel.Item key={index}>
            <div className="relative ">
              <div className="aspect-[7/4]">
                <img
                  src={imagePath + movie?.backdrop_path}
                  className="w-full"
                  alt=""
                />
              </div>

              <div className="absolute w-full bottom-0 h-44 _carouselGradient"></div>
            </div>
            <div className="absolute bottom-0 items-end flex gap-4 px-4">
              <div className="w-[155px] aspect-[4/5]">
                <img src={imagePath + movie?.poster_path} alt="" />
              </div>

              <div className="flex flex-col gap-1 w-[625px]">
                <h1 className="text-3xl font-semibold text-white">
                  {movie?.title}
                </h1>
                <h2 className="text-xl font-semibold text-zinc-400 line-clamp-3">
                  {movie?.overview}
                </h2>
                <div className="flex flex-row items-center gap-1 text-zinc-400 text-xl">
                  <FiThumbsUp />
                  <h1 className="text-lg">{movie?.vote_count}</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
