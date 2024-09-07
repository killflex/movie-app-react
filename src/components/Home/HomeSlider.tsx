import { useEffect, useState } from "react";
import { CarouselMovie } from "../../utils/constant";
import baseApi from "../../api/axiosInstance";
import HomeCarousel from "./HomeCarousel";
import HomeCarouselList from "./HomeCarouselList";

const HomeSlider = () => {
  const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([]);
  const [next, setNext] = useState<number[]>([]);
  const [selected, setSelected] = useState(0);

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
    <div className="row px-10">
      <div className="col-8">
        <HomeCarousel carouselMovies={carouselMovies} />
      </div>
      <div className="col-4">
        <HomeCarouselList next={next} carouselMovies={carouselMovies} />
      </div>
    </div>
  );
};

export default HomeSlider;
